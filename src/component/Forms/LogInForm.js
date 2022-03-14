import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../../redux/authActions';
import { Link, useNavigate } from "react-router-dom";
import NewUserInfo from "../NewUserInfo";
import {userLogin} from "../../authenticationService";
import {Alert,Spinner} from 'react-bootstrap';

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
              navigate("/dashboard");
    
              ;
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
                  break;
              default:
                  props.loginFailure('Something Wrong!Please Try Again2'); 

          }

          }

          else{
              
              props.loginFailure('Something Wrong!Please Try Again3'+err);
          }
              

          

      });
      //console.log("Loading again",loading);

      
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
       <div>
     <h1>Log In Form</h1>
     <Form className="register-form" >
       <Form.Group controlId="email">
         <Form.Label>Email</Form.Label>
         <Form.Control
           type="email"
           placeholder="Enter email"
           name="email" required ={true}
           value = {values.email}
           onChange={handleChange}
         />
       </Form.Group>
       <Form.Group controlId="password">
         <Form.Label>Password</Form.Label>
         <Form.Control
           type="password"
           placeholder="Enter password"
           name="password" required = {true}
           value = {values.password}
           onChange={handleChange}
         />
       </Form.Group>
 
      <button type ="button" className="btn-primary btn" onClick={loginHandler} >Log in</button>
     </Form>
 
     <p>First time? <Link to="/sign-up">Create an account</Link>.</p>
     <p>Forget Password? <Link to="/forget-password">Reset Password</Link>.</p>
 
   </div>
 
     
 
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