import React, { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import CartIcon from "./CartIcon";
import CartContext from "../store/cart-context";

const HeaderCart = (props) => {
    const ctx = useContext(CartContext);
    let totalItem = 0;
    ctx.items.forEach((element) => {
        totalItem += element.quantity;
    });

    return (
        <Col xs={12} sm={4} md={3}>
            <Button
                onClick={props.onClick}
                variant="light"
                className="p-2 d-flex align-items-center justify-content-between"
            >
                <CartIcon /> {/* Render your CartIcon component here */}
                <h5 className="mb-0 mx-2 d-none d-sm-block">Cart</h5>
                <h5 className="mb-0 mx-2 d-none d-sm-block">
                    <span className="bg-secondary text-white rounded px-2">{totalItem}</span>
                </h5>
            </Button>
        </Col>
    );
};

export default HeaderCart;
