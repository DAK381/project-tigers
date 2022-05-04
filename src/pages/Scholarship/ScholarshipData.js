import axios from '../../axios';
import { useEffect, useState } from 'react';
import ScholarshipCard from './ScholarshipCard';
import { Container, Row } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';
import { LoadingSpinner } from '../../component/Loader/Loader';

function ScholarshipData(props) {

    const dayjs = require('dayjs');
	var customParseFormat = require('dayjs/plugin/customParseFormat')
	dayjs.extend(customParseFormat)

    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

	var isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
	dayjs.extend(isSameOrBefore)


    const [scholarships, setScholarships] = useState([]);
    const[loading, setLoading]= useState(true);


    async function getData() {
        axios.get("/scholarship/get-all-scholarship").then((response) => {
            setScholarships(response.data)
            setLoading(false)
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

{
            loading?
            <LoadingSpinner />
            :



        
        <div>
<br/>
<h1>
    <Container>
        Scholarships
        <hr/>

        </Container>
      </h1> 
      <br/>
        <Container>
            <CardGroup>
                <Row className='row-cols-1 row-cols-md-3 p-2 g-4'>

                    {scholarships.map(scholarship => (
                        <div key={scholarship.scholarshipId}>
                            <ScholarshipCard scholarship={scholarship} userData={props.userData}/>
                        </div>
                    ))}

                </Row>

            </CardGroup>
         </Container>

        </div>

        }

        </div>

        

    )

}

export default ScholarshipData; 