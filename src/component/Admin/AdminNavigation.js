import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import logo from "./logo.png"

function AdminNavigation(){

  const logOut=()=>{
    localStorage.clear();
  }

    return(
        <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" mr= "auto" >
  <Container fluid>
  <Navbar.Brand href="./">
  <img src = {logo} ahref = "./" alt = ""  width = "120x" height = "100px" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end flex-grow-1 pe-3">
      

    <NavDropdown title="About" id="collasible-nav-dropdown" style={{fontSize: "28px"}}>
        <NavDropdown.Item href="/about"><h5>About Us</h5></NavDropdown.Item>
        {/* <NavDropdown.Item href="admin-member-add"><h5>Edit Staff</h5></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="admin-contact"><h5>Contact Members</h5></NavDropdown.Item> */}
      </NavDropdown>

      <NavDropdown title="Members" id="collasible-nav-dropdown" style={{fontSize: "28px"}}>
        <NavDropdown.Item href="admin-member"><h5>View Members</h5></NavDropdown.Item>
        <NavDropdown.Item href="admin-member-add"><h5>Add Members</h5></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="admin-contact"><h5>Contact Members</h5></NavDropdown.Item>
      </NavDropdown>


      <NavDropdown title="Groups" id="collasible-nav-dropdown" style={{fontSize: "28px"}}>
        <NavDropdown.Item href="admin-group-all"><h5>View Groups</h5></NavDropdown.Item>
        <NavDropdown.Item href="admin-group-create"><h5>Create Group</h5></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Labels" id="collasible-nav-dropdown" style={{fontSize: "28px"}}>
        <NavDropdown.Item href="admin-show-label"><h5>View Labels</h5></NavDropdown.Item>
        <NavDropdown.Item href="admin-add-label"><h5>Create Labels</h5></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Events" id="collasible-nav-dropdown" style={{fontSize: "28px"}}>
        <NavDropdown.Item href="events"><h5>View Events</h5></NavDropdown.Item>
        <NavDropdown.Item href="admin-event-add"><h5>Add Events</h5></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Scholarships" id="collasible-nav-dropdown" style={{fontSize: "28px"}}>
        <NavDropdown.Item href="scholarship"><h5>View Scholarships</h5></NavDropdown.Item>
        <NavDropdown.Item href="admin-scholarship-add"><h5>Add Scholarships</h5></NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Campaigns " id="collasible-nav-dropdown" style={{fontSize: "28px"}}>
        <NavDropdown.Item href="campaign"><h5>View Campaigns</h5></NavDropdown.Item>
        <NavDropdown.Item href="add-campaign"><h5>Add Campaign</h5></NavDropdown.Item>
      </NavDropdown>

      {/* <Nav.Link href="user-profile" style={{fontSize: "28px"}}>Profile</Nav.Link>  */}

      <Nav.Link href="./" onClick={() =>logOut()} style={{fontSize: "28px"}}>Logout</Nav.Link>


    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    
    
    
    
    
            </div>
    )
}

export default AdminNavigation;