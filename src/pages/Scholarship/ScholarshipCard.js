//imports needed packages for cards
import { Button, Card, Container, Col, Modal, Alert } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardFooter } from 'reactstrap';
import { PayPalScriptProvider,  PayPalButtons } from "@paypal/react-paypal-js";

import './../Card.css';
import { ModalBody } from 'react-bootstrap';

/*This creates a grid of Sholarship Cards */
function ScholarshipCard(props) {
	const scholarship = props.scholarship;

	const navigate = useNavigate();
	const price = "2.00";

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShowForm = () => setShow(true);
	const handleShowInfo = () => setShow(true);

	const [showComplete, SetShowComplete] = useState(false);
	const [details, setDetails] = useState();

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
								{showComplete &&
          						<Alert variant="success" onClose={() => SetShowComplete(false)} dismissible>
            						<Alert.Heading>Thank you for your contribution!!!</Alert.Heading>
            						<p>
              							Thank you! Your contribution is greatly appreciated and will go towards making Neville High School even better.
            						</p>
          						</Alert>
        						}
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
									<PayPalScriptProvider options={{ "client-id": "AQ06pCXblDolitWGlI8oGp2k5kmvfKusKYjurcQ87wo-_ZkX5t3lrgqd9qFnAHrmZBEGq4ECTbiZfVOS" }}>
                <PayPalButtons 
                    createOrder={(data, actions) => {
                      return actions.order.create({

                        purchase_units: [
                          {
                            amount: {
                              value: price,
                              currency_code: "USD"
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        setDetails(details);
						console.log(details);
                        SetShowComplete(true);
                      });
                    }}
                  />
                </PayPalScriptProvider>

								}


								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>

								</Modal.Footer>
							</Modal>

							{props.userData.role === "ADMIN" && < Button className ="btn btn-warning btn-sm btn-outline-dark " onClick = {() => {updateScholarship()}}>Update Scholarship</Button>}
									
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
