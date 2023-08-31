import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import ProductList from './components/products/ProductList';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Cart from './components/Cart/Cart';
import About from './components/Pages/About'; // Import the About component
import CartProvider from './components/store/cartProvider';

const App = () => {
  const [showCart, setShowCart] = useState(false);

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

  return (
    <Router>
      <CartProvider>
        <NavBar onClick={cartHandler} />
        <Header />

        {/* Use Routes with Route components */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<ProductList />} />
          <Route path="/" element={<ProductList />} />
        </Routes>

        <div style={backdropStyle} onClick={closeCart}></div>
        <div style={cartStyle}>
          <Cart />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
