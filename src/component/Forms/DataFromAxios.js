import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { Card, CardHeader, CardBody, Table, CardGroup } from 'react-bootstrap';
import AdminMemberView from '../Admin/AdminMemberView';
import MemberCard from '../Admin/MemberCard';
import { Row } from 'react-bootstrap';

export default function DataFromAxios(props){

    const[firstData, setFirstData] = useState([]);
    const[lastData, setLastData] = useState([{}]);

    const[filteredData, setFilteredData] = useState([]);

    const[display, setDisplay] = useState([]);


    async function getFilteredFirstData( ){
        axios.get(`admin/member/firstname/${props.data.firstName}`
            )
            .then(
                (response) =>
                {
                    // console.log(typeof response.data)
                     setFirstData(response.data)
                    // console.log(response.data.firstName)

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
                    //  console.log(typeof response.data.firstName)

                    // if({response.data.firstName} ==== {props.data.firstName})
                    // {
                    //     setLastData(response.data);
                    // }


                }
            )
    }


    const[common, setCommon] = useState([]);

    function getCommonMember(){
        // console.log(firstData)
        // console.log(lastData)



        const firstSession = firstData.map(member => member.id);
        const lastSession = lastData.map(member => member.id);

        console.log(firstSession);
        console.log(lastSession);

        const finalarray = firstSession.filter(value => lastSession.includes(value));



        console.log(finalarray);

        setCommon(finalarray);
         
        

    }


    useEffect(() => {
       
        props.data.lastName.length  > 0 && getFilteredLastData( );
        props.data.firstName.length  > 0 && getFilteredFirstData();
        getCommonMember();


        {common.map(id => (
            getFilteredData(id)
            
            ))} 
            
        console.log(filteredData)

      }, [props.data]);


      async function getFilteredData(id){
        axios.get(`admin/member/${id}`
            )
            .then(
                (response) =>
                {
                    console.log(response.data)

                    
                    setFilteredData((p) =>
                    {
                        return[...p, response.data]
                    })

                    //  console.log(typeof response.data.firstName)
                        
                    // if({response.data.firstName} ==== {props.data.firstName})
                    // {
                    //     setLastData(response.data);
                    // }


                }
            )
    }


    return(
        <div>
            <CardGroup>


<Row className='row-cols-2 row-cols-md-1 p-9 g-4'>



{filteredData.map(member => (
<MemberCard key={member.id} data={member} />

))}  
           



</Row>

</CardGroup>


{/* <ul>
filteredData.map((num) =>
    <li key={num.toString()}>
      {num}
    </li>
    )
</ul> */}



        </div>
    )




    


    
    
}