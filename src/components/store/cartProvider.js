import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items,setItems]=useState([]);
    const addItemHandler = (item) => {
        setItems([...items, item]);
    }
console.log(items);
    const removeItemHandler =(id)=>{
        const updatedItems = items.filter(item => item.id !== id);
    
    // Update the state with the new array of items
    setItems(updatedItems);
    }
    const cartContext={
        items:items,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return (  
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}
 
export default CartProvider;