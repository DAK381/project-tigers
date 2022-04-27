import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../../../axios';
import AdminMemberList from "../AdminMember/AdminMemberList"

export default function AdminGroupMemberList(){

    const location = new useLocation();
    const id = location.state.id;

    const groupName = location.state.name;
    const groupYear = location.state.year;
    const[data, setData] = useState([]);

    async function getData( ){
        axios.get(`/search/membersByGroup/${id}`)
            .then(
                (response) =>
                {
                    //console.log(response.data)
                    setData(response.data)
              

                }
            )
    }
    
console.log(data)
    
useEffect(() => {
            getData();

        }, []);

       


    // return(
        
    //     data.length === 0 ?
    //     <div>

    //         <h1>
    //         No members are in the group yet!
    //         </h1>
            
    //     </div>  :
    //     <div>
    //         <h4> Members who are/involved in {groupName}, {groupYear}</h4>

    //         <AdminMemberList data = {data} />
    //     </div>

        
        

        
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