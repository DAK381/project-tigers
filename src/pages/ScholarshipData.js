import axios from '../axios';
import { useEffect, useState } from 'react';
import EventPage from './EventsPage';
import EventCard from './EventCard';
import ScholarshipCard from './ScholarshipCard';
import { Row } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import Scholarship from './Scholarships';
function ScholarshipData() {



    const [data, setData] = useState([]);
    async function getData() {
        axios.get("/get-all-scholarship"
        )
            .then(
                (response) => {
                    console.log(response.data)
                    setData(response.data)

                }
            )
    }
    useEffect(() => {
        getData();

    }, []);

    return (
        <div>
            <CardGroup>


                



                    
                        <ScholarshipCard key={Scholarship.id} data={Scholarship} />

                    


                    




            </CardGroup>




        </div>

    )

}

export default ScholarshipData; 
