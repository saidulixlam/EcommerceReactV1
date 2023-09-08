import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Import your image file
const imageUrl = 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png';

const About = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} md={6}>
          <Image src={imageUrl} alt="About Us" fluid rounded className="mb-3" />
        </Col>
        <Col xs={12} md={6}>
          <h1>About Us</h1>
          <p>
            Welcome to our online store! We are a dedicated team passionate about providing high-quality products to our customers.
          </p>
          <p>
            Our mission is to make your shopping experience as enjoyable as possible. Whether you're looking for the latest gadgets, fashion items, or home decor, we've got you covered.
          </p>
          <p>
            Thank you for choosing us as your go-to online store.
          </p>
          <p>
            If you have any questions or feedback, please don't hesitate to{' '}
            <Link to="/contact">
              <Button variant="primary">Contact Us</Button>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
