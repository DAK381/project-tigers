import React, { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import {useNavigate,Link} from 'react-router-dom'
import axios from "../../axios";
import './SignUpForm.css';


function SignUpForm(props){
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [isAlumni, setIsAlumni] = useState(true);
  const [phone, setPhone] = useState('');
  const [graduatedYear, setGraduatedYear] = useState(0);
  const [address,setAddress]=useState('');
  const [membership,setmembershipType]=useState('');
  const navigate = useNavigate();


  function signinHandler(event){
    axios.post("/register",{firstName,lastName,maidenName,email,birthdate,isAlumni,graduatedYear,membership,address,phone,password}).then(res=>{console.log(res.data);
      navigate('/log-in');
    }).catch(err=>console.log(err))
    
}

console.log(isAlumni);
console.log(graduatedYear);

  return (
    <div>
      <h1>Registration Form</h1>
      <Form className="register-form">
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="First Name"
            onChange={(e) => setfirstName(e.target.value)}
          />
          </Form.Group>
          <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          </Form.Group>
          <Form.Group controlId="maidenName">
          <Form.Label>Maiden Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter maiden name"
            name="Maiden Name"
            onChange={(e) => setMaidenName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="Email"
            placeholder="Enter email address"
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
          <Form.Label>Mailing Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter mailing address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="birthDate">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date of birth"
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
      
        <Form.Group controlId="membership">
          <Form.Label>What type of membership do you have?</Form.Label>
          <Form.Select onChange={(e) => setmembershipType(e.target.value)}>
            <option>None</option>
            <option>MemType1</option>
            <option>MemType2</option>
            <option>MemType3</option>
          </Form.Select>
        </Form.Group>


        <Form.Group controlId="isAlumni">
          <Form.Label>Are you an alumni of Neville High School?</Form.Label>
          <Form.Select>
            <option>Yes</option>
            <option  onClick ={(e) => setIsAlumni(false)}>No</option>
          </Form.Select>
        </Form.Group>

        
        <Form.Group controlId="graduatedYear">
          <Form.Label>Graduation Year</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter Graduation Year"
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