//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "../axios";
import './Card.css';

/*This creates a grid of Sholarship Cards */
function ScholarshipCard(props) {
	const id = props.id;
	const name = props.name;
	const desc = props.desc;

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	return (
		//makes it flush for viewport
		<Container fluid>
			<div>

					<Row className='row-cols-1 row-cols-3 g-3 p-2'>

						<Col>
							<Card>
								<Card.Img variant="top" src='http://oahs.us/wp-content/uploads/2019/03/Scholarship-Opportunities-01.jpg' width={400} height={400} alt='...' />
								<Card.Body>
									<Card.Title>{name}</Card.Title>
									<Card.Text>
										{desc}
									</Card.Text>
									
									<Card.Text>
										<small className='text-muted'>Last updated 3 mins ago</small>
									</Card.Text>

									{/* This is the Modal for more scholarship Information */}
									<Button variant="primary" onClick={handleShow}>
										More Scholarship Information
									</Button>
									<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
										<Modal.Header closeButton>
											<Modal.Title>Modal heading</Modal.Title>
										</Modal.Header>
										<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
										<Modal.Footer>
											<Button variant="secondary" onClick={handleClose}>
												Close
											</Button>

										</Modal.Footer>
									</Modal>

									{/* This is the Modal for scholarship sign up form */}
									<Button variant="primary" onClick={handleShow}>
										Scholarship Sign Up Form
									</Button>
									<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
										<Modal.Header closeButton>
											<Modal.Title>Modal heading</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Form>
												<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
													<Form.Label>Email address</Form.Label>
													<Form.Control
														type="email"
														placeholder="name@example.com"
														autoFocus
													/>
												</Form.Group>
												<Form.Group
													className="mb-3"
													controlId="exampleForm.ControlTextarea1"
												>
													<Form.Label>Example textarea</Form.Label>
													<Form.Control as="textarea" rows={3} />
												</Form.Group>
											</Form>
										</Modal.Body>
										<Modal.Footer>
											<Button variant="secondary" onClick={handleClose}>
												Close
											</Button>
											<Button variant="primary" onClick={handleClose}>
												Save Changes
											</Button>
										</Modal.Footer>
									</Modal>

								</Card.Body>
							</Card>
						</Col>
					</Row>
			</div>
		</Container>
	);
}
export default ScholarshipCard;
