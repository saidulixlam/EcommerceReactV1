import { Card, Col, Button } from "react-bootstrap";
import axios from 'axios';
import './ProductDipaly.css'
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { Link } from "react-router-dom";
import AuthContext from "../../authCtx/auth-context";
const ProductDisplay = (props) => {
    const ctx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const item = {
        title: props.title,
        imageUrl: props.imageUrl,
        price: props.price,
       
    }
    const useremailid = authCtx.email;

    const addToCartHandler = async (e) => {
        e.preventDefault();
        ctx.addItem(item);

        try {
            const removeAtSymbol = (email) => {
                return email.replace(/[@.]/g, ''); // Replace "@" with an empty string
            };
            // Process the email ID
            const processedEmail = removeAtSymbol(useremailid);
            const res = await axios.post(`https://crudcrud.com/api/0c4f5d0eab7c47adaf3627c12ef80cfc/${processedEmail}`, item);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Col style={{ display: 'flex', justifyContent: 'space-evenly' }} sm={6} md={6} lg={6} xl={6}>
            <Card style={{ width: '16rem', border: 'none' }}>
                <h3 className="text-center my-4">{props.title}</h3>
                <Link to={`/product/${props.title}`}>
                    <Card.Img
                        variant="top"
                        src={props.imageUrl}
                        style={{
                            animation: 'enlargeAndMove 2s ease-in-out infinite alternate',
                            transformOrigin: 'center',
                        }}
                        className="imageStyle"
                    />
                </Link>

                <Card.Body className="d-flex flex-column justify-content-center">
                    <Card.Text className="d-flex justify-content-between">
                        <span>${props.price}</span>
                        <Button variant="primary" onClick={addToCartHandler}>Add to cart</Button>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default ProductDisplay;
