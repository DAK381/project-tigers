import axios from '../axios';
import { useEffect, useState } from 'react';
import EventPage from './EventsPage';
import EventCard from './EventCard';
import ScholarshipCard from './ScholarshipCard';
import { Row } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import Scholarship from './Scholarships';
function ScholarshipData() {



    const [scholarships, setScholarships] = useState([]);
    async function getData() {
        axios.get("/scholarship/get-all-scholarship"
        )
            .then(
                (response) => {
                    console.log(response.data)
                    setScholarships(response.data)

                }
            )
    }
    useEffect(() => {
        getData();

    }, []);

    return (
        <div>
            <CardGroup>
                {scholarships.map(scholarship =>
                    <div key={scholarship.scholarshipId}>
                        <ScholarshipCard id={scholarship.scholarshipId} name={scholarship.scholarshipName} desc={scholarship.scholarshipDescription}/>
                    </div>)}
            </CardGroup>




        </div>

    )

}

export default ScholarshipData; 
