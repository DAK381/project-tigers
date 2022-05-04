import { useNavigate, useLocation } from "react-router-dom";
import Profile from "../../../pages/Profile/Profile";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";

export default function AdminMemberProfile(){

    const navigate = useNavigate();

    const location = useLocation();

    // const userData = location.state.userData;

    const id = location.state.id;

    const[data, setData] = useState({});

    const[isLoading, setLoading] = useState(true)

    async function getData(){
        axios.get(`admin/member/${id}`
            )
            .then(
                (response) =>
                {
                    
                    setData(response.data)
                    setLoading = false;

                    
                }
            )
    }


    useEffect(() => {
            getData();
        }, [id]);


    return(
        <div>

            
                <Profile key={id} userData={data} admin = {true} isLoading = {isLoading}/>

 
        </div>
    )

}
