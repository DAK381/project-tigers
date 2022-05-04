import { Container } from "react-bootstrap";
import ScholarshipData from './ScholarshipData';

function Scholarship(props){

  return(
    <div>
      
      <Container fluid>
        <ScholarshipData userData={props.userData}/>
      </Container>
    </div>
  )
}
export default Scholarship;
