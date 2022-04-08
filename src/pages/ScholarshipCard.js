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

/*This creates a grid of Sholarship Cards */
function ScholarshipCard() {

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		//makes it flush for viewport
		<Container fluid>
			<div>
				<CardGroup>

					<Row className='row-cols-1 row-cols-3 g-3 p-2'>
						<Col>
							<Card>
								<Card.Img variant="top" src='https://imageio.forbes.com/specials-images/imageserve/5fb2d344abf7d301612e2395/0x0.jpg?format=jpg&width=1200&fit=bounds' width={400} height={400} alt='...' />
								<Card.Body>

									<Card.Title>Scholarship 1</Card.Title>


									<Card.Text>
										This Scholarship involves the NAFA Alumni Scholarship.
									</Card.Text>


									<ListGroup flush>
										<ListGroup.Item>Registration Deadline: 03/14/2022</ListGroup.Item>
										<ListGroup.Item>Event Date: 03/21/2022</ListGroup.Item>
										<ListGroup.Item>Registration Requirements: </ListGroup.Item>
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
								<Card.Img variant="top" src='https://www.vikingmergers.com/wp-content/uploads/2015/08/scholarship.jpg' width={400} height={400} alt='...' />
								<Card.Body>
									<Card.Title>Scholarship 2</Card.Title>
									<Card.Text>
										This involves the Public Publishing Foundation Scholarship.
									</Card.Text>
									<ListGroup flush>
										<ListGroup.Item>Registration Deadline: 03/14/2022</ListGroup.Item>
										<ListGroup.Item>Event Date: 04/21/2022</ListGroup.Item>
										<ListGroup.Item>Registration Requirements: </ListGroup.Item>
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
								<Card.Img variant="top" src='http://oahs.us/wp-content/uploads/2019/03/Scholarship-Opportunities-01.jpg' width={400} height={400} alt='...' />
								<Card.Body>
									<Card.Title>Scholarship 3</Card.Title>
									<Card.Text>
										This involves the 2022 ULM Culture Scholarship.
									</Card.Text>
									<ListGroup flush>
										<ListGroup.Item>Registration Deadline: 05/14/2022</ListGroup.Item>
										<ListGroup.Item>Event Date: 06/21/2022</ListGroup.Item>
										<ListGroup.Item>Registration Requirements: </ListGroup.Item>
									</ListGroup>
									<Card.Text>
										<small className='text-muted'>Last updated 3 mins ago</small>
									</Card.Text>

									/**This is the Modal for more scholarship Information */
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

									/**This is the Modal for scholarship sign up form */
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
				</CardGroup>
			</div>
		</Container>
	);
}
export default ScholarshipCard;