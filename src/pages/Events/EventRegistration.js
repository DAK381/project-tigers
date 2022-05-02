import { useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../axios";
import { Button } from "react-bootstrap";
import { Container, Card } from "react-bootstrap";
import { CardBody } from "reactstrap";



function EventRegistration(){


      

        const location = new useLocation();
        const navigate = new useNavigate();

        const event = location.state.event;
        const user = location.state.user;

        const past = location.state.past;

        const eventId = event.eventId;
        const userId = user.id;

        console.log(location.state.event)

        function registerForEvent() {  
          console.log(event.id) 
          // e.preventDefault();
          axios.put(`admin/event/userRsvp/${userId}/${eventId}`).then(res=>{
            console.log(user.firstName);
            console.log(event.eventName);
            navigate('/events');
          }).catch(err=>console.log(err))
        }
        


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

             {!past ?  <Button onClick = {registerForEvent}>
              Register
            </Button> : <h4>
              This event is no longer available.
            </h4>}

            </Container>

            

          </div>
        );
      };

export default EventRegistration;
