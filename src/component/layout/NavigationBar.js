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

<div>

{ userData.role !== "ADMIN" && 
<Navbar bg="light" expand={false} >
  <Container fluid>
    <Navbar.Brand>
     <img src = {logo} ahref = "./" alt = ""  width = "120x" height = "100px"/>
          {' '}
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"><h1> Menu </h1></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body bg="dark">
        <Nav className="justify-content-end flex-grow-1 pe-3" >
        <Nav.Link href="./"> <h2> Home </h2></Nav.Link>
        <Nav.Link href="events"><h2>Events</h2></Nav.Link>
        <Nav.Link href="scholarship"><h2> Scholarships </h2></Nav.Link>
        { !token && <Nav.Link href="log-in"> <h2> Log In </h2></Nav.Link> }
        { !token && <Nav.Link href="sign-up"><h2>Sign Up </h2></Nav.Link> }
        <Nav.Link href="contact-us"><h2>Contact Us </h2></Nav.Link>
        {/* userData.role === "ADMIN" && <Nav.Link href="admin"><h2> Admin </h2></Nav.Link> */}
        { token && userData.role !== "ADMIN" && <Nav.Link href="user-profile"><h2>Profile</h2></Nav.Link> }
        { token && <Nav.Link href="./" onClick={() =>logOut()}><h2>Logout</h2></Nav.Link> }

        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar> }



{ userData.role === "ADMIN" && 
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" mr= "auto">
  <Container fluid>
  <Navbar.Brand href= "admin-profile">
      Admin Profile
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="justify-content-end" style={{ width: "93%" }}>
    <Nav.Link href="./"> Member View </Nav.Link>
      
      <NavDropdown title="Members" id="collasible-nav-dropdown">
        <NavDropdown.Item href="admin-member">View Members</NavDropdown.Item>
        <NavDropdown.Item href="admin-member-add">Add Members</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="admin-contact">Contact Members</NavDropdown.Item>
      </NavDropdown>



      <NavDropdown title="Events" id="collasible-nav-dropdown">
        <NavDropdown.Item href="admin-event-view">View Events</NavDropdown.Item>
        <NavDropdown.Item href="admin-event-add">Add Events</NavDropdown.Item>
        <NavDropdown.Item href="admin-scholarship-add">Add Scholarships</NavDropdown.Item>
        <NavDropdown.Item href="admin-event-remove">Remove Events</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="./" onClick={() =>logOut()}>Logout</Nav.Link>

    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
}
    
    
    
    
            </div>

)
}

export default NavigationBar;