//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import './Card.css';


/*This creates a grid of Event Cards */
function EventCard(props) {
	const id = props.id;
	const name = props.name;
	const desc = props.desc;

	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	// function showDetails(){
	// 	navigate('/eventInfo', {state:
	// 		{
	// 			id: props.data.eventId,
	// 			name: props.data.eventName,
	// 			description: props.data.eventDescription
	// 		}
	// 	});
	// }
	// <Route path="/eventInfo/:data" exact component={EventDetails} />

	function updateEvent(){
		navigate('/admin-event-update', {state:
			{
				id: id,
				name: name,
				description: desc
			}
		});
	}


	return (
		<Container fluid>
			<div>


						<Col>
							<Card>
								<Card.Img variant="top" src='https://1yfd8w35xqq41q3ou63czp8h-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/etouches-post-alimni-events.jpg' width={400} height={400} alt='...'  />
								<Card.Body>
									<Card.Title>{name}</Card.Title>
									
									<Button variant="primary" onClick={handleShow}>
										More Event Information
									</Button>

									<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
										<Modal.Header closeButton>
											<Modal.Title>{name}</Modal.Title>
										</Modal.Header>
										<Modal.Body>{desc}</Modal.Body>
										<Modal.Footer>
											<Button variant="secondary" onClick={handleClose}>
												Close
											</Button>

										</Modal.Footer>
									</Modal>


									
  									 
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