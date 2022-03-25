import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import DataTable from 'react-data-table-component';
import FirstNameForm from './SearchForm';
import { Card, CardHeader, CardBody, Table } from 'react-bootstrap';
import AdminMemberView from '../Admin/AdminMemberView';
import { Link, useNavigate } from "react-router-dom";


function AdminMemberSearchFirstName ({dataToShow}) { 

    const[data, setData] = useState([]);
    const[query, setQ] = useState("");
    const[querySubmitted, setQuerySubmissionStatus] = useState(false);

    function queryGiven(query){
        setQ(query)
    }

    function queryStatus(){
        setQuerySubmissionStatus(true)
    }

    async function getFilteredData( ){
        axios.get(`admin/member/firstname/${query}`
            )
            .then(
                (response) =>
                {
                    console.log(response.data)
                     setData(response.data)
                     console.log(querySubmitted)

                }
            )
    }

    useEffect(() => {
        if (query.trim().length > 0) {
            setQuerySubmissionStatus(true)
            getFilteredData();


        }
      }, [query]);

      const showData = () =>{
          if(querySubmitted){
              return <AdminMemberView data = {data} />
          }

      }

      

    return(
        <div>
            <h4>
                Search by first name
            </h4>

            <FirstNameForm queryGiven = {queryGiven} queryStatus={queryStatus} data = {data}/>


          {showData()}
               


        </div>
    )

}

export default AdminMemberSearchFirstName;
