import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";
import AdminMemberList from "../AdminMember/AdminMemberList";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "../../Loader/Loader";
import GuestList from "../AdminGuest/GuestList";

export default function AdminMemberRSVP(){

    const location = new useLocation();

    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true)

    const[isEmpty, setEmpty] = useState()

   
    console.log(location.state.event.eventId)

    function getData(){
        console.log(location.state.event.eventId)
        axios.get(`/admin/event/search/membersByEvent/${location.state.event.eventId}`)
            .then(
                (response) =>
                {
                    setLoading(true)
                     setData(response.data)
                     console.log(data)
                     if(data.length > 0){
                        setEmpty(false)
                    }

                    setLoading(false)

                    

                }
            )

          

    }

  
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
            {isEmpty?
            <h2> No member has signed up for the event</h2>:
            <AdminMemberList data = {data} />}
         </div>

         
   
 </div>
  }
    
     </div>
)
}