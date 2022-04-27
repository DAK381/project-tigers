import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";
import AdminGroupSearch from "./AdminGroupSearch";


export default function AdminAllGroup(){


    const[data, setData] = useState([]);
    
    async function getData( ){
        axios.get("/search/allgroup"
            )
            .then(
                (response) =>
                {

                     setData(response.data)
                      

                }
            )
    }

    

    
    

    
    useEffect(() => {
            getData();

        }, [data]);




    return(
        <div>

            <AdminGroupSearch data = {data} />
            
        </div>

    )
}


