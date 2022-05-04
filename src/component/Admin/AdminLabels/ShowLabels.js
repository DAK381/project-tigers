import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import LabelList from "./LabelList";
import { LoadingSpinner } from "../../Loader/Loader";
export default function ShowLabels(){


    const location = useLocation();

    const[loading, setLoading] = useState(true);

    
   
    const[data, setData] = useState([]);
    
    function getData( ){
        axios.get("/search/allPresets"
            )
            .then(
                (response) =>
                {

                     setData(response.data)                      

                }
            )
    }

    console.log(data)

    
    

    
    useEffect(() => {
            getData();
            setLoading(false)

        }, []);



console.log(location.state)

    if(location.state)
{
    return (
        loading?
        <LoadingSpinner />:

    <LabelList data = {data} userInfo = {location.state.arrayId}/>
    )
}

else{
    return (
        loading?
        <LoadingSpinner />:
        <LabelList data = {data}/>
        )
} 

// return(
//     <AdminGroupSearch data = {data}  />
// )

    
}
