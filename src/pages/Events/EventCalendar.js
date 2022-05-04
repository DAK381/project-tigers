import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function EventCalendar(props){

    const dayjs = require('dayjs');
    const location = new useLocation();
    var customParseFormat = require('dayjs/plugin/customParseFormat')
	dayjs.extend(customParseFormat)

    const events = props.events;

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const localizer = momentLocalizer(moment)

    const [selectedEvent,setSelectedEvent] = useState({})

    const [selected,setSelected] = useState(false)

    const handleClose = () => setModalIsOpen(false);

    const navigate = useNavigate();

    const [eventList, setEventList] = useState([])
    useEffect(() => {
        
        events.map(
            (event) => {
                event["title"] = event.eventName;
                    var start = dayjs(event.startTime, ["HH.mm"])
	                var end = dayjs(event.endTime, ["HH.mm"])
                    event["start"] = new Date(dayjs(event.eventDate).year(), dayjs(event.eventDate).month(), dayjs(event.eventDate).date(), dayjs(start).get('hour') , dayjs(start).get('minute'))
                    event["end"] = new Date(dayjs(event.eventDate).year(), dayjs(event.eventDate).month(), dayjs(event.eventDate).date(), dayjs(end).hour(), dayjs(end).minute())

                    // console.log(event.eventName, "===", startDay, endDay)

            }
        )
    }, []);

console.log(events)
    const handleSelectEvent  = useCallback((event) => {
        setSelectedEvent(event);
        console.log(event)
        setModalIsOpen(true)
        setSelected(true)
      }, []);

   
     

    function eventSignUp(e){
		
        navigate('/event-signup', {state:
            {
                event: selectedEvent,
                user : props.user,
                past: props.past,
                profile: props.profile

            }
        });
    

}

console.log(events)
    return(
        <div>
            <Container>



<Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
    //   defaultView={Views.MONTH}
      selectable
      onSelectEvent={(e) => handleSelectEvent(e)}

    //   views={allViews}

      style={{ height: 800}}
    />

            </Container>

          {selected &&

                <Modal show={modalIsOpen} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                    <Modal.Title>{selectedEvent.title}</Modal.Title></Modal.Header>

                   {
                       selectedEvent.startTime != null && selectedEvent.endTime != null &&
                   <Modal.Body>Time: {selectedEvent.startTime} - {selectedEvent.endTime}

                    </Modal.Body>} 

                    <Modal.Body>
                        Location: {selectedEvent.eventLocation}
                    </Modal.Body>

                
                    
                    <Modal.Footer>
									<Button variant="secondary" onClick={eventSignUp}>
										More information
									</Button>
					</Modal.Footer>

                </Modal>
          
          } 

        </div>
    )

}

