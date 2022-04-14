import axios from '../axios';
import { useEffect, useState } from 'react';
import ScholarshipCard from './ScholarshipCard';
import { Row } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';


function ScholarshipData(props) {



    const [scholarships, setScholarships] = useState([]);
    async function getData() {
        axios.get("/scholarship/get-all-scholarship").then((response) => {
            setScholarships(response.data)
        })
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <CardGroup>
                <Row className='row-cols-1 row-cols-md-3 p-2 g-4'>

                    {scholarships.map(scholarship => (
                        <div key={scholarship.scholarshipId}>
                            <ScholarshipCard id={scholarship.scholarshipId} name={scholarship.scholarshipName} desc={scholarship.scholarshipDescription} admin = {props.admin}/>
                        </div>
                    ))}

                </Row>

            </CardGroup>

        </div>

    )

}

export default ScholarshipData; 