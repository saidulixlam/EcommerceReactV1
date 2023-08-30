import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import CartContext from "../store/cart-context";

const Cart = () => {
    const ctx = useContext(CartContext);
    // console.log(ctx);
    const productsArr = ctx.items;
// console.log();
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
                                <td>1</td>


                                <td><button className="btn btn-danger">REMOVE</button></td>

                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>
            <div className="text-right">
                <strong>Total</strong>
            </div>

            {/* Purchase Button */}
            <div className="text-center">
                <Button variant="primary">PURCHASE</Button>
            </div>
        </Container>
    );
};

export default Cart;
