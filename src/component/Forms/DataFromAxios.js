import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { Card, CardHeader, CardBody, Table, CardGroup } from 'react-bootstrap';
import AdminMemberView from '../Admin/AdminMemberView';
import MemberCard from '../Admin/MemberCard';
import { Row } from 'react-bootstrap';

export default function DataFromAxios(props){

    const[firstData, setFirstData] = useState([]);
    const[lastData, setLastData] = useState([]);
    const[filteredData, setFilteredData] = useState([]);

    async function getFilteredFirstData( ){
        axios.get(`admin/member/firstname/${props.data.firstName}`
            )
            .then(
                (response) =>
                {
                    //console.log(response.data)
                     setFirstData(response.data)
                     //console.log(typeof response.data)

                }
            )
    }


    //console.log(props.data.firstName)

    async function getFilteredLastData( ){
        axios.get(`admin/member/lastname/${props.data.lastName}`
            )
            .then(
                (response) =>
                {
                    //console.log(response.data)
                     setLastData(response.data)
                     //console.log(typeof response.data)

                }
            )
    }


    function getFilteredData(){
        const a = [...firstData, ...lastData]
        setFilteredData(a)
    }

    

    useEffect(() => {
        getFilteredLastData( );
        getFilteredFirstData();
        
        getFilteredData();

        
      }, [props.data]);

    console.log(filteredData)



    return(
        <div>
            <CardGroup>


<Row className='row-cols-2 row-cols-md-1 p-9 g-4'>



    {filteredData.map(member => (
    <MemberCard key={member.id} data={member} />

))}  



</Row>

</CardGroup>



        </div>
    )




    


    
    
}