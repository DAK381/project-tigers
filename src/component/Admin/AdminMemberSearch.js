import AdminNavigation from "./AdminNavigation";
import { useState } from "react";
import AdminMemberSearchForm from '../Forms/AdminMemberSearchForm'

function AdminMemberSearch(){

   

    return(
        <div>
            
         <AdminNavigation />

        <AdminMemberSearchForm />


        </div>
    )

}

export default AdminMemberSearch;