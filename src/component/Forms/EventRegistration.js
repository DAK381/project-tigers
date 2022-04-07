import { useState,  useNavigate} from "react";
import { Form } from "react-bootstrap";
// import axios from "axios";

function EventRegistration(){

    
        const [firstName, setfirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [maidenName, setMaidenName] = useState('');
        // const [paymentOption,setAddress]=useState('');
        // const navigate = useNavigate();
      
      

      
        return (
          <div>
            <h1>Register for the Event</h1>
            <Form className="register-form">
              <Form.Group controlId="fistName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="First Name"
                  onChange={(e) => setfirstName(e.target.value)}
                />
                </Form.Group>
                <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
                </Form.Group>
                <Form.Group controlId="maidenName">
                <Form.Label>Maiden Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter maiden name"
                  name="Maiden Name"
                  onChange={(e) => setMaidenName(e.target.value)}
                />
              </Form.Group>
      
              <button type ="button" className="btn-primary btn">Register</button>
            
            </Form>
          </div>
        );
      };

export default EventRegistration;
