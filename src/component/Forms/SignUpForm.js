import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "../../axios";
import './SignUpForm.css';
import { Row, Col, Container, Card, Alert, Button, Form } from 'react-bootstrap';


function SignUpForm(props){

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [isAlumni, setIsAlumni] = useState(false);
  const [phone, setPhone] = useState('');
  const [graduatedYear, setGraduatedYear] = useState('');
  const [address,setAddress]=useState('');
  const [address2,setAddress2]=useState('');
  const [city,setCity]=useState('');
  const [state,setState]=useState('');
  const [zip,setZip]=useState('');
  const [membership,setmembershipType]=useState('');

  const [showError, setShowError] = useState(false);
  const [showInvalidEmail, setShowInvalidEmail] = useState(false);
  const navigate = useNavigate();


  function signinHandler(event){
    
    // set graduatedYear to empty string if not an alumni
    if(!isAlumni){
      setGraduatedYear('');   
    }

    // check for all required fields
    const allFilled = !((firstName==='')||(middleName==='')||(lastName==='')||(birthdate==='')||(phone==='')||(password==='')||(email==='')||(address==='')||(city==='')||(state==='')||(zip==='')||(membership===''))
    if(allFilled){
      setShowError(false);

      // check if email is a valid email address
      const res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(res.test(String(email.toLowerCase()))){
        setShowInvalidEmail(false);

        // address
        axios.post("/register",{firstName,middleName,lastName,maidenName,email,birthdate,isAlumni,
                                graduatedYear,membership,address,address2,city,state,zip,phone,password}).then(res=>{console.log(res.data);
          navigate('/log-in');
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


  return (
  <>
    

    <Card body style={{margin: "24px"}}>
      <Container fluid>
    
        <h1>Registration Form</h1>

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
              Please use a valid email address. Your email will never be shared with anyone.
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

          <Row md="3" sm="1" xs='1'>
            <Col>
              <Form.Group controlId="maidenName">
                <Form.Label>Maiden Name (if applicable)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter maiden name"
                  name="Maiden Name"
                  onChange={(e) => setMaidenName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="birthDate">
                <Form.Label>Date of Birth *</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter date of birth"
                  name="birthDate"
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </Form.Group>
            </Col>
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

          <br />
          
          <Row md="2" sm="1" xs='1'>
            <Col>
              <Form.Group controlId="password">
                <Form.Label>Password *</Form.Label>
                <Form.Control
                  type="Password"
                  placeholder="Enter password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="email">
                <Form.Label>Email Address *</Form.Label>
                <Form.Control
                  type="Email"
                  placeholder="Enter email address"
                  name="email_address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <br />

          <Row md="2" sm="1" xs='1'>
            <Col>
              <Form.Group controlId="address1">
                <Form.Label>Address 1 *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Street address"
                  name="address1"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="address2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Apartment, studio, or floor"
                  name="address2"
                  onChange={(e) => setAddress2(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <br />

          <Row md="3" sm="1" xs='1'>
            <Col>
              <Form.Group controlId="city">
                <Form.Label>City *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="state">
                <Form.Label>State *</Form.Label>
                <Form.Select defaultValue="Choose..." onChange={(e) => setState(e.target.value)} name="state">
                  <option value="Choose...">Choose...</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="Baker Island">Baker Island</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="District of Columbia">District of Columbia</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Guam">Guam</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Howland Island">Howland Island</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Jarvis Island">Jarvis Island</option>
                  <option value="Johnston Atoll">Johnston Atoll</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Kingman Reef">Kingman Reef</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Midway Atoll">Midway Atoll</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Navassa Island">Navassa Island</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Palmyra Atoll">Palmyra Atoll</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                  <option value="United States Virgin Islands">United States Virgin Islands</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Wake Island">Wake Island</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="Zip">
                <Form.Label>Zip *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name="zip"
                  onChange={(e) => setZip(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <br />
        
          <Row md="2" sm="1" xs='1'>
            <Col>
              <Form.Group controlId="isAlumni">
                <Form.Check 
                  type="switch"
                  id="alumni"
                  label="Are you a Neville alumni?"
                  onChange={(e) => {setIsAlumni(!isAlumni)}}
                />
              </Form.Group>
            </Col>
            { isAlumni &&
            <Col>
              <Form.Group controlId="graduatedYear">
                <Form.Label>Graduation Year *</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Enter Graduation Year"
                  name="graduatedYear"
                  onChange={(e) => setGraduatedYear(e.target.value)}
                />
              </Form.Group>
            </Col>
            }
          </Row>

          <br />
          
          <Row md="2" sm="1" xs='1'>
            <Col md="10">
              <Form.Group controlId="membership">
                <Form.Label>Membership type *</Form.Label>
                <Form.Select onChange={(e) => setmembershipType(e.target.value)}>
                  <option>None</option>
                  <option>MemType1</option>
                  <option>MemType2</option>
                  <option>MemType3</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md="2">
              <Button className="btn-primary btn" onClick={signinHandler}>Sign Up</Button>
            </Col>
          </Row>
          
        </Form>

      </Container>

    </Card>
  </>
  );
};

export default SignUpForm;