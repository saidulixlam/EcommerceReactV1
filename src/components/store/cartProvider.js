import { useState, useEffect, useContext } from "react";
import CartContext from "./cart-context";
import AuthContext from "../../authCtx/auth-context";
import axios from "axios";

const CartProvider = (props) => {
    // State to hold cart items
    const [items, updatedItems] = useState([]);
    const authCtx = useContext(AuthContext);
    const useremail = authCtx.email;
    const isLoggedIn = authCtx.isLoggedIn;

    // Function to fetch cart items from the server
    const getItems = async () => {
        try {
            // Replace with your server endpoint
            const response = await axios.get(`https://crudcrud.com/api/f87ab8c879a74644b8c794e4b8149d63/${useremail}`);

            updatedItems(response.data);
            
        } catch (error) {
            console.error('Error retrieving cart items:', error);
        }
    }

    // Load cart items from localStorage when the component is mounted
    useEffect(() => {
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
            updatedItems(JSON.parse(storedItems));
        }
    }, []);

    // Handle the logic when user logs in or out
    useEffect(() => {
        if (isLoggedIn) {
            // User is logged in, make the request to get cart items
            getItems();
        } else {
            // User is logged out, clear the cart items
            updatedItems([]);
        }
    }, [isLoggedIn]);

    // Save cart items to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(items));
    }, [items]);

    // Function to add an item to the cart
    const addItemHandler = async (item) => {
      console.log(item);
        const updatedItemsArray = [...items];
        let url = `https://crudcrud.com/api/f87ab8c879a74644b8c794e4b8149d63/${useremail}`;
      
        // Check if an item with the same title already exists in the cart
        const existingItemIndex = updatedItemsArray.findIndex(
          (existingItem) => existingItem.title === item.title
        );
      
        if (existingItemIndex !== -1) {
          // If the item already exists, update the quantity in the cart state
          updatedItemsArray[existingItemIndex].quantity += Number(item.quantity);
      
          try {
            // Update the item's quantity on the server
            const itemIdToUpdate = updatedItemsArray[existingItemIndex]._id; // Assuming _id is the unique identifier for items on the server
            const updatedItem = {
              title:item.title,
              imageUrl:item.imageUrl,
              price:item.price,
              quantity: updatedItemsArray[existingItemIndex].quantity
            };
      
            // Make a PUT request to replace the item on the server with the updated quantity
            await axios.put(`${url}/${itemIdToUpdate}`, updatedItem);
      
            // Update the cart state
            
          } catch (error) {
            console.error("Error updating item:", error);
          }
        } else {
          try {
            // Make a POST request to add the item to the server
            const res = await axios.post(url, item);
      
            // Add the item to the cart state
            updatedItemsArray.push(res.data);
      
            // Update the cart state
            
          } catch (error) {
            console.error("Error adding item:", error);
          }
        }
        updatedItems(updatedItemsArray);
      };
      
    // Function to remove an item from the cart
    const removeItemHandler = async (id) => {
        try {
            // Make a DELETE request to remove the item from the server
            await axios.delete(`https://crudcrud.com/api/f87ab8c879a74644b8c794e4b8149d63/${useremail}/${id}`);

            // Update the cart state by filtering out the deleted item
            const updatedItemsArray = items.filter((item) => item._id !== id);
            updatedItems(updatedItemsArray);
        } catch (error) {
            // Handle errors
            console.error("Error deleting cart item:", error);
        }
    };

    // Cart context with items and handler functions
    const cartContext = {
        items: items,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    // Provide the cart context to child components
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
