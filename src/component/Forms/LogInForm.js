import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import NewUserInfo from "../NewUserInfo";
 
 
 
function LogInPage() {
 
   const [state, setState] = useState({
       username: "",
       email: "",
       password: ""
     });
  
     const handleInputChange = event => {
       const { name, value } = event.target;
       setState(prevState => ({
         ...prevState,
         [name]: value
       }));
    };


    function submitHandler(event){
        event.preventDefault();
        console.log(event.target)
    }
     
 
 
   return (
       <div>
     <h1>Log In Form</h1>
     <Form className="register-form" onSubmit = {submitHandler}>
       <Form.Group controlId="username">
         <Form.Label>Username</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter username"
           name="username" required
           onChange={handleInputChange}
         />
       </Form.Group>
       <Form.Group controlId="email">
         <Form.Label>Email</Form.Label>
         <Form.Control
           type="email"
           placeholder="Enter email"
           name="email" required
           onChange={handleInputChange}
         />
       </Form.Group>
       <Form.Group controlId="password">
         <Form.Label>Password</Form.Label>
         <Form.Control
           type="password"
           placeholder="Enter password"
           name="password" required = {true}
           onChange={handleInputChange}
         />
       </Form.Group>
 
       <Link
         className="btn btn-primary"
         to={{
           pathname: "/"
         }}
       >
         Log In
       </Link>
     </Form>
 
     <p>First time? <Link to="/sign-up">Create an account</Link>.</p>
 
   </div>
 
     
 
   )
}
 
export default LogInPage;
