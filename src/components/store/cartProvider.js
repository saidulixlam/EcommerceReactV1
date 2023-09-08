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

    // Function to fetch cart items from the server
    const getItems = async () => {
        try {
            // Helper function to remove "@" and "." characters from email
            const removeAtSymbol = (email) => {
                return email.replace(/[@.]/g, '');
            };

            const processedEmail = removeAtSymbol(useremail);
            console.log('Fetching cart items...');
            
            // Replace with your server endpoint
            const response = await axios.get(`https://crudcrud.com/api/9bbfc1dcd88d473d8a8f8acfd58d8248/${processedEmail}`);
            
            updatedItems(response.data);
            console.log('Cart items fetched:', items);
        } catch (error) {
            console.error('Error retrieving cart items:', error);
        }
    }

    // Function to add an item to the cart
    const addItemHandler = async (item) => {
        console.log('Adding item:', item);
        const updatedItemsArray = [...items];
        
        // Check if an item with the same title already exists in the cart
        const existingItemIndex = updatedItemsArray.findIndex((existingItem) => existingItem.title === item.title);

        if (existingItemIndex !== -1) {
            // If the item with the same title exists, show an alert
            alert('The same item already exists in the cart');
        } else {
            try {
                // Helper function to remove "@" and "." characters from email
                const removeAtSymbol = (email) => {
                    return email.replace(/[@.]/g, '');
                };
                const processedEmail = removeAtSymbol(useremail);
                
                // Make a POST request to add the item to the server
                const res = await axios.post(`https://crudcrud.com/api/9bbfc1dcd88d473d8a8f8acfd58d8248/${processedEmail}`, item);
                
                // Add the item to the cart state
                updatedItemsArray.push(res.data);
            } catch (error) {
                console.error("Error adding item:", error);
            }
            
            // Update the cart state
            updatedItems(updatedItemsArray);
        }
    }

    // Function to remove an item from the cart
    const removeItemHandler = async (id) => {
        console.log('Removing item with id:', id);
        try {
            // Helper function to remove "@" and "." characters from email
            const removeAtSymbol = (email) => {
                return email.replace(/[@.]/g, '');
            }

            const processedEmail = removeAtSymbol(useremail);

            // Make a DELETE request to remove the item from the server
            await axios.delete(`https://crudcrud.com/api/9bbfc1dcd88d473d8a8f8acfd58d8248/${processedEmail}/${id}`);

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
