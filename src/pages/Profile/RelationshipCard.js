import axios from "../../axios";
import React, { useState, useEffect, useCallback} from 'react';
import { LoadingSpinner } from "../../component/Loader/Loader";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function RelationshipCard(props){

    // const[relationShipData, setData] = useState();
    // const[loading, setLoading] = useState(true);

    // console.log(props.id)

    // async function getData( ){
    //     props.id &&
    //     axios.get(`getallRelationship/${props.id}`
    //         )
    //         .then(
    //             (response) =>
    //             {
    
    //                  setData(response)
    //                  setLoading(false)
    //                  console.log(relationShipData)
    
    //             }
    //         )
    // }
    
    
    
    
    // useEffect(() => {
    //         getData();
    
    //     }, [props.id]);

    const relationshipData = props.data;
    console.log(relationshipData)



   return(
       <div>
           HIIIII
           
       </div>
   )


       
}