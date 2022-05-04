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
import { BsFillCalendar2EventFill } from "react-icons/bs";
import { FcCalendar} from "react-icons/fc";
import { FcAlarmClock} from "react-icons/fc";
import { VscLocation} from "react-icons/vsc";



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
            
             <br/>
            <Container>
              <Card>
              <CardBody>
              <div class="text-center">
                
              <Card.Title><h3>{event.eventName}</h3></Card.Title>
              </div>
              <hr/>
               

              <div class="text-left">
              <Card.Text>
               <h5><FcCalendar/> Date: {event.eventDate}</h5>
              </Card.Text>
              </div>
              <br/>

              <div class="text-right">
              <Card.Text>
              <h5><FcAlarmClock/> Time: {event.startTime} - {event.endTime}</h5>
              </Card.Text>
              </div>
              <br/>
              

              <div class="text-left">
              <Card.Text>
               <h5><VscLocation/>Location: {event.eventLocation}</h5>
              </Card.Text>
              </div>
              
              <hr/>


              {/* <Card.Text>
                {event.description}
              </Card.Text> */}
              

            
              

              <Card.Img class="rounded mx-auto d-block" ariant="top" src={process.env.PUBLIC_URL + '/upload/' + event.eventImage} height="400px"  alt='...'  />
              
              <br/>
              <hr/>
             


           
            
            <h4>
              About {event.eventName}:
              </h4>
              
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
                <hr/>
                {
                  loggedIn? 
                  <Button className ="btn btn-warning btn-lg btn-outline-dark " onClick = {registerForEvent}>
                Register
                
              </Button> :
              <div class="text-center">
              <Button className ="btn btn-warning btn-lg btn-outline-dark " onClick = {handleShow}>
                Register
              </Button> 
              
              </div>

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
              </CardBody>
              </Card>
            </Container>
            

            

          </div>
        );
      };

export default EventRegistration;
