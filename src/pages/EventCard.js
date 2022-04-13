//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import EventDetails from './EventDetails';
import { Route } from 'react-router-dom';


/*This creates a grid of Event Cards */
function EventCard(props) {

	const navigate = useNavigate();



	function showDetails(){
		navigate('/eventInfo', {state:
			{
				id: props.data.eventId,
				name: props.data.eventName,
				description: props.data.eventDescription
			}
		});
	}
	// <Route path="/eventInfo/:data" exact component={EventDetails} />

	function updateEvent(){
		navigate('/admin-event-update', {state:
			{
				id: props.data.eventId,
				name: props.data.eventName,
				description: props.data.eventDescription
			}
		});
	}

	console.log(props.data.eventId)


	return (
		<Container fluid>
			<div>


						<Col>
							<Card>
								<Card.Img variant="top" src='https://1yfd8w35xqq41q3ou63czp8h-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/etouches-post-alimni-events.jpg' width={400} height={400} alt='...'  />
								<Card.Body>
									<Card.Title>{props.data.eventName}</Card.Title>


									
									<Button onClick = {() => {showDetails()}}>More Information</Button>

									
  									 
     									{props.admin && < Button onClick = {() => {updateEvent()}}>Update Event</Button>}
 									
										

									{/* <Link to={`/eventInfo/${this.props.firstName}`}>More info</Link> */}
								</Card.Body>
							</Card>
						</Col>




			</div>
		</Container>
	);
}

export default EventCard;