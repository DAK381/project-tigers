//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';

/*This creates a grid of Event Cards */
function MemberCard(props) {

	const navigate = useNavigate();



	function showDetails(){
		navigate('/admin-member-profile', {state:
			{
				userData: props.data
			}
		});
	}

	// <Route path="/eventInfo/:data" exact component={EventDetails} />




	return (
		<Container>
			<div>


						<Col>
							<Card>
								<Card.Img variant="top" src='#' alt='...'  />
								<Card.Body>
									<Card.Title>{props.data.firstName} {props.data.lastName}</Card.Title>
                                    <ListGroup variant="flush">
    								<ListGroup.Item>Email: {props.data.email} </ListGroup.Item>
   									 <ListGroup.Item>Phone: {props.data.email} </ListGroup.Item>
  									</ListGroup>

									  < Button onClick = {() => {showDetails()}}>Go to user profile</Button>
									



								</Card.Body>
							</Card>
						</Col>

			</div>
		</Container>
	);
}

export default MemberCard;