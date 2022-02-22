import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

function UpcomingEvent(){

    return( 
        <div>
            <CardGroup>
  <Card>
    <Card.Img va driant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
       s This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Added ....</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Added...</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Added....</small>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>




    )

}

export default UpcomingEvent;