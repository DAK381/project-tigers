import { Container, Card } from "react-bootstrap"
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import UpdateAbout from "./UpdateAbout";

export default function AboutContainer(props){

    const user = props.user;
    console.log(user)

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    return(
        <div>


<Container>


            <h1>
                About us
            </h1>
            {
               user && user.role === "ADMIN"  && 
               <div>

               
               <Button onClick={handleShow} className="btn btn-warning btn-lg btn-outline-dark">Update About Us</Button>
               <br>
               </br><br>
               </br>
               </div> 


            }


<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title>Update About Us</Modal.Title>
								</Modal.Header>
								<Modal.Body>

<UpdateAbout about = {props.data} />

				</Modal.Body>
										
								{/* <Modal.Body>{formattedDate}</Modal.Body> */}
								
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
				
                			</Modal>
            <Card>
           
        
<Container>
    
{props.data}


</Container>
            
          
          

            </Card>
           

            </Container>
        </div>
    )
}