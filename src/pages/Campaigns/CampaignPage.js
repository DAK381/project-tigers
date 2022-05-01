import CampaignData from './CampaignData';
import { Container } from "react-bootstrap";

function CampaignPage(props){

  return(
    <div>
      
      <Container fluid>
        <CampaignData userData={props.userData}/>
      </Container>
      
    </div>
  )
}

export default CampaignPage;
