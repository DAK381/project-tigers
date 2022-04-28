import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';


export default function EventCalendar(props){

    const dayjs = require('dayjs');
    const location = new useLocation();
    var customParseFormat = require('dayjs/plugin/customParseFormat')
	dayjs.extend(customParseFormat)
    const events = location.state.events;

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const localizer = momentLocalizer(moment)

    const [selectedEvent,setSelectedEvent] = useState()

    const [selected,setSelected] = useState(false)

    const handleClose = () => setModalIsOpen(false);

    const [eventList, setEventList] = useState([])
    useEffect(() => {
        
        events.map(
            (event) => {
                event["title"] = event.eventName;

               

                    var start = dayjs(event.startTime, ["HH.mm"])
	                var end = dayjs(event.endTime, ["HH.mm"])

                    // let startMonth = dayjs(event.date).month()
                    // let startYear = dayjs(event.date).year()
                    // let startDay = dayjs(event.date).day()
                    // let  startHour = dayjs(start).get('hour');
                    // let startMinute = dayjs(start).get('minute');

                    // // console.log(event.eventName, " ...", startYear, startDay, startMonth, startHour, startMinute)

                    // let endMonth = dayjs(event.date).month()
                    // let endYear = dayjs(event.date).year()
                    // let endDay = dayjs(event.date).date()
                    // let endHour = dayjs(end).hour();
                    // let endMinute = dayjs(end).minute();

                    

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
    //   defaultView={Views.MONTH}
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

