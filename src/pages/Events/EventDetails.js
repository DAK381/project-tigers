import { useLocation, useNavigate } from "react-router-dom";
import { CardBody, List } from "reactstrap";
import { Container, Card} from "react-bootstrap";
import EventRegistration from "./EventRegistration";
function EventDetails(){

const navigate = useNavigate();

const location = useLocation();


console.log(location.state.id)
return(
    <div>

        

        <h1>  </h1>

        <Container>

        <Card>

        <Card.Img va driant="top" src="#" />

        
        <Card.Title>
        {location.state.name}
        </Card.Title>

        <CardBody>
           <h3>
           Details <h5>
           {location.state.description}
               </h5>
           </h3>
           <h4>
               Date: {location.state.name}
           </h4>

           <h4>
               Time: {location.state.name}
           </h4>

           <h4>
               Deadline: {location.state.name}
           </h4>

           <h4>
               Date Posted: {location.state.name}
           </h4>


        </CardBody>
        </Card>


    
    <EventRegistration />



        </Container>

    </div>
)

}

export default EventDetails;