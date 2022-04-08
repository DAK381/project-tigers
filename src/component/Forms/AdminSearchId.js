import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import DataTable from 'react-data-table-component';
import APIService from '../../services/APIService';
import FirstNameForm from './SearchForm';
import { Card, CardHeader, CardBody, Table } from 'react-bootstrap';
import AdminMemberView from '../Admin/AdminMemberView';


function AdminMemberSearchFirstName () { 

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
        axios.get(`admin/member/${query}`
            )
            .then(
                (response) =>
                {

                    let arrayData = [];
 
                    for (var i in response.data){
                    arrayData.push(
                   {name: i,
                   value: response.data[i]}
               )
           }
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
            <h3>
                Search by id
            </h3>

            <FirstNameForm queryGiven = {queryGiven} queryStatus={queryStatus} data = {data}/>


          {showData()}
               
           {/* <AdminMemberView data = {data} />  */}
         

            

                

           

        </div>
    )

}

export default AdminMemberSearchFirstName;
