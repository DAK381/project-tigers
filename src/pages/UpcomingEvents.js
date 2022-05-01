import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';
import axios from '../axios';


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

function eventSignUp(){
  console.log(props.userData)
 
    navigate('/event-signup', {state:
      {
        event: events[0],
        user : props.userData

      }
    });


}

 

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
  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/upload/tempevent.jpg'} />
  <Card.Body>
    <Card.Title>{events[0].eventName}</Card.Title>
    <Card.Text>
    {events[0].eventDescription}
    </Card.Text>
  </Card.Body>
  <Button variant = "warning"> Read More</Button>
  <Card.Footer>
  
    <small className="text-muted"> days ago</small>
  </Card.Footer>
</Card>
</Col>

)


}



{
  events[1] && (
    <Col md>
<Card className = "mb-3">
  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/upload/tempevent.jpg'} />
  <Card.Body>
    <Card.Title>{events[1].eventName}</Card.Title>
    <Card.Text>
    {events[2].eventDescription}
    </Card.Text>
  </Card.Body>
  <Button variant = "warning" onClick = {eventSignUp}> Read More</Button>
  <Card.Footer>
  
    <small className="text-muted">Added 5 days ago</small>
  </Card.Footer>
</Card>
</Col>

  )

}


{
  events[2] && (
    <Col md>
<Card className = "mb-3">
  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/upload/tempevent.jpg'} />
  <Card.Body>
    <Card.Title>events[2].eventName</Card.Title>
    <Card.Text>
    events[2].eventDescription
    </Card.Text>
  </Card.Body>
  <Button variant = "warning"> Read More</Button>
  <Card.Footer>
  
    <small className="text-muted">Added 5 days ago</small>
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