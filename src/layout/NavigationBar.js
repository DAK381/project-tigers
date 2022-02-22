import { Link } from 'react-router-dom';
import classes from './Nav.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container, NavDropdown, Offcanvas} from 'react-bootstrap';
import logo from "./logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NavigationBar(){
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
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body bg="dark">
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link href="./">Home</Nav.Link>
     <Nav.Link href="event">Events</Nav.Link>
     <Nav.Link href="scholarship">Scholarhsips</Nav.Link>
     <Nav.Link href="log-in">Log In</Nav.Link>
     <Nav.Link href="sign-up">Sign Up</Nav.Link>
     <Nav.Link href="contact-us">Contact Us</Nav.Link>

        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>



)
}

export default NavigationBar;