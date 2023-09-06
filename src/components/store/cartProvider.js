import { useState, useEffect, useContext } from "react";
import CartContext from "./cart-context";
import AuthContext from "../../authCtx/auth-context";
import axios from "axios";

const CartProvider = (props) => {
    const [items, updatedItems] = useState([]);
    console.log(items);
    const authCtx = useContext(AuthContext);
    const useremail = authCtx.email;

    useEffect(() => {
        // Call the getItems function when the component is mounted
        console.log('this was called');
        getItems();
    }, [authCtx.isLoggedIn]); // Empty dependency array ensures it's only called once

    const getItems = async () => {
        try {
            const removeAtSymbol = (email) => {
                return email.replace(/[@.]/g, ''); // Replace "@" with an empty string
            };
            // Process the email ID
            const processedEmail = removeAtSymbol(useremail);
            console.log('i am there in getitems');
            const response = await axios.get(`https://crudcrud.com/api/f30c160f874647eba43ddac72bd0fd61/${processedEmail}`);
            // Handle success (e.g., update the cart state on the frontend)
            updatedItems(response.data);
            console.log(items);
        } catch (error) {
            console.error('Error retrieving cart items:', error);
        }
    }


    const addItemHandler = async (item) => {

        const updatedItemsArray = [...items];
        // Check if an item with the same ID already exists
        // const existingItemIndex = updatedItemsArray.findIndex((existingItem) => existingItem.id === item.id);

        // if (existingItemIndex !== -1) {
        //     // If the item with the same ID exists, update its quantity
        //     alert('Same item already exists');
        // } else {
        //     // If the item with the same ID doesn't exist, add it to the array
        //     updatedItemsArray.push(item);
        //     // Update the state with the new items array
        //     updatedItems(updatedItemsArray);

        try {
            // Make a POST request to add the item to the server
            const removeAtSymbol = (email) => {
                return email.replace(/[@.]/g, ''); // Replace "@" with an empty string
            };
            const processedEmail = removeAtSymbol(useremail);
            const res = await axios.post(`https://crudcrud.com/api/f30c160f874647eba43ddac72bd0fd61/${processedEmail}`, item);

            // const existingItemIndex = updatedItemsArray.findIndex((existingItem) => existingItem.id === item.id);

            // if (existingItemIndex !== -1) {
            //     // If the item with the same ID exists, update its quantity
            //     alert('Same item already exists');
            // } else {
                updatedItemsArray.push(res.data);
               
            

        } catch (error) {
            console.error("Error adding item:", error);
        }
        
        updatedItems(updatedItemsArray);
    }

    useEffect(() => {
        // Call the getItems function when the component is mounted
        getItems();
    }, []);

    const removeItemHandler = async (id) => {
        console.log(id);
        try {
            const removeAtSymbol = (email) => {
                return email.replace(/[@.]/g, ''); // Replace "@" with an empty string
            }

            const processedEmail = removeAtSymbol(useremail);

            await axios.delete(`https://crudcrud.com/api/f30c160f874647eba43ddac72bd0fd61/${processedEmail}/${id}`);

            // Update the state by filtering out the deleted item
            const updatedItemsArray = items.filter((item) => item._id !== id);
            updatedItems(updatedItemsArray);
        } catch (error) {
            // Handle errors
            console.error("Error deleting cart item:", error);
        }
    };

    const cartContext = {
        items: items,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;