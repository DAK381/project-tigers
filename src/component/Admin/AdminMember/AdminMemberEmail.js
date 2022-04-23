import { useLocation } from "react-router-dom";
import axios from '../../../axios';
import { useState, useEffect } from "react";

export default function AdminMemberEmail(){
    const location = useLocation();
    const emails = location.state.arrayId;
    

    return(
        <div>

{emails.map((email) => (
        <div>{email}</div>
      ))}
      

        </div>
    )
}