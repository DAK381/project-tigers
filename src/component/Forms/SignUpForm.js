import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function SignUpForm(props){
  const [state, setState] = useState({
    username: "",
    email: "",
    city: "",
    phone: ""
  });

  const handleInputChange = event => {
    event.preventDefault()
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <Form className="register-form">
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            name="city"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            name="phone"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Link
          className="btn btn-primary"
          to={{
            pathname: "/new-user-info",
            state
          }}
        >
          Register
        </Link>
      </Form>
    </div>
  );
};

export default SignUpForm;
