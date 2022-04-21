import { useLocation } from "react-router-dom";

export default function AdminMemberEmail(){
    const location = useLocation();
    const emailRec = location.state.arrayId;






    return(
        <div>

{emailRec.map((email) => (
        <div>{email}</div>
      ))}

        </div>
    )
}