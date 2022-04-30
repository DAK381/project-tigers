import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../../../axios';
import AdminMemberList from "../AdminMember/AdminMemberList"

export default function LabelMembers(){

    const location = new useLocation();
    const id = location.state.id;

    const labelName = location.state.name;
    const labelCreated = location.state.year;
    const[data, setData] = useState([]);

    async function getData( ){
        axios.get(`/search/membersByPreset/${id}`)
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

        }, [id]);

        
    // )
    if(data.length >0){
        return (
            <AdminMemberList data = {data} />
        )
    }

    else{
        return (
            <h1> No one here</h1>
        )
    }

}