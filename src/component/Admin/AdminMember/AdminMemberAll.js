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

            for (var i = 0; i < data.length; i++) {
                const user = data[i];
                var groupList = "";
                for(var j = 0; j < user.test.length; j ++)
                {
                    var group = user.test[j];
                    groupList += group.groupName + " "
                    
                }
        
                console.log(user.firstName + " " + groupList)
                user["groupList"] = groupList;
        
            } 

            setData(data)

        }, [data]);

        console.log(data)


    return(
        <div>

            <AdminMemberList data = {data} />
            
        </div>

    )
}