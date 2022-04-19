import AdminNavigation from "./AdminNavigation";
import React from "react";
import AdminMemberSearchForm from "../Forms/AdminMemberSearchForm";
import { useState } from "react";

import AdminAllMembers from "./AdminAllMembers";
import { Button } from "react-bootstrap";
import FilteredData from "../Forms/FIlteredData";

function AdminMembers () { 


    return(
        <div>
            <FilteredData />
        </div>

    )


}

export default AdminMembers; 