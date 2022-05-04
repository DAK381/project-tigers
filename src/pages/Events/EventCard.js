//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import './../Card.css';
import { CardFooter } from 'reactstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import DayJS from 'react-dayjs';
import { set } from 'date-fns';


/*This creates a grid of Event Cards */
function EventCard(props) {
	const eventInfo = props.event;
	const navigate = useNavigate();
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const[past, setPast] = useState(false)


	const dayjs = require('dayjs');
	var customParseFormat = require('dayjs/plugin/customParseFormat')
	dayjs.extend(customParseFormat)

	const startTime = dayjs(eventInfo.startTime, ["HH.mm"]).format('hh:mm A')
	const endTime = dayjs(eventInfo.endTime, ["HH.mm"]).format('hh:mm A')
	const eventDate = dayjs(eventInfo.eventDate).format("dddd, MMMM D YYYY")



	function updateEvent(){
		navigate('/admin-event-update', {state:
			{
				event: eventInfo
			}
		});
	}

	function eventSignUp(e){
		
			navigate('/event-signup', {state:
				{
					event: eventInfo,
					user : props.userData,
					past: past

				}
			});
		

	}

	function RSVPmembers(){

		console.log(eventInfo)
		navigate("/admin-member-event-rsvp", {state:
			{
				event: eventInfo,
				past: past
			}
		})
	}


	function RSVPGuest(){

		console.log(eventInfo)
		navigate("/guest-rsvp", {state:
			{
				event: eventInfo,
				past: past
			}
		})
	}

	return (

		<Container fluid>
			<div>
			<Col>
			<Card>

				
					{eventInfo.past ? <CardHeader>
							{eventInfo.eventName} is no longer available!
						</CardHeader> : <CardHeader>
						 {eventInfo.remaining}</CardHeader>}

						<Card.Img variant="top" src={process.env.PUBLIC_URL + '/upload/' + eventInfo.eventImage} alt='...'  />
						
						<Card.Body>
							<Card.Title>{eventInfo.eventName}</Card.Title>
									
							<Button variant="primary" className="btn btn-warning btn-sm btn-outline-dark" onClick={handleShow}>
								More Event Information
							</Button>

							<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title>{eventInfo.eventName}</Modal.Title>
								</Modal.Header>
								<Modal.Body>Details: {eventInfo.eventDescription}</Modal.Body>
								{/* {eventInfo.eventDate != null && <Modal.Body>When: {eventInfo.eventDate} </Modal.Body>} */}

								{/* {eventInfo.eventDate != null && <Modal.Body>When: <DayJS format="MMMM-DD-YYYY">{eventInfo.eventDate}</DayJS> */}
								{eventInfo.eventDate != null && <Modal.Body>When: {eventDate}
 </Modal.Body>}
								
								{/* {eventInfo.startTime!= null && <Modal.Body>Starts at: {moment(eventInfo.startTime, ["HH.mm"]).format("hh:mm a")} </Modal.Body>} */}

								{eventInfo.startTime!= null && <Modal.Body>Starts at: {startTime} </Modal.Body>}

								{/* {eventInfo.endTime != null && <Modal.Body>Ends at: {moment(eventInfo.endTime, ["HH.mm"]).format("hh:mm a")} </Modal.Body>} */}
							
								{eventInfo.endTime != null && <Modal.Body>Ends at: {endTime} </Modal.Body>}

								
								{eventInfo.eventLocation != null && <Modal.Body>Where: {eventInfo.eventLocation}</Modal.Body>}
										
								{(eventInfo.payment!= null) &&	<Modal.Body>Amount per ticket: $ {eventInfo.paymentAmount}</Modal.Body>}
										
								{/* <Modal.Body>{formattedDate}</Modal.Body> */}
								
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
							
						{props.userData.role === "ADMIN" && < Button onClick = {() => {updateEvent()}}>Update Event</Button>}

						{props.userData.role === "ADMIN" && < Button onClick = {() => {RSVPmembers()}}>RMembers RSVP List</Button>}

						{props.userData.role === "ADMIN" && < Button onClick = {() => {RSVPGuest()}}>Guest RSVP List</Button>}

						
						</Card.Body>

						<CardFooter>
						{ 
						!(props.userData.role === "ADMIN") && 
						<Button disabled = {past} onClick={eventSignUp} className="btn btn-warning btn-sm btn-outline-dark">Register for the event</Button>
						}
						<CardFooter>
							Added {eventInfo.added}.
						</CardFooter>
						</CardFooter>
					</Card>
				</Col>
			</div>
		</Container>

	);
}

export default EventCard;