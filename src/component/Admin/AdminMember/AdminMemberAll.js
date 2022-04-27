import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";

import AdminMemberList from "./AdminMemberList";


export default function AdminMemberAll(){


    const[data, setData] = useState([]);
    
    async function getData( ){
        axios.get("/admin/allMembers"
            )
            .then(
                (response) =>
                {

                     setData(response.data)
                    //  console.log(data)

                }
            )
    }

    useEffect(() => {
            getData();

        }, [data]);

        console.log(data)


    return(
        <div>

            <AdminMemberList data = {data} />
            
        </div>

    )
}