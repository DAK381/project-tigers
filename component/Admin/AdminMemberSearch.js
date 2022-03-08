import AdminNavigation from "./AdminNavigation";
import { useState } from "react";

function AdminMemberSearch(){

    const [searchedParameter, setSearch] = useState([
        {username: '',
        graduationYear: '',
        club: ''
    }

    
  
    ])

    return(
        <div>
            
         <AdminNavigation />

        </div>
    )

}

export default AdminMemberSearch;