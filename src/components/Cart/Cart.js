import { Button } from "react-bootstrap";

import React, { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import CartContext from "../store/cart-context";
// import AuthContext from "../../authCtx/auth-context";

const Cart = () => {
    const ctx = useContext(CartContext);

    const productsArr = ctx.items;

    let totAmount = 0;
    productsArr.forEach((item) => {
        console.log(item);
        totAmount += item.price;
        
    })

    return (
        <Container>
            <div className="d-flex justify-content-between">
                <Table hover>
                    <thead>
                        <tr>
                            <th>ITEM</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>-</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsArr.map((item) => (
                            <tr key={item.title}>
                                <td className="d-flex">
                                    <img src={item.imageUrl} alt="Albums" width="50" height="50" />
                                    {item.title}
                                </td>
                                <td>${item.price}</td>
                                <td>1
                                </td>
                                <td><button className="btn btn-danger" onClick={() => ctx.removeItem(item._id)}>REMOVE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>
            <div className="d-flex justify-content-between">
                <div>
                    <h3><strong>Total</strong></h3>
                </div>
                <div>
                    <h4><strong>${totAmount}</strong></h4>
                </div>
            </div>

            {/* Purchase Button */}
            <div className="text-center">
                <Button variant="primary">PURCHASE</Button>
            </div>
        </Container>
    );
};

export default Cart;
