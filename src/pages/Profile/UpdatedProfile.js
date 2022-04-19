import { useNavigate, useLocation } from "react-router-dom";
import Profile from "../../pages/Profile/Profile";
export default function UpdatedProfile(){

    const navigate = useNavigate();

    const location = useLocation();

    const userData = location.state.userData;

    function refreshPage() {
        window.location.reload(false);
      }

    return(
        <div>
            <Profile onLoad = {refreshPage} userData = {userData}/>
        </div>
    )

}
