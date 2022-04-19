import { useNavigate, useLocation } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
export default function AdminMemberProfile(){

    const navigate = useNavigate();

    const location = useLocation();

    const userData = location.state.userData;

    return(
        <div>
            <Profile userData = {userData} admin = {true}/>
        </div>
    )

}
