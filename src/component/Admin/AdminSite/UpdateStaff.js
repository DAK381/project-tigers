
import { useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../../axios";
import { Button } from "react-bootstrap";
import { Container, Card } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { Col } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export default function UpdatetSaff(props){
    console.log(props.staff)

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
    const [firstName, setFirstName] = useState(props.staff.firstName);
    const [middleName, setMiddleName] = useState(props.staff.middleName);
    const [lastName, setLastName] = useState(props.staff.lastName);
    const [email, setEmail] = useState(props.staff.email);
    const [phone, setPhone] = useState(props.staff.phone);
    const[position, setPosition] =  useState(props.staff.position)

    const [showError, setShowError] = useState(false);
  const [showInvalidEmail, setShowInvalidEmail] = useState(false);


  function registrationHandler(event){
    
    console.log(firstName)

    // set graduatedYear to empty string if not an alumni
    // check for all required fields
    const allFilled = !((firstName==='')||(middleName==='')||(lastName==='')||(phone==='')||(email===''))
    if(allFilled){
      setShowError(false);

      // check if email is a valid email address
      const res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(res.test(String(email.toLowerCase()))){
        setShowInvalidEmail(false);

        console.log(position)
        // address
        axios.put(`/staff/update/${props.staff.id}`,{firstName,middleName,lastName,email,phone, position}).then(res=>{console.log(res.data);
            console.log(position)
            window.location.reload();
        }).catch(err=>console.log(err))
      }
      else{
        setShowInvalidEmail(true);
        window.scrollTo(0, 0);
      }
    }
    else{
      setShowError(true);
      window.scrollTo(0, 0);
    } 
  }

  function deleteStaff(){
    axios.delete(`delete/${props.staff.id}`).then(res=>{console.log(res.data);
        console.log(position)
        window.location.reload();
    }).catch(err=>console.log(err))
  }
  


    return(

        <div>
           <Card body style={{margin: "24px"}}>
      <Container fluid>
    
        <h1>Update Staff</h1>

        {/* error alert for unfilled fields */}
        {showError &&
          <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
            <Alert.Heading>Please fill required fields.</Alert.Heading>
            <p>
              Please fill in all required fields. Required fields are indicated by *.
            </p>
          </Alert>
        }

        {/* error alert for invalid email */}
        {showInvalidEmail &&
          <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
            <Alert.Heading>Please use a valid email.</Alert.Heading>
            <p>
              Please use a valid email address.
            </p>
          </Alert>
        }

        <br />

        <Form>

          <Row md="3" sm="1" xs='1'>
            <Col>
              <Form.Group controlId="firstName" bg="warning">
                <Form.Label>First Name *</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue = {props.staff.firstName}
                  placeholder={props.staff.firstName}
                  name="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />


              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="middleName">
                <Form.Label>Middle Name *</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue = {props.staff.middleName}
                  placeholder= {props.staff.middleName}
                  name="Middle Name"
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name *</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue = {props.staff.lastName}
                  placeholder= {props.staff.lasttName}
                  name="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <br />

          <Row md="2" sm="1" xs='1'>

          <Col>
              <Form.Group controlId="phone">
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue = {props.staff.phoneNumber}
                  placeholder= {props.staff.phoneNumber}
                  name="Phone Number"
                  value = {phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
            
            <Col>
              <Form.Group controlId="email">
                <Form.Label>Email Address *</Form.Label>
                <Form.Control
                  type="Email"
                  defaultValue = {props.staff.email}
                  placeholder= {props.staff.email}
                  name="Email"
                  value = {email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="position">
                <Form.Label>Position *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder= {props.staff.position}
                  name="Position"
                  value = {position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </Form.Group>
            </Col>
          

          <br />

          
            <Col md="3">
            <Button onClick={registrationHandler} className="btn btn-warning btn-md btn-outline-dark">Update Staff</Button>
            </Col>

            <Col md="3">
            <Button onClick={handleShow} className="btn btn-warning btn-md btn-outline-dark">Delete Staff</Button>
            </Col>
         
          
            </Form>

            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									

	

								</Modal.Header>
								<Modal.Body>
                                    <h3>
                                        Are you sure you want to remove this staff?
                                    </h3>
                                    

                                    
                                    </Modal.Body>
										
								
								<Modal.Footer>
									<Button variant="secondary" onClick={deleteStaff}>
										Delete
									</Button>
								</Modal.Footer>
							</Modal>


</Container>

</Card>

</div>
)
}