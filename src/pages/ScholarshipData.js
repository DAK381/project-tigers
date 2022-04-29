import axios from '../axios';
import { useEffect, useState } from 'react';
import ScholarshipCard from './ScholarshipCard';
import { Row } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';


function ScholarshipData(props) {

    const dayjs = require('dayjs');
	var customParseFormat = require('dayjs/plugin/customParseFormat')
	dayjs.extend(customParseFormat)

    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

	var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
	dayjs.extend(isSameOrBefore)


    const [scholarships, setScholarships] = useState([]);
    async function getData() {
        axios.get("/scholarship/get-all-scholarship").then((response) => {
            setScholarships(response.data)
        })
    }

    scholarships.map(
        (scholarship) => {
            scholarship["past"] = true;
                if(dayjs().isSameOrBefore(scholarship.eventDate, 'day')){
                    scholarship["past"] = false;
                }
                
                scholarship["remaining"] = dayjs(scholarship.deadline).fromNow();
                scholarship["added"] = dayjs(scholarship.addedDate).fromNow();

                
        }
    )

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <CardGroup>
                <Row className='row-cols-1 row-cols-md-3 p-2 g-4'>

                    {scholarships.map(scholarship => (
                        <div key={scholarship.scholarshipId}>
                            <ScholarshipCard scholarship={scholarship} admin = {props.admin}/>
                        </div>
                    ))}

                </Row>

            </CardGroup>

        </div>

    )

}

export default ScholarshipData; 