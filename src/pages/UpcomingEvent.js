import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import photoT from "../Images/tempevent.jpg"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function UpcomingEvent(props){

    return( 

      <Container>
        <div>
            <CardGroup>
  <Row>
    <Col md>
  <Card className = "mb-3">
    <Card.Img va driant="top" src= {photoT} />
    <Card.Body>
      <Card.Title>EVENT 1</Card.Title>
      <Card.Text>
      Description
      </Card.Text>
    </Card.Body>
    <Button variant = "warning"> Read More</Button>
    <Card.Footer>
    
      <small className="text-muted">Added 5 days ago</small>
    </Card.Footer>

    
  </Card>
  </Col>



    {/* <Col md>
  <Card className = "mb-3">
    <Card.Img variant="top" src= {photoT} />
    <Card.Body>
      <Card.Title>EVENT 2</Card.Title>
      <Card.Text>
        Description
      </Card.Text>
    </Card.Body>
    <Button variant = "warning"> Read More</Button>

    <Card.Footer>
      <small className="text-muted">Added 9 days ago</small>
    </Card.Footer>
    
  </Card>

  </Col>


    <Col md>
  <Card className = "mb-3">
    <Card.Img variant="top" src= {photoT} />
    <Card.Body>
      <Card.Title>Event 3</Card.Title>
      <Card.Text>
        Description
        
      </Card.Text>
    </Card.Body>
    <Button variant = "warning"> Read More</Button>
    <Card.Footer>
    
      <small className="text-muted">Added 10 days ago</small>
    </Card.Footer>
  </Card>
  </Col> */}
  </Row>

</CardGroup>
        </div>
        </Container>




    )

}

export default UpcomingEvent;
