//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import './Card.css';
import { format, compareAsc, parseISO } from 'date-fns'
import { formatISO } from 'date-fns'
import { CardFooter } from 'reactstrap';


/*This creates a grid of Event Cards */
function EventCard(props) {
	const eventInfo = props.event;

	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function updateEvent(){
		navigate('/admin-event-update', {state:
			{
				event: eventInfo
			}
		});
	}

	function eventSignUp(){
		console.log(props.userData)
		if(Object.keys(props.userData).length !== 0){
			navigate('/event-signup', {state:
				{
					event: eventInfo,
					user : props.userData
				}
			});
		}
		else{
			console.log("have to login to register")
		}

	}

	function RSVPmembers(){

		console.log(eventInfo)
		navigate("/admin-member-event-rsvp", {state:
			{
				event: eventInfo
			}
		})
	}




	return (
		<Container fluid>
			<div>
				<Col>
					<Card>
						<Card.Img variant="top" src={process.env.PUBLIC_URL + '/upload/' + eventInfo.eventImage} width={400} height={400} alt='...'  />
						<Card.Body>
							<Card.Title>{eventInfo.eventName}</Card.Title>
									
							<Button variant="primary" onClick={handleShow}>
								More Event Information
							</Button>

							<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title>{eventInfo.eventName}</Modal.Title>
								</Modal.Header>
								<Modal.Body>Details: {eventInfo.eventDescription}</Modal.Body>
								{eventInfo.eventDate != null && <Modal.Body>When: {eventInfo.eventDate} </Modal.Body>}
								
								{eventInfo.startTime!= null && <Modal.Body>Starts at: {eventInfo.eventDate} </Modal.Body>}

								{eventInfo.endTime != null && <Modal.Body>Ends at: {eventInfo.eventDate} </Modal.Body>}
								
								
								{eventInfo.eventLocation != null && <Modal.Body>Where: {eventInfo.eventLocation}</Modal.Body>}
										
								{(eventInfo.payment!= null) &&	<Modal.Body>Amount per ticket: $ {eventInfo.paymentAmount}</Modal.Body>}
										
								{/* <Modal.Body>{formattedDate}</Modal.Body> */}
								
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>

						{props.admin && < Button onClick = {() => {updateEvent()}}>Update Event</Button>}

						{props.admin && < Button onClick = {() => {RSVPmembers()}}>Registered Members</Button>}
						
						</Card.Body>
						
						<CardFooter>
						{!props.admin && <Button onClick={eventSignUp}>Register for the event</Button>}
						</CardFooter>
					</Card>
				</Col>
			</div>
		</Container>
	);
}

export default EventCard;