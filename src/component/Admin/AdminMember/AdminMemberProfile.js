import { useNavigate, useLocation } from "react-router-dom";
import Profile from "../../../pages/Profile/Profile";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";

export default function AdminMemberProfile(){

    const navigate = useNavigate();

    const location = useLocation();

    const userData = location.state.userData;

    const id = location.state.id;

    const[data, setData] = useState({});

    async function getData(){
        axios.get(`admin/member/${id}`
            )
            .then(
                (response) =>
                {
                    console.log(typeof response.data)
                    console.log(response.data)
                    setData(response.data)
                    console.log(typeof data)
                    

//                     var arr = [];
//                     for (id in response.data) {    
//                     arr.push(Object.assign(response.data[id], {name: id}));
                    
// }
                }


                
            )
    }


    useEffect(() => {
            getData();
        }, [id]);


    return(
        <div>

            
                <Profile key={id} userData={data} />

 
        </div>
    )

}
