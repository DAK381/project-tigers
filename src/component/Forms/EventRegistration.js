import { useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../axios";
import { Button } from "react-bootstrap";

function EventRegistration(){

    
        const [firstName, setfirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [maidenName, setMaidenName] = useState('');
        // const [paymentOption,setAddress]=useState('');
        // const navigate = useNavigate();
      

        const location = new useLocation();
        const navigate = new useNavigate();

        const event = location.state.event;
        const user = location.state.user;

        const eventId = event.eventId;
        const userId = user.id;

        console.log(location.state.event)

        function registerForEvent() {   
          // e.preventDefault();
          axios.put(`admin/event/userRsvp/${userId}/${eventId}`).then(res=>{
            console.log(user.firstName);
            console.log(event.eventName);
            navigate('/events');
          }).catch(err=>console.log(err))
        }
        
      //   useEffect(() => {

      //     registerForEvent();
         
      // }, [location.state]);

        return (
          <div>
            {/* <h1>Register for the {location.state.event.eventName}</h1>
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
            
            </Form> */}
            <Button onClick = {registerForEvent}>
              Register
            </Button>
          </div>
        );
      };

export default EventRegistration;
