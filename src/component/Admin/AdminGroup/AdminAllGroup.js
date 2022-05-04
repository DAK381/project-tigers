import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";
import AdminGroupSearch from "./AdminGroupSearch";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "../../Loader/Loader";

export default function AdminAllGroup(){


    const location = useLocation();

    
   const[loading, setLoading] = useState(true);
    const[data, setData] = useState([]);
    
    async function getData( ){
        axios.get("/search/allgroup"
            )
            .then(
                (response) =>
                {

                     setData(response.data)
                     setLoading(false)
                      

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
        <div>
             {
            loading?
            <LoadingSpinner />:
            <AdminGroupSearch data = {data} userInfo = {location.state.arrayId}/>
        }

        </div>
       
    
    )
}

else{
    return (
        <div>
             {
            loading?
            <LoadingSpinner />:
            <AdminGroupSearch data = {data}/>
             }
        </div>
        
        )
} 

// return(
//     <AdminGroupSearch data = {data}  />
// )

    
}


