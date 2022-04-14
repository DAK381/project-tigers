import EventData from './EventData';
import { Container } from "react-bootstrap";

function EventPage(props){

  return(
    <div>
      <h1>
        Events
      </h1>
      <Container fluid>
        <EventData admin = {false}/>
      </Container>
      
    </div>
  )
}

export default EventPage;
