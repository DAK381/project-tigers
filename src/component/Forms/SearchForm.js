import React, { useState } from "react";
 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { render } from "react-dom";
import AdminMemberView from "../Admin/AdminMemberView";

function FirstNameForm({queryGiven, queryStatus, data}){

const[query, setQ] = useState("");
    const[querySubmitted, setQuerySubmissionStatus] = useState(false);
    

    function submitForm(e){
        e.preventDefault();
        console.log(query);
        setQuerySubmissionStatus(true)
        queryGiven(query);
        return(
            <AdminMemberView data = {data} />
        )
    }

  

    return(
        <div>

            <form onSubmit = {submitForm}>
            <input type = "text" value = {query} name = "query" onChange={(e) => setQ(e.target.value)}/>
 
            <button type = "submit">Submit</button>

            </form>

        </div>
    )

}

export default FirstNameForm;