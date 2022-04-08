import React from "react";
import { useState } from "react";
import { Nav } from 'react-bootstrap';
import AdminMemberView from "./AdminMemberView"; 
import axios from '../../axios';
import { useEffect} from "react";

function AdminAllMembers () { 

    const[data, setData] = useState([]);
    async function getData( ){
        axios.get("/admin/allMembers"
            )
            .then(
                (response) =>
                {
                    console.log(response.data)
                     setData(response.data)

                }
            )
    }
    useEffect(() => {
            getData();
        }, []);

        return(
            <div>
                
    
               <AdminMemberView data = {data} />  
            </div>
        )
        
}

export default AdminAllMembers; 