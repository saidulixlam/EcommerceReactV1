import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="bg-success text-white text-center py-4 mt-5">
      <Container>
        <Row>
          <Col>
            <h1 className="font-weight-bolder display-1 my-5">The Generics</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
