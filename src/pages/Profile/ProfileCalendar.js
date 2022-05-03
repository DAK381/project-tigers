import EventCalendar from "../Events/EventCalendar";
import { useState } from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";


export default function ProfileCalendar(props){
    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    const events = props.events;

    // const[loading, setLoading]= useState(true);

    const dayjs = require('dayjs');
	var customParseFormat = require('dayjs/plugin/customParseFormat')
	dayjs.extend(customParseFormat)

    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

	var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
	dayjs.extend(isSameOrBefore)

   

   const[past, setPast] = useState([]);

   events.map(
    (event) => {
        event["past"] = true;
            if(dayjs().isSameOrBefore(event.eventDate, 'day')){
                event["past"] = false;
            }

            event["remaining"] = dayjs(event.eventDate).fromNow();


            event["added"] = dayjs(event.addedDate).fromNow();
            
    }
)
   



    
    return(
        <div>
          
       
   

                <Button onClick = {handleShow}>
                Event calendar
            </Button>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title>Event Calendar</Modal.Title>
								</Modal.Header>
								<Modal.Body>

                                    <EventCalendar events = {events} user = {props.userData} past = {past} profile = {true}/>
                                    
                                    </Modal.Body>
										
							
								
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>

        </div>

  
    )

}