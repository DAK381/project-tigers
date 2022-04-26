import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'react-bootstrap';

export default function EventCalendar(){

    const location = new useLocation();
    
    const events = location.state.events;

   

    const localizer = momentLocalizer(moment)

    // const allViews = Object
    // .keys(Calendar.Views)
    // .map(k => Calendar.Views[k])

    useEffect(() => {
        
        events.map(
            (event) => {
                event["title"] = event.eventName;
                event["start"] = moment(event.eventDate).toDate();
                event["end"] = moment(event.eventDate).toDate();
            }
        )
    }, [events]);

    const handleSelectEvent = useCallback(
        (event) => window.alert(event.title),
        []
      )

console.log(events)
    return(
        <div>
            <Container>

            

<Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      defaultView={Views.MONTH}
      selectable
      onSelectEvent={handleSelectEvent}

    //   views={allViews}

      style={{ height: 800}}
    />
            
            </Container>

        </div>
    )

}

