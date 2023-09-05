import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import React Router
import ProductList from './components/products/ProductList';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Cart from './components/Cart/Cart';
import About from './components/Pages/About'; // Import the About component
import CartProvider from './components/store/cartProvider';
import Home from './components/Pages/Home';
import ContactUs from './components/Pages/ContactForm';
import ProductDetails from './components/products/PoductDetails'
import Login from './components/Pages/Login';
// import AuthContext from './authCtx/auth-context';


const App = () => {
  const [showCart, setShowCart] = useState(false);
  // const ctx=useContext(AuthContext);

  const cartHandler = () => {
    setShowCart(!showCart);
  };

  const closeCart = () => {
    setShowCart(false); // Close the cart when clicking on the backdrop
  };

  const cartStyle = {
    position: 'fixed',
    top: '6rem',
    right: showCart ? '0' : '-400px', // Adjust the width to your cart's width
    height: '100%',
    width: '400px', // Set your desired cart width
    backgroundColor: 'white',
    zIndex: '999',
    transition: 'right 0.3s ease-in-out',
  };

  const backdropStyle = {
    display: showCart ? 'block' : 'none',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    zIndex: '998', // Below the cart
  };
  async function adduserHandler(user) {
    const res = await fetch('https://ecommerce-react-2638b-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        //it is not required bvut good practice to aware your backend about data u r sending
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <Router>
      <CartProvider>
        <NavBar onClick={cartHandler} />
        <Header />

        {/* Use Routes with Route components */}
        <Switch>
          <Route path="/about" ><About /></Route>
          <Route path="/login" ><Login /></Route>
          <Route path="/products" ><ProductList /></Route>
          <Route path="/contact" ><ContactUs onAddUser={adduserHandler} /></Route>
          <Route path="/home" exact ><Home /></Route>
          <Route path="/product/:productId" ><ProductDetails /></Route>
        </Switch>

        <div style={backdropStyle} onClick={closeCart}></div>
        <div style={cartStyle}>
          <Cart />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
