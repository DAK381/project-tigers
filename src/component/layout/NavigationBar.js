import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from "./logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Nav.module.css';

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
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" mr= "auto" >
  <Container fluid>
    <Navbar.Brand>
     <img src = {logo} ahref = "./" alt = ""  width = "55px" height = "" />
          {' '}
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
    
        <Nav className="justify-content-end flex-grow-1 pe-3 text-white " >
        <Nav.Link href="./" id="nav_link" className='text-white'> <h4 > Home </h4></Nav.Link>
        <Nav.Link href="about" className='text-white'> <h4> About </h4></Nav.Link>
        <Nav.Link href="events" className='text-white'><h4>Events</h4></Nav.Link>
        <Nav.Link href="scholarship" className='text-white'><h4> Scholarships </h4></Nav.Link>
        <Nav.Link href="campaign" className='text-white'><h4> Campaigns </h4></Nav.Link>

        { !token && <Nav.Link href="log-in" className='text-white'> <h4> Log In </h4></Nav.Link> }
        { !token && <Nav.Link href="sign-up" className='text-white'><h4>Sign Up </h4></Nav.Link> }
        <Nav.Link href="contact-us" className='text-white'><h4>Contact Us </h4></Nav.Link>
        { token && <Nav.Link href="user-profile" className='text-white'><h4>Profile</h4></Nav.Link> }
        { token && <Nav.Link href="./" onClick={() =>logOut()} className='text-white'><h4>Logout</h4></Nav.Link> }

        </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar> }  
    
</div>

)
}

export default NavigationBar;