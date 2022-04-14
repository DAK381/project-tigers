import AdminNavigation from "./AdminNavigation";
import UpcomingEvent from "../../pages/UpcomingEvent";
import { Card,  Container } from "react-bootstrap";
import {CardBody} from "reactstrap"
import "./admin-event.css";

function AdminEventView(){

    return(
        <div>
            <Container>



            <AdminNavigation />

            <Container fluid>
            <Card>
                    <CardBody>

            <h1 className="display-5 border-box text-center">Active Events</h1>
           
                    <UpcomingEvent />
            
            <hr></hr>
            <hr></hr>
            </CardBody>
                </Card>
                <br></br>
                <Card>
                    <CardBody>

       
            <h1 className="display-5 border-box text-center"> Past Events </h1>

                    <UpcomingEvent />

            
                    </CardBody>
                </Card>


                </Container>
            </Container>
        </div>
    )


}

export default AdminEventView;