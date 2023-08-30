import { Button } from "react-bootstrap";
import CartIcon from "./CartIcon";

const HeaderCart = (props) => {
    const total=69;
    return ( 
        
        <Button variant="light" onClick={props.onClick} >
           
        {total}
        <CartIcon/>
        
       </Button>
      
       
    )
}
 
export default HeaderCart;