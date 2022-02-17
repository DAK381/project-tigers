import { Link } from 'react-router-dom';
import classes from './Nav.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from "./logo.png"
function NavigationBar(){
return (
    // <header className = {classes.header}>
    //     <div className = {classes.logo}>NAFA</div>
    //     <nav>
    //         <ul>
    //             <li>
    //                 <Link to = '/'> Home Page</Link>
    //             </li>

    //             <li>
    //                 <Link to = '/sign-up'> Sign Up</Link>
    //             </li>

    //             <li>
    //                 <Link to = '/log-in'> Log In </Link>
    //             </li>

    //         </ul>
    //     </nav>
    // </header>
    <div className = {"Nav", "text-right", "text-end" ,"fs-3"}>
    <Navbar bg = "dark" variant = "dark" sticky = "top" 
    expand = "lg" collapseOnSelect>
        <Navbar.Brand>
            <img src = {logo} ahref = "./" alt = ""  width = "150x" height = "150px"/>
             {' '} 
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
        <Nav>
            <Nav.Link href = "./">Home</Nav.Link>
            <Nav.Link href = "event">Events</Nav.Link>
            <Nav.Link href = "scholarship">Scholarship</Nav.Link>
            <Nav.Link href = "log-in">Log In</Nav.Link>
            <Nav.Link href = "sign-up">Sign Up</Nav.Link>
            <Nav.Link href = "contact-us">Contact Us</Nav.Link>
            <Nav.Link href = "profile">Profile</Nav.Link>

        </Nav>

        </Navbar.Collapse>

        

    </Navbar>
    </div>
)
}

export default NavigationBar;