import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Card, Button, Row, Col } from "react-bootstrap";
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../../redux/authActions';
import { Link, useNavigate } from "react-router-dom";
import {userLogin} from "../../authenticationService";
import {Alert,Spinner} from 'react-bootstrap';
import Captcha from './recaptcha/Captcha';
import App from '../../App';
import './LoginForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LogInPage = ({loading,error,...props}) => {
 
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: ''
    });
  
  

    const loginHandler =(evt)=>{
      evt.preventDefault();
      props.authenticate();

      userLogin(values).then((response)=>{

          console.log("response",response);
          if(response.status===200){
              props.setUser(response.data);

              navigate("/");
              window.location.reload();

              //props.setToken(localStorage.getItem('USER_KEY'));
              
          }
          else{
             props.loginFailure('Something Wrong!Please Try Again1'); 
          }


      }).catch((err)=>{

          if(err && err.response){
          
          switch(err.response.status){
              case 401:
                  console.log("401 status");
                  props.loginFailure("Authentication Failed.Bad Credentials");
                  toast.dark("Uh Oh! Looks like you entered the wrong credential. Please try again.");

                  break;
              default:
                  props.loginFailure('Something Wrong!Please Try Again2'); 

          }

          }

          else{
              
              props.loginFailure('Something Wrong!Please Try Again'+err);
          }
              

          

      });

      
  }

  const handleChange = (e) => {
      e.persist();
      setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
      }));
  };

  console.log("Loading ",loading);
 
   return (
  //      <div>
  //    <h1>Log In Form</h1>
  //    <Form className="register-form" >
  //      <Form.Group controlId="email">
  //        <Form.Label>Email</Form.Label>
  //        <Form.Control
  //          type="email"
  //          placeholder="Enter email"
  //          name="email" required ={true}
  //          value = {values.email}
  //          onChange={handleChange}
  //        />
  //      </Form.Group>
  //      <Form.Group controlId="password">
  //        <Form.Label>Password</Form.Label>
  //        <Form.Control
  //          type="password"
  //          placeholder="Enter password"
  //          name="password" required = {true}
  //          value = {values.password}
  //          onChange={handleChange}
  //        />
  //      </Form.Group>
 
    //   <Captcha/>
    //   <button type ="button" className="btn-primary btn" onClick={loginHandler} >Log in</button>
    //  </Form>
 
    //  <p>First time? <Link to="/sign-up">Create an account</Link>.</p>
    //  <p>Forget Password? <Link to="/forget-password">Reset Password</Link>.</p>
 
  //  </div>
 
  <Container>
  <br></br>
  <Row className="row justify-content-center">
  <Col className="col-lg-6 ml-auto">
  <Card>
    <Card.Header><h3 className="text-center display-6"> <strong> Login </strong></h3></Card.Header>
    <Card.Body>
      <Form>
  
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className=" font-weight-bolder"><h5>Email address</h5></Form.Label>
      <Form.Control type="email" 
                 placeholder="Enter email"
                 name="email" required ={true}
                 value = {values.email}
                 onChange={handleChange} />
    </Form.Group>
  
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label className="font-weight-bolder"><h5>Password</h5></Form.Label>
      <Form.Control type="password" placeholder="Enter your password" 
                 name="password" required = {true}
                 value = {values.password}
                 onChange={handleChange} />
    </Form.Group>
    
  </Form>
  <Captcha/>
 
     <p>First time? <Link to="/sign-up">Create an account</Link>.</p>
     <p>Forget Password? <Link to="/forget-password">Reset Password</Link>.</p>
  <div className="text-right">
      <Button variant="danger" onClick={loginHandler}>Login</Button> </div>
    </Card.Body>
  </Card>
  </Col>
  </Row>
    <br></br>
    <ToastContainer />
  </Container>  


 
    

   )
};
const mapStateToProps=({auth})=>{
  console.log("state ",auth)
  return {
      loading:auth.loading,
      error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

  return {
      authenticate :()=> dispatch(authenticate()),
      setUser:(data)=> dispatch(authSuccess(data)),
      loginFailure:(message)=>dispatch(authFailure(message))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(LogInPage);