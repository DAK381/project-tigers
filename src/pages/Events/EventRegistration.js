import { useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../axios";
import { Button } from "react-bootstrap";
import { Container, Card } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { Modal } from "react-bootstrap";
import { Link} from "react-router-dom";
import EventGuest from "./EventGuest";
import { Toast } from "react-bootstrap";


function EventRegistration(){


      
    const [show, setShow] = useState(false);
	  const handleClose = () => setShow(false);
	  const handleShow = () => setShow(true);

    const[already, setAlready] = useState(false);

    const [userEvents, setUserEvents] = useState();

        const location = new useLocation();
        const navigate = new useNavigate();

        const event = location.state.event;
        const user = location.state.user;

        const past = location.state.past;

        const eventId = event.eventId;
        const userId = user.id;
        const [loggedIn, setLoggedIn] = useState(false);
     
        console.log(location.state.event)


        useEffect(()=>{

          if(Object.keys(user).length !== 0)
          {
            setLoggedIn(true);
            axios.get(`admin/event/search/membersEvent/${user.id}`).then(res => {
              setUserEvents(res.data)
              console.log(userEvents);
              
          }).catch(err => console.log(err))
          }

          



      },[location.state])

      


        function registerForEvent() {  

         userEvents.map(event => {

          if(event.eventId === eventId){

            alert("You are already registred for the event.")

          }

         }
         )
         

            console.log(event.id) 
          
          // e.preventDefault();
          axios.put(`admin/event/userRsvp/${user.id}/${event.eventId}`).then(res=>{
            console.log(user.firstName);
            console.log(event.eventName);
            navigate('/events');
          }).catch(err=>console.log(err))

          }

         
          
        
        console.log(loggedIn)


        return (
          <div>
            

            <Container>
              <Card>
              <Card.Img variant="top" src={process.env.PUBLIC_URL + '/upload/' + event.eventImage} width={600} height={600} alt='...'  />
              </Card>

              <Card>
              <CardBody>
              <Card.Title>{event.eventName}</Card.Title>
              <Card.Text>
               Date: {event.eventDate}
              </Card.Text>
              <Card.Text>
                Time: {event.startTime} - {event.endTime}
              </Card.Text>
              {/* <Card.Text>
                {event.description}
              </Card.Text> */}
              </CardBody>
              </Card>

            </Container>


           
            <Container>
            <h3>
              About {event.eventName}
              </h3>
              
            <p>
            {event.eventDescription}
              </p>

             {/* {!past ?  
             
             
             <Button onClick = {registerForEvent}>
              Register
            </Button> : <h4>
              This event is no longer available.
            </h4>} */}

            {
              past?
              <h4>
                This event is no longer available.
              </h4>:
              <div>
                {
                  loggedIn? 
                  <Button onClick = {registerForEvent}>
                Register
              </Button> :
              <Button onClick = {handleShow}>
                Register
              </Button> 

                }
                

            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title><p>First time? <Link to="/sign-up">Create an account</Link>.</p></Modal.Title>
								</Modal.Header>

                <Modal.Body>

                <EventGuest event = {event} />




                </Modal.Body>
							
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>

           
              </div>
            }

            </Container>

            

          </div>
        );
      };

export default EventRegistration;
