import AdminNavigation from "./AdminNavigation";
import UpcomingEvent from "../../pages/UpcomingEvent";
import { Container } from "react-bootstrap";

import AdminEventAddForm from "../Forms/AdminEventAddForm";

function AdminEventAdd(){

    return(
        <div>
            <AdminNavigation />

           
            <AdminEventAddForm />
            
            


        </div>
    )


}

export default AdminEventAdd;