//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import './Card.css';

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
						<Card.Img variant="top" src={process.env.PUBLIC_URL + '/upload/' + scholarship.scholarshipImage} width={400} height={400} alt='...' />
						<Card.Body>
							<Card.Title>{scholarship.scholarshipName}</Card.Title>

							{/* This is the Modal for more scholarship Information */}
							<Button variant="primary" onClick={handleShowInfo}>
								More Scholarship Information
							</Button>
							<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title>{scholarship.scholarshipName}</Modal.Title>
								</Modal.Header>
								<Modal.Body>{scholarship.scholarshipDescription}</Modal.Body>
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>

								</Modal.Footer>
							</Modal>

							{props.admin && < Button onClick = {() => {updateScholarship()}}>Update Scholarship</Button>}
									
						</Card.Body>
					</Card>
				</Col>
			</div>
		</Container>
	);
}
export default ScholarshipCard;
