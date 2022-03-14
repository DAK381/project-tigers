//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup';

/*This creates a grid of Event Cards */
function EventCard() {

	return (
		<Container fluid>
			<div>
				<CardGroup>
					<Row className='row-cols-1 row-cols-md-3 p-2 g-4'>
						<Col>
							<Card>
								<Card.Img variant="top" src='https://1yfd8w35xqq41q3ou63czp8h-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/etouches-post-alimni-events.jpg' width={400} height={400} alt='...'  />
								<Card.Body>
									<Card.Title>Event 1</Card.Title>
									<Card.Text>
										This event involves a fundraiser.
									</Card.Text>
									<ListGroup flush>
										<ListGroup.Item>Registration Deadline: 03/14/2022</ListGroup.Item>
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

						<Col>
							<Card>
								<Card.Img variant="top" src='https://www.marjon.ac.uk/media/2018-website-images-gdpr/alumni/alumni-header-1.jpg' width={400} height={400} alt='...'  />
								<Card.Body>
									<Card.Title>Event 2</Card.Title>
									<Card.Text>
										This event involves class 2000 reunion.
									</Card.Text>
									<ListGroup flush>
										<ListGroup.Item>Registration Deadline: 03/21/2022</ListGroup.Item>
										<ListGroup.Item>Event Date: 03/28/2022</ListGroup.Item>
										<ListGroup.Item>Registration is $10 per person.</ListGroup.Item>
									</ListGroup>
									<Card.Text>
										<small className='text-muted'>Last updated 3 mins ago</small>
									</Card.Text>
									<Button href='#'>Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>

						<Col>
							<Card>
								<Card.Img variant="top" src='https://leadershipmontgomery.org/resources/Site/4%20-%20Alumni/Alumni%20Blue%20Logo.png' width={400} height={400} alt='...' />
								<Card.Body>
									<Card.Title>Event 3</Card.Title>
									<Card.Text>
										This involves the NAFA annual meeting.
									</Card.Text>
									<ListGroup flush>
										<ListGroup.Item>Registration Deadline: 03/28/2022</ListGroup.Item>
										<ListGroup.Item>Event Date: 04/04/2022</ListGroup.Item>
										<ListGroup.Item>Registration is Free.</ListGroup.Item>
									</ListGroup>
									<Card.Text>
										<small className='text-muted'>Last updated 3 mins ago</small>
									</Card.Text>
									<Button href='#'>Go somewhere</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</CardGroup>
			</div>
		</Container>
	);
}

export default EventCard;