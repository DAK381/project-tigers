import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import DataTable from 'react-data-table-component';
import APIService from '../../services/APIService';
import FirstNameForm from './SearchForm';
import { Card, CardHeader, CardBody, Table } from 'react-bootstrap';
import AdminMemberView from '../Admin/AdminMemberView';
import { Link, useNavigate } from "react-router-dom";
import MemberCard from '../Admin/MemberCard';
import { Row } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap';

function AdminMemberGraduationYear(props) { 

    const[data, setData] = useState([]);
    const[query, setQ] = useState("");
    const[querySubmitted, setQuerySubmissionStatus] = useState(false);

    async function getFilteredData( ){
        axios.get(`admin/member/firstname/${props.name}`
            )
            .then(
                (response) =>
                {
                    console.log(response.data)
                     setData(response.data)
                     //console.log(querySubmitted)

                }
            )
    }

    useEffect(() => {
        if (props.name.trim().length > 0) {
            setQuerySubmissionStatus(true)
            getFilteredData();


        }
      }, [props.name]);

      const showData = () =>{
          if(querySubmitted){
              return(
                  <div>
                      <CardGroup>


            <Row className='row-cols-2 row-cols-md-1 p-9 g-4'>



                {data.map(member => (
                <MemberCard key={member.id} data={member} />


))}  



</Row>

</CardGroup>

                  </div>
              )
              
        
              
              
            //   <MemberCard data = {data} />
          }

      }

      

    return(
        <div>
     
          {showData()}
               


        </div>
    )

}
export default AdminMemberGraduationYear;