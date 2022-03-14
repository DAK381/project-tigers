//imports needed packages for cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardGroup from 'react-bootstrap/CardGroup'
import ListGroup from 'react-bootstrap/ListGroup';

/*This creates a grid of Sholarship Cards */
function ScholarshipCard() {

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
									<Button href='#'>Go somewhere</Button>
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