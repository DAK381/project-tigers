import React, { useState } from "react";
 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { render } from "react-dom";
import AdminMemberView from "../Admin/AdminMemberView";
import AdminMemberSearchFirstName from "./AdminMemberSearchFirstName";
import { Link } from "react-router-dom";

function FirstNameForm({queryGiven, queryStatus}){

const[query, setQ] = useState("");
    const[querySubmitted, setQuerySubmissionStatus] = useState(false);
    const[data, setData] = useState([]);

    function submitForm(e){
        e.preventDefault();
        console.log(query);
        setQuerySubmissionStatus(true)
        queryGiven(query);
        setData(data);
        
        
    }

    

    return(
        <div>

            {/* <AdminMemberSearchFirstName dataToShow = {dataToShow} /> */}

            <form onSubmit = {submitForm}>
            <input type = "text" value = {query} name = "query" onChange={(e) => setQ(e.target.value)}/>
 
            <button type="submit">
                Submit </button>


            </form>

        </div>
    )

}

export default FirstNameForm;