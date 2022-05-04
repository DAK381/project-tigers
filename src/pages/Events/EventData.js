import axios from '../../axios';
import { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Container, Row, Col } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../../component/Loader/Loader';
import { Modal } from 'react-bootstrap';
import EventCalendar from './EventCalendar';






function EventData(props){

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    const[events, setEvents] = useState([]);

    const[loading, setLoading]= useState(true);

    const dayjs = require('dayjs');
	var customParseFormat = require('dayjs/plugin/customParseFormat')
	dayjs.extend(customParseFormat)

    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

	var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
	dayjs.extend(isSameOrBefore)

   

   const[past, setPast] = useState([]);

    async function getData( ){
        axios.get("/admin/event/all-event").then((response) =>{
            setEvents(response.data)
            setLoading(false)
        })
    }


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
    
    useEffect(() => {
        getData();


    }, []);

    console.log(events)
    console.log(props.userData)
    const navigate = new useNavigate();



    
    return(
        <div>
            {
                loading? 
                <LoadingSpinner />
 
 :
<div>
<h1>
        Events
       
      </h1>

                <Button onClick = {handleShow}>
                Event calendar
            </Button>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									<Modal.Title>Event Calendar</Modal.Title>
								</Modal.Header>
								<Modal.Body>

                                    <EventCalendar events = {events} user = {props.userData} past = {past}/>
                                    
                                    </Modal.Body>
										
							
								
								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Close
									</Button>
								</Modal.Footer>
							</Modal>











            <CardGroup>
                <Row className='row-cols-1 row-cols-md-3 p-2 g-4'>

                    {events.map(event => (
                        

                        <div key={event.eventId}>


                            
                            <EventCard event={event} userData={props.userData} />
                        </div>
                    ))}  

                </Row>

            </CardGroup>
            
            
            </div>

            }
            
            <hr/>

        </div>
                


    )

}

export default EventData; 