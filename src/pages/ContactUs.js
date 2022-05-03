import React, { useState } from "react";
import { Container, Form, Card, Button, Row, Col } from "react-bootstrap";

import './ContactUs.css';

const FORM_ENDPOINT = "";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <Container>
      <br></br>
      <Row className="row justify-content-center">
      <Col className="col-lg-6 ml-auto">
      <Card>
        <Card.Body>
      <Card.Header><h3 className="text-center display-6"> <strong> Contact Us </strong></h3></Card.Header><br></br>

    <Form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className=" font-weight-bolder"><h5>Your Name</h5></Form.Label>
    <Form.Control type="text" 
               placeholder="Your Name"
               name="email" required ={true}
               
                />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className=" font-weight-bolder"><h5>Email address</h5></Form.Label>
    <Form.Control type="email" 
               placeholder="Enter email"
               name="email" required ={true}
               
                />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className=" font-weight-bolder"><h5>Your message</h5></Form.Label>
    <Form.Control as="textarea" rows={4} type="text" 
               placeholder="Message Here!!"
               />
  </Form.Group>
      <div>
        <Button variant="danger" type="submit"> Send a message </Button>
      </div>
    </Form>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    <br></br>
    </Container>
  );
};

export default Contact;