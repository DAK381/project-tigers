import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";
import AdminGroupSearch from "./AdminGroupSearch";
import { useLocation } from "react-router-dom";

export default function AdminAllGroup(){


    const location = useLocation();

    
   
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

        }, []);



console.log(location.state)

    if(location.state)
{
    return (
    <AdminGroupSearch data = {data} userInfo = {location.state.arrayId}/>
    )
}

else{
    return (
        <AdminGroupSearch data = {data}/>
        )
} 

// return(
//     <AdminGroupSearch data = {data}  />
// )

    
}


