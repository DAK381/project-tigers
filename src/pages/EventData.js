import axios from '../axios';
import { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Row } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { format, compareAsc, parseISO } from 'date-fns'
import { formatISO } from 'date-fns'


function EventData(props){



    
    const[events, setEvents] = useState([]);
   
    async function getData( ){
        axios.get("/admin/event/all-event").then((response) =>{
            setEvents(response.data)
          
        })
    }
    useEffect(() => {
        getData();

    }, []);

      console.log(events)
      console.log(props.userData)
    return(
        <div>
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