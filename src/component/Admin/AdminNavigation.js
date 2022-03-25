import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import AdminProfile from './AdminProfile';

function AdminNavigation(){

    return(
        <div>

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



    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    
    
    
    
    
            </div>
    )
}

export default AdminNavigation;