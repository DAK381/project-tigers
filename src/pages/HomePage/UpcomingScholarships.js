import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';
import axios from '../../axios';


function UpcomingScholarships(props){
    const [scholarships, setScholarships] = useState([]);  const navigate = useNavigate();


  const dayjs = require('dayjs');
  var customParseFormat = require('dayjs/plugin/customParseFormat')
  dayjs.extend(customParseFormat)

  var relativeTime = require('dayjs/plugin/relativeTime')
  dayjs.extend(relativeTime)

  var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
  dayjs.extend(isSameOrBefore)

 
  async function getData(){
      axios.get("/scholarship/get-all-scholarship").then((response) =>{
        setScholarships(response.data)
        
      })
    
  }

  useEffect(() => {
    getData();

}, []);

console.log(scholarships)

// function eventSignUp(){
//   console.log(props.userData)
 
//     navigate('/event-signup', {state:
//       {
//         event: events[0],
//         user : props.userData

//       }
//     });


// }

 

    return( 

      <Container>

        
        <div>

        <CardGroup>
  <Row>

{

scholarships[0] && 

(

  <Col md>
<Card className = "mb-3">
  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/upload/' + scholarships[0].scholarshipImage} />
  <Card.Body>
    <Card.Title>{scholarships[0].scholarshipName}</Card.Title>
    <Card.Text>
    Deadline: {dayjs(scholarships[0].deadline).format("dddd, MMMM D YYYY")}
    </Card.Text>
  </Card.Body>
  {/* <Button variant = "warning"> Read More</Button> */}
  <Card.Footer>
  
    <small className="text-muted">{dayjs(scholarships[0].addedDate).fromNow()}</small>
  </Card.Footer>
</Card>
</Col>

)


}



{
  scholarships[1] && (
    <Col md>
<Card className = "mb-3">
  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/upload/' + scholarships[2].scholarshipImage} />
  <Card.Body>
    <Card.Title>{scholarships[1].scholarshipName}</Card.Title>
    <Card.Text>
    Deadline: {dayjs(scholarships[1].deadline).format("dddd, MMMM D YYYY")}
    </Card.Text>
  </Card.Body>
  {/* <Button variant = "warning" onClick = {eventSignUp}> Read More</Button> */}
  <Card.Footer>
  
    <small className="text-muted">{dayjs(scholarships[1].addedDate).fromNow()}</small>
  </Card.Footer>
</Card>
</Col>

  )

}


{
  scholarships[2] && (
    <Col md>
<Card className = "mb-3">
  <Card.Img variant="top" src= {process.env.PUBLIC_URL + '/upload/' + scholarships[2].scholarshipImage}/>
  <Card.Body>
    <Card.Title>{scholarships[2].scholarshipName}</Card.Title>
    <Card.Text>
   Deadline: {dayjs(scholarships[2].deadline).format("dddd, MMMM D YYYY")}
    </Card.Text>
  </Card.Body>
  {/* <Button variant = "warning"> Read More</Button> */}
  <Card.Footer>
  
    <small className="text-muted">{dayjs(scholarships[2].addedDate).fromNow()}</small>
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

export default UpcomingScholarships;