import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";

import AdminMemberList from "./AdminMemberList";
import { LoadingSpinner } from "../../Loader/Loader";

export default function AdminMemberAll(){



    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true)

    const[isEmpty, setEmpty] = useState()

    function getData( ){
        axios.get("/admin/allMembers"
            )
            .then(
                (response) =>
                {

                     setData(response.data)

                     if(data.length > 0){
                         setEmpty(false)
                     }
                    
                    setLoading(false)

                }
            )
    }

    useEffect(() => {
            getData();

        }, []);

        console.log(data)


        return(
            <div>
        
                
        
            {
                loading?
                <LoadingSpinner />:
        <div>
                <div>
                    {isEmpty?
                    <h2> No members in the system yet.</h2>:
                    <AdminMemberList data = {data} />}
                 </div>
        
                 
           
         </div>
          }
            
             </div>
        )
        }