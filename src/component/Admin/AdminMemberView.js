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
function AdminMemberView(props) {

	// const navigate = useNavigate();



	// function showDetails(){
	// 	navigate('/eventInfo', {state:
	// 		{
	// 			id: props.data.id,
	// 			name: props.data.firstName
	// 		}
	// 	});
	// }
	// <Route path="/eventInfo/:data" exact component={EventDetails} />




	return (
		<Container fluid>
			<div>

<Row>


						<Col>
							<Card>
								<Card.Img variant="top" src='#' width={400} height={400} alt='...'  />
								<Card.Body>
									<Card.Title>{props.data.firstName} {props.data.lastName}</Card.Title>
                                    <ListGroup variant="flush">
    								<ListGroup.Item>Email: {props.data.email} </ListGroup.Item>
   									 <ListGroup.Item>Phone: </ListGroup.Item>
  									</ListGroup>
									
								</Card.Body>
							</Card>
						</Col>

						</Row>




			</div>
		</Container>
	);
}

export default AdminMemberView;