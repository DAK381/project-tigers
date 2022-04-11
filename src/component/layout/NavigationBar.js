import { Link } from 'react-router-dom';
import classes from './Nav.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container, NavDropdown, Offcanvas} from 'react-bootstrap';
import logo from "./logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { fetchUserData } from '../../authenticationService';
import { useState } from 'react';

function NavigationBar(props){
  const userData = props.userData;
  const token = props.token;

  const logOut=()=>{

    localStorage.clear();
    props.history.push('/');

  }



return (

//  new design for the navigation bar



<Navbar bg="dark" variant="dark"  expand="lg" >
  <Container>
  <Navbar.Brand href="./">
  <img src = {logo} ahref = "./" alt = ""  width = "9%" />
          {' '}  NAFA
  </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="ms-auto">
        <Nav.Link href="events" >Events</Nav.Link>
        <Nav.Link href="scholarships">Scholarships</Nav.Link>
        <NavDropdown title="User" id="basic-nav-dropdown">
          <NavDropdown.Item  href="log-in">Login</NavDropdown.Item>
          <NavDropdown.Item href="sign-up">Signup</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Divider />
          { userData.role === "ADMIN" && <Nav.Link href="admin"><h2> Admin </h2></Nav.Link> }
          { token && userData.role !== "ADMIN" && <Nav.Link href="user-profile"><h2>Profile</h2></Nav.Link> }
     { token && <Nav.Link href="./" onClick={() =>logOut()}><h2>Logout</h2></Nav.Link> } 
         
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>



)
}

export default NavigationBar;
