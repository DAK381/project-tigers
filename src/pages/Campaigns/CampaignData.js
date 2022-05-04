import axios from '../../axios';
import { useEffect, useState } from 'react';
import CampaignCard from './CampaignCard';
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


    const [campaigns, setCampaigns] = useState([]);
    const[loading, setLoading]= useState(true);


    async function getData() {
        axios.get("/campaign/get-campaigns").then((response) => {
            setCampaigns(response.data)
            setLoading(false)
        })
    }

    campaigns.map(
        (campaign) => {
            campaign["past"] = true;
                if(dayjs().isSameOrBefore(campaign.eventDate, 'day')){
                    campaign["past"] = false;
                }
                
                campaign["remaining"] = dayjs(campaign.deadline).fromNow();
                campaign["added"] = dayjs(campaign.addedDate).fromNow();

                
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
        Campaigns
        <hr/>

        </Container>
      </h1> 
      <Container>
      <br/>

            <CardGroup>
                <Row className='row-cols-3 row-cols-sm-9 p-6 g-4'>

                    {campaigns.map(campaign => (
                        <div key={campaign.campaignId}>
                            <CampaignCard campaign={campaign} userData={props.userData}/>
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