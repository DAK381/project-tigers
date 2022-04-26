import axios from '../axios';
import { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Row } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function EventData(props){



    
    
    const[events, setEvents] = useState([]);
    const[activeEvents, setActive] = useState([]);
    const[pastEvents, setPast] = useState([]);

   
    async function getData( ){
        axios.get("/admin/event/all-event").then((response) =>{
            setEvents(response.data)
          
        })
    }
    useEffect(() => {
        getData();

        // var date = moment(eventInfo.eventDate)

        // var now = moment();

    }, []);

    
    const navigate = new useNavigate();

    // console.log(events)

    function calendar(){

        
        navigate("/event-calendar", {state:
			{
				events: events

			}
		})

    }


    
    return(
        <div>
            <Button onClick = {calendar}>
                Event calendar
            </Button>
            <CardGroup>
                <Row className='row-cols-1 row-cols-md-3 p-2 g-4'>

                    {events.map(event => (

                        <div key={event.eventId}>
                            
                            <EventCard event={event} userData = {props.userData} admin = {props.admin}/>
                        </div>
                    ))}  

                </Row>

            </CardGroup>

        </div>

    )

}

export default EventData; 