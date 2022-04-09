import AdminNavigation from "./AdminNavigation";
import React from "react";
import AdminMemberSearchForm from "../Forms/AdminMemberSearchForm";
import { useState } from "react";

import AdminAllMembers from "./AdminAllMembers";
import { Button } from "react-bootstrap";
import FilteredData from "../Forms/FIlteredData";

function AdminMembers () { 

    // const[filterOff, setFilter] = useState(true);

    // if(filterOff){
    //     return(
    //         <div>
    //              <AdminNavigation />
    //             <FilteredData />
               
    //             <Button onClick={() => setFilter(false)}>Filter Members</Button>
    //             <AdminAllMembers />
                

    //         </div>
    //     )
    // }

    // else{
    //     return(
    //         <div>
                
    //            <Button onClick={() => setFilter(true)}>Show all Members</Button>
                
    //             {/* <AdminMemberSearchForm /> */}
    //         </div>
    //     )
    // }

    return(
        <div>
            <FilteredData />
        </div>

    )


}

export default AdminMembers; 