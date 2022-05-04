import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate,Link} from 'react-router-dom'
import axios from "../../../axios";

function SignUpForm(props){
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [isAlumi, setIsAlumni] = useState('');
  const [phone, setPhone] = useState('');
  const [graduatedYear, setGraduatedYear] = useState('');
  const [address,setAddress]=useState('');
  const navigate = useNavigate();


  function signinHandler(event){
    axios.post("/register",{firstName,lastName,maidenName,email,birthdate,isAlumi,graduatedYear,address,phone,password,}).then(res=>{console.log(res.data);
      navigate('/');
    }).catch(err=>console.log(err))

}


return (
    <div>
      <h1>Registration Form</h1>
      <Form className="register-form">
        <Form.Group controlId="fistName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="First Name"
            onChange={(e) => setfirstName(e.target.value)}
          />
          </Form.Group>
          <Form.Group controlId="Last Name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            name="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          </Form.Group>
          <Form.Group controlId="maidenName">
          <Form.Label>Maiden Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Maiden Name"
            name="Maiden Name"
            onChange={(e) => setMaidenName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="Email"
            placeholder="Enter Email"
            name="email_address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Home Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter home address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="birthDate">
          <Form.Label>Birth Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Birth date"
            name="birthDate"
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="graduatedYear">
          <Form.Label>Graduated Year</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Graduated Year"
            name="graduatedYear"
            onChange={(e) => setGraduatedYear(e.target.value)}
          />
        </Form.Group>

        <button type ="button" className="btn-primary btn" onClick={signinHandler}>Sign Up</button>


      </Form>
    </div>
  );
};

export default SignUpForm;




