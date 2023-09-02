import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <Container className="my-5 d-flex d-flex justify-content-evenly">
        <section>
            <h2>Images</h2>
            images will be here
        </section>
        <section>
            <h2>Product description</h2>
            <ul>
                <li>Specs</li>
                <li>Price</li>
                <li>Advantages</li>
            </ul>
        </section>
    </Container>
  );
};

export default ProductDetails;
