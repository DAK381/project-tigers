import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';


export default function EventCalendar(props){

    const location = new useLocation();
    
    const events = location.state.events;

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const localizer = momentLocalizer(moment)

    const [selectedEvent,setSelectedEvent] = useState()

    const [selected,setSelected] = useState(false)

    const handleClose = () => setModalIsOpen(false);

    useEffect(() => {
        
        events.map(
            (event) => {
                event["title"] = event.eventName;
                event["start"] = moment(event.eventDate).toDate();
                event["end"] = moment(event.eventDate).toDate();
                
            }
        )
    }, [events]);


    const handleSelectEvent  = useCallback((event) => {
        setSelectedEvent(event);
        console.log(event)
        setModalIsOpen(true)
        setSelected(true)
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
      defaultView={Views.MONTH}
      selectable
      onSelectEvent={(e) => handleSelectEvent(e)}

    //   views={allViews}

      style={{ height: 800}}
    />


            
            </Container>

          {selected &&

                <Modal show={modalIsOpen} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                    <Modal.Title>{selectedEvent.title}</Modal.Title>
                   {
                       selectedEvent.startTime != null && selectedEvent.endTime != null &&
                   <Modal.Body>Time: {selectedEvent.startTime} - {selectedEvent.endTime}
                    </Modal.Body>} 
                </Modal.Header>

                </Modal>
          
          } 

        </div>
    )

}

