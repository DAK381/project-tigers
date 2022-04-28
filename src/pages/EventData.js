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
          
        })
    }

    // const event = {
    //     eventDate: "2022-02-21",
    //     startTime: "20:30",
    //     endTime: "22:30"
    //   };
      
    //   function getDates({eventDate, startTime, endTime}) {
    //       const dt = eventDate.split('-');
    //     dt[1]--; // fix month
    //     const range= [new Date(...dt, ...startTime.split(':'), 0), new Date(...dt, ...endTime.split(':'), 0)];
    //   }
      
    //   console.log(getDates(event));

    events.map(
        (event) => {
            event["past"] = true;
                if(dayjs().isSameOrBefore(event.eventDate, 'day')){
                    event["past"] = false;
                }

                
                event["remaining"] = dayjs(event.eventDate).fromNow();


                event["added"] = dayjs(event.addedDate).fromNow();

                if(event.evenDate!== null && event.startTime!== null && event.endTime!== null)
                {
                    console.log(event.eventName, "...", event.eventDate , event.startTime, event.endTime)
                 console.log("there's some")
                //  const dt = event.eventDate.split('-');
                //  console.log("now?")
                // dt[1]--;
                // const start = new Date(dt,event.startTime.split(':'), 0 )
                // event["start"] = start;
                // event["end"] = new Date(dt,event.endTime.split(':'), 0 )
                // console.log(event.start.toString())

                    
                }
                // const dt = event.eventDate.split('-');
                // dt[1]--; // fix month
                // const range= [new Date(...dt, ...event.startTime.split(':'), 0), new Date(...dt, ...event.endTime.split(':'), 0)];
                // event["range"] = range;
                // }

                // event.range.map(
                //     (time) => {
                        

                //     }
                // )
                
                
        }
    )
    
    useEffect(() => {
        getData();


    }, []);

    console.log(events)
    const navigate = new useNavigate();

   

    function calendar(){

        
        navigate("/event-calendar", {state:
			{
				events: events,
                user: props.userData

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