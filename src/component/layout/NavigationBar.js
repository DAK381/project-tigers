import { Link } from 'react-router-dom';
import classes from './Nav.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container, NavDropdown, Offcanvas} from 'react-bootstrap';
import logo from "./logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavigationBar(props){

  const token = localStorage.getItem('USER_KEY');

  const logOut=()=>{

    localStorage.clear();
    props.history.push('/');

  }

return (

<Navbar bg="light" expand={false}>
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
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link href="./"> <h2> Home </h2></Nav.Link>
     <Nav.Link href="events"><h2>Events</h2></Nav.Link>
     <Nav.Link href="scholarship"><h2> Scholarships </h2></Nav.Link>
     { !token && <Nav.Link href="log-in"> <h2> Log In </h2></Nav.Link> }
     { !token && <Nav.Link href="sign-up"><h2>Sign Up </h2></Nav.Link> }
     <Nav.Link href="contact-us"><h2>Contact Us </h2></Nav.Link>
     <Nav.Link href="admin"><h2> Admin </h2></Nav.Link>
     { token && <Nav.Link href="user-profile"><h2>Profile</h2></Nav.Link> }
     { token && <Nav.Link href="./" onClick={() =>logOut()}><h2>Logout</h2></Nav.Link> }

        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>



)
}

export default NavigationBar;
