import { Container } from "react-bootstrap";
import ScholarshipData from './ScholarshipData';

function Scholarship(){

  return(
    <div>
      <h1>
        Scholarships
      </h1> 
      <Container fluid>
        <ScholarshipData />
      </Container>
    </div>
  )
}
export default Scholarship;
