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
    const[guestEmpty, setGuestEmpty] = useState([]);

    console.log(location.state.event.eventId)

    async function getData(){
        console.log(location.state.event.eventId)
        axios.get(`/admin/event/search/membersByEvent/${location.state.event.eventId}`)
            .then(
                (response) =>
                {
                     setData(response.data)
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
            <span>
                <LoadingSpinner />
                </span>
            :

            isEmpty? <h2>
                    No one is a member of this group yet.
                </h2>
                :
<div>

                <div>
                    <h2>
                        Members who've signed up so far
                    </h2>
                    <AdminMemberList data = {data} guest = {false}/>
                
                </div>

                {/* <div>
                    guestEmpty?
                <h2>
                    No guest has signed up so far
                </h2>

                
                    <div>

                    <GuestList data = {data} />

                    </div>
                    </div> */}

                
            
        </div>    




        }


       
        </div>

    )
}