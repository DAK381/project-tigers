//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import { CardFooter } from 'reactstrap';

import './../Card.css';
import { ModalBody } from 'react-bootstrap';

/*This creates a grid of Sholarship Cards */
function ScholarshipCard(props) {
	const scholarship = props.scholarship;

	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShowForm = () => setShow(true);
	const handleShowInfo = () => setShow(true);

	function updateScholarship(){
		navigate('/admin-scholarship-update', {state:
			{
				scholarship: scholarship
			}
		});
	}


	return (
		//makes it flush for viewport
		<Container fluid>
			<div>
				<Col>
					<Card>

					{scholarship.past ? <CardHeader>
							{scholarship.eventName} is no longer available!
						</CardHeader> :
						 <CardHeader>
						 Deadline {scholarship.remaining}. </CardHeader>}

						<Card.Img variant="top" src={process.env.PUBLIC_URL + '/upload/' + scholarship.scholarshipImage} alt='...' />
						<Card.Body>
							<Card.Title>{scholarship.scholarshipName}</Card.Title>

							{/* This is the Modal for more scholarship Information */}
							<Button  className="btn btn-warning btn-sm btn-outline-dark" onClick={handleShowInfo}>
								More Scholarship Information
							</Button>
							<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title>{scholarship.scholarshipName}</Modal.Title>
								</Modal.Header>
								<Modal.Body>{scholarship.scholarshipDescription}</Modal.Body>
								<Modal.Body>Deadline: {scholarship.deadline}</Modal.Body>

								{
									scholarship.past? <ModalBody> We are no longer accepting application for this scholarhisp. </ModalBody>
									:
									<ModalBody>
											Apply at: {scholarship.formLink}
									</ModalBody>

								}

								
								{
									scholarship.past? <ModalBody> We are no longer accepting contributions for this scholarhisp. </ModalBody>
									:
									<Button >
										Click to make a contribution.
									</Button>

								}


								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>

								</Modal.Footer>
							</Modal>

							{props.userData.role === "ADMIN" && < Button onClick = {() => {updateScholarship()}}>Update Scholarship</Button>}
									
						</Card.Body>

						<CardFooter>
							Added {scholarship.added}.
						</CardFooter>

					</Card>
				</Col>
			</div>
		</Container>
	);
}
export default ScholarshipCard;
