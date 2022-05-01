import EventData from './EventData';
import { Container } from "react-bootstrap";

function EventPage(props){

  return(
    <div>
      
      <Container fluid>
        <EventData userData={props.userData}/>
      </Container>
      
    </div>
  )
}

export default EventPage;
