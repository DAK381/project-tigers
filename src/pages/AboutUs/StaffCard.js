import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import './../Card.css';
import { CardFooter } from 'reactstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import UpdateStaff from '../../component/Admin/AdminSite/UpdateStaff';

export default function StaffCard(props){

    const staff = props.staff;
    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    return (
        <div>
            <Container fluid>
			<div>
			<Col>
			<Card>

				
				
					
						 <CardHeader>
                         {staff.position} 
						 </CardHeader>
						
						<Card.Body>
							<Card.Title> {staff.firstName} {staff.middleName} {staff.lastName} </Card.Title>
                            <Card.Body>
                               Email <br>
							   </br>{staff.email}
                            </Card.Body>

                            <Card.Body>
                               Phone: <br>
							   </br>{staff.phone}
                            </Card.Body>

									
							{/* <Button variant="primary" className="btn btn-warning btn-sm btn-outline-dark" onClick={handleShow}>
								More Event Information
							</Button> */}


							<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									

									<UpdateStaff staff = {staff} />

								</Modal.Header>
								<Modal.Body>
                                    

                                    
                                    </Modal.Body>
										
								
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
							

						
						</Card.Body>

						<CardFooter>
						{ 
						(props.user.role === "ADMIN") && 
						<Button onClick={handleShow} className="btn btn-warning btn-md btn-outline-dark">Update Staff</Button>
						}


						</CardFooter>

					</Card>
				</Col>
			</div>
		</Container>

	


        </div>

    )
}