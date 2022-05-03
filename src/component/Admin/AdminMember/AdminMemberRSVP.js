import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";
import AdminMemberList from "./AdminMemberList";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "../../Loader/Loader";
import GuestList from "../AdminGuest/GuestList";

export default function AdminMemberRSVP(){

    const location = new useLocation();
    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true)
    const[isEmpty, setEmpty] = useState(true)

    const[guestData, setGuest] = useState([]);
    const[guestEmpty, setGuestEmpty] = useState(true);

    console.log(location.state.event.eventId)

    async function getData(){
        console.log(location.state.event.eventId)
        axios.get(`/admin/event/search/membersByEvent/${location.state.event.eventId}`)
            .then(
                (response) =>
                {
                     setData(response.data)
                     console.log(data)
                     if(data.length > 0){
                        setEmpty(false)
                    }

                }
            )

            axios.get(`/search/guestByEvent/${location.state.event.eventId}`)
            .then(
                (response) =>
                {
                    setGuest(response.data)
                    console.log(guestData)
                     if(guestData.length > 0){
                        setGuestEmpty(false)
                    }

                }
            )
    }

    useEffect(() => {
            getData();
            setLoading(false)
        }, [location.state]);


    return(
        <div>

        

       {
           loading?
           <LoadingSpinner />:
<div>
           <div>
               {isEmpty?
               <h2> No member has signed up for the event</h2>:
               <AdminMemberList data = {data} />}
            </div>
<br></br><br></br><br></br>
            <div>
               {guestEmpty?
               <h2> No one has signed up as a guest</h2>:
               <GuestList data = {data} />}
            </div>
      
    </div>
     }
       
        </div>

    )
}