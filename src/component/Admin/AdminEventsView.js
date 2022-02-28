import AdminNavigation from "./AdminNavigation";
import UpcomingEvent from "../../pages/UpcomingEvent";
import { Container } from "react-bootstrap";

function AdminEventView(){

    return(
        <div>
            <AdminNavigation />

            <Container fluid>

            <h1>Active Events</h1>
           
                    <UpcomingEvent />
            

            <h1> Past Events </h1>

                    <UpcomingEvent />

            </Container>

        </div>
    )


}

export default AdminEventView;