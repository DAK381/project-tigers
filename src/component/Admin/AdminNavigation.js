import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import AdminProfile from './AdminProfile';
import logo from "./logo.png"
import AdminScholarshipView from './AdminScholarshipView';

function AdminNavigation(){

  const logOut=()=>{
    localStorage.clear();
  }

    return(
        <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" mr= "auto" >
  <Container fluid>
  <Navbar.Brand href="./">
  <img src = {logo} ahref = "./" alt = ""  width = "9%" />
          {' '}  Home
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="justify-content-end" style={{ width: "93%" }}>
      
      <NavDropdown title="Members" id="collasible-nav-dropdown">
        <NavDropdown.Item href="admin-member">View Members</NavDropdown.Item>
        <NavDropdown.Item href="admin-member-add">Add Members</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="admin-contact">Contact Members</NavDropdown.Item>
      </NavDropdown>



      <NavDropdown title="Events" id="collasible-nav-dropdown">
        <NavDropdown.Item href="admin-event-add">Add Events</NavDropdown.Item>
        <NavDropdown.Item href="admin-event-view">View Events</NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Scholarships" id="collasible-nav-dropdown">
        <NavDropdown.Item href="admin-scholarship-add">Add Scholarships</NavDropdown.Item>
        <NavDropdown.Item href="admin-scholarship-view">View Scholarships</NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="user-profile">Profile</Nav.Link> 

      {/* <Nav.Link href="admin-profile"> Profile </Nav.Link> */}

      <Nav.Link href="./" onClick={() =>logOut()}>Logout</Nav.Link>


    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    
    
    
    
    
            </div>
    )
}

export default AdminNavigation;