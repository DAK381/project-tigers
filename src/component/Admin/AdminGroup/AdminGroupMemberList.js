import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../../../axios';
import AdminMemberList from "../AdminMember/AdminMemberList"
import { LoadingSpinner } from "../../Loader/Loader";


export default function AdminGroupMemberList(){

    const location = new useLocation();
    const id = location.state.id;

    const groupName = location.state.name;
    const groupYear = location.state.year;
    const[data, setData] = useState([]);

    const [isLoading, setLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState()
    


    async function getData( ){
        axios.get(`/search/membersByGroup/${id}`)
            .then(
                (response) =>
                {
                    setLoading(true)
                    setData(response.data)
                    if(data.length > 0){
                        setIsEmpty(false)
                    }

                    setLoading(false)
                }
            )
    }
    
console.log(data)
    
useEffect(() => {
            getData();
           

        }, []);

        console.log(isLoading)
        console.log(isEmpty)
    // )
    
    // if(data.length >0){
    //     return (
    //         <AdminMemberList data = {data} />
    //     )
    // }

    // else{
    //     return (
    //         <h1> No one here</h1>
    //     )
    // }

    return(
        <div>

        {
            isLoading?
            <h2>
                <LoadingSpinner />
            </h2>
            
            :
            
                isEmpty? <h2>
                    No one is a member of this group yet.
                </h2>
                :

                <div>
                    <AdminMemberList data = {data} />
                
                </div>
                
            

        }


            

        </div>
    )
}