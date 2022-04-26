import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'react-bootstrap';

export default function EventCalendar(){

    const location = new useLocation();
    
    const events = location.state.events;

   

    const localizer = momentLocalizer(moment)



    useEffect(() => {
        
        events.map(
            (event) => {
                event["start"] = moment(event.eventDate);
                event["end"] = moment(event.eventDate)
            }
        )

        // var date = moment(eventInfo.eventDate)

        // var now = moment();

    }, [events]);







console.log(events)
    return(
        <div>
            <Container>

            

<Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
            
            </Container>

        </div>
    )

}

