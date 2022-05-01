import axios from '../../axios';
import { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Row } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../../component/Loader/Loader';

function EventData(props){

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

   

    function calendar(){


        console.log(props.userData)

        navigate("/event-calendar", {state:
			{
				events: events,
                userData: props.userData
                

			}
		})

    }


    
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

                <Button onClick = {calendar}>
                Event calendar
            </Button>
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
            

        </div>

    )

}

export default EventData; 