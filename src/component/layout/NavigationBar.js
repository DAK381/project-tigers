import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from "./logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


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
<Navbar collapseOnSelect expand="lg" bg="light" mr= "auto">
  <Container fluid>
    <Navbar.Brand>
     <img src = {logo} ahref = "./" alt = ""  width = "120x" height = "100px"/>
          {' '}
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    
        <Nav className="justify-content-end flex-grow-1 pe-3" >
        <Nav.Link href="./"> <h2> Home </h2></Nav.Link>
        <Nav.Link href="about"> <h2> About </h2></Nav.Link>
        <Nav.Link href="events"><h2>Events</h2></Nav.Link>
        <Nav.Link href="scholarship"><h2> Scholarships </h2></Nav.Link>
        <Nav.Link href="campaign"><h2> Campaigns </h2></Nav.Link>

        { !token && <Nav.Link href="log-in"> <h2> Log In </h2></Nav.Link> }
        { !token && <Nav.Link href="sign-up"><h2>Sign Up </h2></Nav.Link> }
        <Nav.Link href="contact-us"><h2>Contact Us </h2></Nav.Link>
        { token && <Nav.Link href="user-profile"><h2>Profile</h2></Nav.Link> }
        { token && <Nav.Link href="./" onClick={() =>logOut()}><h2>Logout</h2></Nav.Link> }

        </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar> }  
    
</div>

)
}

export default NavigationBar;