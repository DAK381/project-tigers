import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import photo1 from "../Images/photo1.jpeg"
import photo2 from "../Images/photo2.jpeg"
import photo3 from "../Images/photo3.jpeg"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function UpcomingEvent(){

    return( 

      <Container>
        <div>
            <CardGroup>
  <Row>
    <Col md>
  <Card className = "mb-3">
    <Card.Img va driant="top" src= {photo1} />
    <Card.Body>
      <Card.Title>EVENT 1</Card.Title>
      <Card.Text>
      Description
      </Card.Text>
    </Card.Body>
    <Button variant = "primary"> Read More</Button>
    <Card.Footer>
    
      <small className="text-muted">Added 5 days ago</small>
    </Card.Footer>

    
  </Card>
  </Col>
  </Row>


  <Row>
    <Col md>
  <Card className = "mb-3">
    <Card.Img variant="top" src= {photo1} />
    <Card.Body>
      <Card.Title>EVENT 2</Card.Title>
      <Card.Text>
        Description
      </Card.Text>
    </Card.Body>
    <Button variant = "primary"> Read More</Button>

    <Card.Footer>
      <small className="text-muted">Added 9 days ago</small>
    </Card.Footer>
    
  </Card>

  </Col>
  </Row>


  <Row>
    <Col md>
  <Card className = "mb-3">
    <Card.Img variant="top" src= {photo1} />
    <Card.Body>
      <Card.Title>Event 3</Card.Title>
      <Card.Text>
        Description
        
      </Card.Text>
    </Card.Body>
    <Button variant = "primary"> Read More</Button>
    <Card.Footer>
    
      <small className="text-muted">Added 10 days ago</small>
    </Card.Footer>
  </Card>
  </Col>
  </Row>

</CardGroup>
        </div>
        </Container>




    )

}

export default UpcomingEvent;
