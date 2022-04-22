import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";
import AdminMemberList from "./AdminMemberList";
import { useLocation } from "react-router-dom";

export default function AdminMemberRSVP(){

    const location = new useLocation();
    const[data, setData] = useState([]);

    console.log(location.state.event.eventId)

    async function getData( ){
        console.log(location.state.event.eventId)
        axios.get(`/admin/event/search/membersByEvent/${location.state.event.eventId}`)
            .then(
                (response) =>
                {
                     setData(response.data)

                }
            )
    }

    useEffect(() => {
            getData();
        }, [location.state]);


    return(
        <div>
            <h1>
                List of members hwo've signed up for {location.state.event.eventName}
            </h1>


            
        
            <AdminMemberList data = {data} />
            
            
        </div>

    )
}