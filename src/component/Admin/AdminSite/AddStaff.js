
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

export default function AddStaff(props){

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const[position, setPosition] =  useState('')

    const [showError, setShowError] = useState(false);
  const [showInvalidEmail, setShowInvalidEmail] = useState(false);
  const navigate = useNavigate();

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

        // address
        axios.post(`/staff/add`,{firstName,middleName,lastName,email,phone,position}).then(res=>{console.log(res.data);
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


    return(

        <div>
           <Card body style={{margin: "24px"}}>
      <Container fluid>
    
        <h1>Add Staff</h1>

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
                  placeholder="Enter first name"
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
                  placeholder="Enter middle name"
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
                  placeholder="Enter last name"
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
                  placeholder="Enter phone number"
                  name="phone"
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
                  placeholder="Enter email address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="position">
                <Form.Label>Position *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter position"
                  name="position"
                  onChange={(e) => setPosition(e.target.value)}
                />
              </Form.Group>
            </Col>
          

          <br />

          
            <Col md="3">
              <Button className="btn-primary btn" onClick={registrationHandler}>Register for the event</Button>
            </Col>
         
          
            </Form>

</Container>

</Card>

</div>
)
}