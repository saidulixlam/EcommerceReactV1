import React, { Fragment, useContext } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { productArray } from "./ProductArray";
import CartContext from "../store/cart-context";

const ProductDetails = () => {
  const history = useHistory();
  const ctx = useContext(CartContext);
  const { productId } = useParams();
  const productsArr = productArray;

  const product = productsArr.find((elem) => elem.title === productId);

  function buynowHandler(e) {
    e.preventDefault();
    history.replace("/cart");
  }

  return (
    <Fragment>
      <h1 className="mb-4 my-6 p-4 bg-light shadow text-center">{product.title}</h1>
      <Container className="my-3">
        <Row>
          {/* Product Images Section */}
          <Col xs={12} md={6} lg={4} className="mb-4">
            <Card.Img
              variant="top"
              src={product.imageUrl}
              className="imageStyle rounded"
            />
          </Col>
          {/* Product Description Section */}
          <Col xs={12} md={6} lg={8}>
            <h3 className="mb-4 my-4 p-4 bg-light shadow">Product Description</h3>
            <ul className="mb-4 my-4 p-4 bg-light shadow">
              <li>It is good and beautiful and awesome and...</li>
              <li>It is good and beautiful and awesome and...</li>
              <li>It is good and beautiful and awesome and...</li>
              {/* Add more description items */}
            </ul>
            <div>
              <h3 className="p-3 bg-info shadow rounded">Price: ${product.price}</h3>
              <div className="d-flex gap-2 my-4">
                <Button
                  variant="primary"
                  onClick={() => ctx.addItem({ ...product, quantity: 1 })}
                >
                  Add to Cart
                </Button>
                <Button variant="success" onClick={buynowHandler}>
                  Buy Now
                </Button>
              </div>
              <section className="mb-4 my-4 p-4 bg-light shadow">
                <h3>User Reviews</h3>
                <div className="mb-3">
                  <h4>Amber</h4>
                  <p>Great phone! I love the camera quality and the battery life.</p>
                </div>
                <div className="mb-3">
                  <h4>Sahid</h4>
                  <p>This phone is amazing. It's fast and the display is stunning.</p>
                </div>
                <div className="mb-3">
                  <h4>Roshan</h4>
                  <p>Not satisfied with the battery life. Everything else is good.</p>
                </div>
                <div className="mb-3">
                  <h4>Mohit Negi</h4>
                  <p>Not satisfied with the battery life. Everything else is good.</p>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductDetails;
