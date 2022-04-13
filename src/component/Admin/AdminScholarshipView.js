import AdminNavigation from "./AdminNavigation";
import UpcomingEvent from "../../pages/UpcomingEvent";
import { Container } from "react-bootstrap";
import ScholarshipData from "../../pages/ScholarshipData";


function AdminScholarshipView(){

    return(
        <div>
            <AdminNavigation />

            <Container fluid>


                <ScholarshipData admin = {true}/>

            {/* <h1>Active Events</h1>
           
                    <UpcomingEvent />

                   
            

            <h1> Past Events </h1>

                    <UpcomingEvent /> */}



            </Container>

        </div>
    )


}

export default AdminScholarshipView;