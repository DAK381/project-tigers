//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import './Card.css';
import { format, compareAsc, parseISO } from 'date-fns'
import { formatISO } from 'date-fns'

/*This creates a grid of Event Cards */
function EventCard(props) {
	const event = props.event;

	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function updateEvent(){
		navigate('/admin-event-update', {state:
			{
				event: event
			}
		});
	}


	return (
		<Container fluid>
			<div>
				<Col>
					<Card>
						<Card.Img variant="top" src={process.env.PUBLIC_URL + '/upload/' + event.eventImage} width={400} height={400} alt='...'  />
						<Card.Body>
							<Card.Title>{event.eventName}</Card.Title>
									
							<Button variant="primary" onClick={handleShow}>
								More Event Information
							</Button>

							<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title>{event.eventName}</Modal.Title>
								</Modal.Header>
								<Modal.Body>Details: {event.eventDescription}</Modal.Body>
								<Modal.Body>When: {event.eventDate}</Modal.Body>
								<Modal.Body>Where: {event.eventLocation}</Modal.Body>
										
								{(props.payment!= null) &&	<Modal.Body>Amount per ticket: $ {event.paymentAmount}</Modal.Body>}
										
								{/* <Modal.Body>{formattedDate}</Modal.Body> */}
								
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>

						{props.admin && < Button onClick = {() => {updateEvent()}}>Update Event</Button>}
 									
						</Card.Body>
					</Card>
				</Col>
			</div>
		</Container>
	);
}

export default EventCard;