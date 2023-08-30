import { Button } from "react-bootstrap";
import CartIcon from "./CartIcon";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const HeaderCart = (props) => {
    const ctx=useContext(CartContext);
    const total=ctx.items.length;
    return ( 
        
        <Button variant="light" onClick={props.onClick} >
           
        {total}
        <CartIcon/>
        
       </Button>
      
       
    )
}
 
export default HeaderCart;