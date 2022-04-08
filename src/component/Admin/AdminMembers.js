import AdminNavigation from "./AdminNavigation";
import React from "react";
import AdminMemberSearchForm from "../Forms/AdminMemberSearchForm";
import { useState } from "react";

import AdminAllMembers from "./AdminAllMembers";
import { Button } from "react-bootstrap";


function AdminMembers () { 

    const[filterOff, setFilter] = useState(true);

    if(filterOff){
        return(
            <div>
                <AdminNavigation />
                <Button onClick={() => setFilter(false)}>Filter Members</Button>
                <AdminAllMembers />
                

            </div>
        )
    }

    else{
        return(
            <div>
                <AdminNavigation />
                <AdminMemberSearchForm />
            <Button onClick={() => setFilter(true)}>Show all Members</Button>
            </div>
        )
    }


}

export default AdminMembers; 