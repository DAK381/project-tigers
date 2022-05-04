import axios from '../../axios';
import { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../../component/Loader/Loader';
import { Modal } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import StaffCard from './StaffCard';
import AddStaff from '../../component/Admin/AdminSite/AddStaff';
import { Container } from 'react-bootstrap';

export default function Staff(props){

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
    const[loading, setLoading] = useState();
    const[staffs, setStaff] = useState([]);

    function getData( ){
        axios.get("/all-staff").then((response) =>{
            console.log(response.getData)
            setStaff(response.data)
            setLoading(false)
        })
    }


    useEffect(() => {
        getData();

    }, []);

    console.log(staffs)

    return(
        <div>
<br>
</br>
<br>
</br>

<Container>


<h3 className = "heading">Our Team</h3>

<div className = "underline"></div>

{props.user.role === "ADMIN" && <Button onClick={handleShow} className="btn btn-warning btn-md btn-outline-dark">Add Staff</Button>}

    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title>Update Staff</Modal.Title>
								</Modal.Header>
								<Modal.Body>
                                    
<AddStaff  />
                                    
                                    </Modal.Body>
										
								
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>
							

{
    staffs && 
    <CardGroup>
                <Row className='row-cols-1 row-cols-md-3 p-2 g-4'>

                    {staffs.map(staff => (
                        

                        <div key={staff.eventId}>


                            
                            <StaffCard staff={staff} user={props.user} />
                        </div>
                    ))}  

                </Row>

            </CardGroup>
}
</Container>

        </div>
    )
}