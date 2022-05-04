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
function CampaignCard(props) {
	const  campaign = props.campaign;

	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShowForm = () => setShow(true);
	const handleShowInfo = () => setShow(true);

	function updateCampaign(){
		navigate('/update-campaign', {state:
			{
				campaign: campaign
			}
		});
	}


	return (
		//makes it flush for viewport
		<Container>
			<div>
				<Col>
					<Card>

					
						 <CardHeader>
						 Make your conttibution to {campaign.campaignName}</CardHeader>

						<Card.Img variant="top" src={process.env.PUBLIC_URL + '/upload/' + campaign.campaignImage} alt='...' />
						<Card.Body>
							<Card.Title>{campaign.campaignName}</Card.Title>

							{/* This is the Modal for more scholarship Information */}
							<Button variant="primary" className="btn btn-warning btn-sm btn-outline-dark" onClick={handleShowInfo}>
								More Information
							</Button>
							<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title>{campaign.campaignName}</Modal.Title>
								</Modal.Header>
								<Modal.Body>{campaign.campaignDescription}</Modal.Body>
								<Modal.Body>Goal: {campaign.amountGoal}</Modal.Body>

							
								
							
									<Button>
										Click to make a contribution.
									</Button>

						


								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>

								</Modal.Footer>
							</Modal>

							{props.userData.role === "ADMIN" && < Button onClick = {() => {updateCampaign()}}>Update Campaign</Button>}
									
						</Card.Body>

						<CardFooter>
							Added {campaign.added}.
						</CardFooter>

					</Card>
				</Col>
			</div>
		</Container>
	);
}
export default CampaignCard;
