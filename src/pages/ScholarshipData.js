import axios from '../axios';
import { useEffect, useState } from 'react';
import EventPage from './EventsPage';
import EventCard from './EventCard';
import { Row } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
function ScholarshipData(){



    const[data, setData] = useState([]);
    async function getData( ){
        axios.get("/admin/allMembers"
            )
            .then(
                (response) =>
                {
                    console.log(response.data)
                     setData(response.data)

                }
            )
    }
    useEffect(() => {
            getData();

      }, []);

    return(
        <div>
            <CardGroup>


            <Row className='row-cols-1 row-cols-md-3 p-2 g-4'>



            {data.map(event => (
            <EventCard key={event.id} data={event} />




          ))}  





            </Row>

            </CardGroup>




        </div>

    )

}

export default ScholarshipData; 