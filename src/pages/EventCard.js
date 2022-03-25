//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useLocation } from 'react-router-dom';

/*This creates a grid of Event Cards */
function EventCard(props) {

	const location = useLocation();
	const state = location.state;


	return (
		<Container fluid>
			<div>


						<Col>
							<Card>
								<Card.Img variant="top" src='https://1yfd8w35xqq41q3ou63czp8h-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/etouches-post-alimni-events.jpg' width={400} height={400} alt='...'  />
								<Card.Body>
									<Card.Title>{props.data.firstName}</Card.Title>
									<Card.Text>
										This event involves a fundraiser.
									</Card.Text>
									<ListGroup flush>
										<ListGroup.Item>Registration Deadline: {props.data.lastName}</ListGroup.Item>
										<ListGroup.Item>Event Date: 03/21/2022</ListGroup.Item>
										<ListGroup.Item>Registration is Free.</ListGroup.Item>
									</ListGroup>
									<Card.Text>
										<small className='text-muted'>Last updated 3 mins ago</small>
									</Card.Text>
									<Button href='#'>Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>




			</div>
		</Container>
	);
}

export default EventCard;