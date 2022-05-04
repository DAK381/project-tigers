import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";
import AdminMemberList from "../AdminMember/AdminMemberList";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "../../Loader/Loader";
import GuestList from "../AdminGuest/GuestList";

export default function GuestRSVP(){

    const location = new useLocation();

   
    const[loading, setLoading] = useState(true)

   
    const[guestData, setGuest] = useState([]);
    const[guestEmpty, setGuestEmpty] = useState();

    console.log(location.state.event.eventId)

    function getData(){
            axios.get(`admin/event/search/guestByEvent/${location.state.event.eventId}`)
            .then(
                (response) =>
                {
                    setLoading(true)
                    setGuest(response.data)
                     if(guestData.length > 0){
                        setGuestEmpty(false)
                    }

                    setLoading(false)

                }
            )

    }

    console.log(guestData)

    useEffect(() => {
            
        getData()
            
        }, []);


return(
    <div>

    {
        loading?
        <LoadingSpinner />:
<div>
        
         <div>
            {guestEmpty?
            <h2> No one has signed up as a guest</h2>:
            <GuestList data = {guestData} />}
         </div>
   
 </div>
  }
    
     </div>
)
}