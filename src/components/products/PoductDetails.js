import React, { Fragment, useContext } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { productArray } from "./ProductArray";
import CartContext from "../store/cart-context";

const ProductDetails = () => {
  const history = useHistory();
  const ctx = useContext(CartContext);
  const { productId } = useParams();
  console.log(productId);
  const productsArr = productArray;

  const product = productsArr.find((elem) => elem.title === productId);
  console.log(product);

  function buynowHanlder(e) {
    e.preventDefault();
    history.replace('/cart');
  }
  return (
    <Fragment>
      <h1 className="mb-4 my-6 p-4 bg-light shadow text-center">{product.title}</h1>
      <Container className="my-5 d-flex justify-content-evenly">
        {/* Product Images Section */}

        <section className="mb-4 my-4">
          <Card.Img
            variant="top"
            src={product.imageUrl}
            style={{
              animation: 'enlargeAndMove 2s ease-in-out infinite alternate',
              transformOrigin: 'center',
            }}
            className="imageStyle rounded"

          />
          <section className="mb-4">
            <Card.Img
              variant="top"
              src={product.imageUrl}
              style={{
                animation: 'enlargeAndMove 2s ease-in-out infinite alternate',
                transformOrigin: 'center',
              }}
              className="imageStyle rounded"

            />

          </section>
          <section className="mb-4">
            <Card.Img
              variant="top"
              src={product.imageUrl}
              style={{
                animation: 'enlargeAndMove 2s ease-in-out infinite alternate',
                transformOrigin: 'center',
              }}
              className="imageStyle rounded"

            />

          </section>

        </section>

        {/* Product Description Section */}
        <section className="mb-4 my-4">
          <h3 className="mb-4 my-4 p-4 bg-light shadow">Product Description</h3>
          <ul className="mb-4 my-4 p-4 bg-light shadow">
            <li>It is good and beautiful and awseome and andnd mosumani</li>
            <li>It is good and beautiful and awseome and andnd mosumani</li>
            <li>It is good and beautiful and awseome and andnd mosumani</li>

            <li>It is good and beautiful and awseome and andnd mosumani</li>
            <li>It is good and beautiful and awseome and andnd mosumani</li>
            <li>It is good and beautiful and awseome and andnd mosumani</li>
          </ul>
          <div>
            <h3 className="p-3 bg-info shadow rounded">Price: ${product.price}</h3>
            <section className="d-flex gap-2 my-4">
              <Button variant="primary" onClick={() => ctx.addItem({ ...product, quantity: 1 })}>
                Add to Cart
              </Button>
              <Button variant="success" onClick={buynowHanlder}>
                Buy Now
              </Button>
            </section>
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
        </section>
      </Container>
      <Container>
      </Container>
    </Fragment>
  );
};

export default ProductDetails;
