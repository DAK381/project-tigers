import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";
import AdminMemberList from "../AdminMember/AdminMemberList";
import { useLocation } from "react-router-dom";
import { LoadingSpinner } from "../../Loader/Loader";
import GuestList from "../AdminGuest/GuestList";
import ShowEmpty from "../ShowEmpty";

export default function AdminMemberRSVP(){

    const location = new useLocation();

    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true)

    const[isEmpty, setEmpty] = useState(true)

   
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
            <ShowEmpty />:
            <AdminMemberList data = {data} />}
         </div>

         
   
 </div>
  }
    
     </div>
)
}