import axios from '../axios';
import { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Row } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { format, compareAsc, parseISO } from 'date-fns'
import { formatISO } from 'date-fns'


function EventData(props){



    const[events, setEvents] = useState([]);
    const[formattedDate, setDate] = useState('');
    async function getData( ){
        axios.get("/admin/event/all-event").then((response) =>{
            setEvents(response.data)
            const formattedDate = formatISO(parseISO(props.date), { representation: 'date' })
            setDate(formattedDate)
        })
    }
    useEffect(() => {
        getData();
        

    }, []);

      console.log(events)
    return(
        <div>
            <CardGroup>
                <Row className='row-cols-1 row-cols-md-3 p-2 g-4'>

                    {events.map(event => (
                        <div key={event.eventId}>
                            <EventCard id={event.eventId} name={event.eventName} desc={event.eventDescription} date = {event.eventDate} 
                            eventLocation = {event.eventLocation} payment = {event.paymentAmount}
                            formattedDate = {formattedDate} admin = {props.admin}/>
                        </div>
                    ))}  

                </Row>

            </CardGroup>

        </div>

    )

}

export default EventData; 