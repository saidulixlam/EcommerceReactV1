import React, { useRef } from 'react';
import { Form, Button,Container } from 'react-bootstrap';

const ContactUs = (props) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the user's data
    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    props.onAddUser(userData);
    console.log(userData);
    // Reset the form
    nameRef.current.value = '';
    emailRef.current.value = '';
    phoneRef.current.value = '';
  };

    return (
        <Container>
            <h2 className='my-3 d-flex'>Contact Us</h2>
            <Form onSubmit={handleSubmit} className='my-5'>
                <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" ref={nameRef} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" ref={emailRef} />
                </Form.Group>
                <Form.Group controlId="phone">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control type="tel" ref={phoneRef} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit here..
                </Button>
            </Form>
        </Container>
    );
}

export default ContactUs;