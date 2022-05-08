import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';


function UpcomingEvent(props){

  const[events, setEvents] = useState([]);
  const navigate = useNavigate();


  const dayjs = require('dayjs');
  var customParseFormat = require('dayjs/plugin/customParseFormat')
  dayjs.extend(customParseFormat)

  var relativeTime = require('dayjs/plugin/relativeTime')
  dayjs.extend(relativeTime)

  var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
  dayjs.extend(isSameOrBefore)

 
  async function getData( ){
      axios.get("/admin/event/all-event").then((response) =>{
          setEvents(response.data)
        
      })
    
  }

  useEffect(() => {
    getData();


}, []);

console.log(events)



 

    return( 

      <Container>

        
        <div>

        <CardGroup>
  <Row>

{

events[0] && 

(

  <Col md>
<Card className = "mb-3">
  <Card.Img variant="top" src={process.env.PUBLIC_URL + '/upload/' + events[0].eventImage}/>
  <Card.Body>
    <Card.Title>{events[0].eventName}</Card.Title>
    <Card.Text>
    Deadline: {dayjs(events[0].eventDate).format("dddd, MMMM D YYYY")}
    </Card.Text>
  </Card.Body>
  {/* <Button variant = "warning"> Read More</Button> */}
  <Card.Footer>
  
    <small className="text-muted"> {dayjs(events[0].addedDate).fromNow()}</small>
  </Card.Footer>
</Card>
</Col>

)


}



{
  events[1] && (
    <Col md>
<Card className = "mb-3">
  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/upload/' + events[1].eventImage} />
  <Card.Body>
    <Card.Title>{events[1].eventName}</Card.Title>
    <Card.Text>
    Deadline: {dayjs(events[1].eventDate).format("dddd, MMMM D YYYY")}    </Card.Text>
  </Card.Body>
  {/* <Button variant = "warning" onClick = {eventSignUp}> Read More</Button> */}
  <Card.Footer>
  
    <small className="text-muted">Added {dayjs(events[1].addedDate).fromNow()}</small>
  </Card.Footer>
</Card>
</Col>

  )

}


{
  events[2] && (
    <Col md>
<Card className = "mb-3">
  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/upload/' + events[2].eventImage} />
  <Card.Body>
    <Card.Title>{events[2].eventName}</Card.Title>
    <Card.Text>
    Deadline: {dayjs(events[2].eventDate).format("dddd, MMMM D YYYY")}    </Card.Text>
  </Card.Body>
  {/* <Button variant = "warning"> Read More</Button> */}
  <Card.Footer>
  
    <small className="text-muted">{dayjs(events[2].addedDate).fromNow()}</small>
  </Card.Footer>
</Card>
</Col>

  )
  

  }

  </Row>

</CardGroup>
        </div>
        </Container>







    )

}

export default UpcomingEvent;