import AdminNavigation from "./AdminNavigation";
import UpcomingEvent from "../../pages/UpcomingEvent";
import { Container } from "react-bootstrap";
import EventPage from "../../pages/EventsPage";
import EventData from "../../pages/EventData";


function AdminEventView(){

    return(
        <div>

            <Container fluid>


                <EventData admin = {true}/>

            {/* <h1>Active Events</h1>
           
                    <UpcomingEvent />

                   
            

            <h1> Past Events </h1>

                    <UpcomingEvent /> */}



            </Container>

        </div>
    )


}

export default AdminEventView;