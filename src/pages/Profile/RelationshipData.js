import axios from "../../axios";
import React, { useState, useEffect, useCallback} from 'react';
import { LoadingSpinner } from "../../component/Loader/Loader";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import RelationshipCard from "./RelationshipCard";


export default function RelationshipData(props){

    const[relationShipData, setData] = useState([]);
    const[loading, setLoading] = useState(true);
    const[dataToBeShown, setShown] = useState([{}]);
    var[relative, setRelative] = useState();

    // async function getData( ){
    //     props.userData.id &&
    //     axios.get(`getallRelationship/${props.userData.id}`
    //         )
    //         .then(
    //             (response) =>
    //             {
    //                      setData(response.data)

    //                     //  relationShipData.map(
    //                     //     (data) =>{
    //                     //        axios.get(`admin/member/${data.relatedTo}`).then(res => {
    //                     //            setRelative(res.data.firstName)

    //                     //        }).catch(err => console.log(err))

    //                     //        data["relative"] = relative;

                               
    //                     //     }
    //                     // )
                         
    //                     setLoading(false)
    //             }
    //         )
    // }
    

    
    useEffect(() => {
        props.userData.id &&
        axios.get(`getallRelationship/${props.userData.id}`
            )
            .then(
                (response) =>
                {
                         setData(response.data)

                       
                         
                        setLoading(false)
                }
            )
             
        }, [props.userData.id]);


return (
    <div>
        {
    loading? <LoadingSpinner />: 
    relationShipData.length === 0? 
    <h2>
        You don't have any relation here.
    </h2>:
    <div>
        You have {relationShipData.length } relations here. 
        {
            relationShipData.map(
                (data) => (
                    <div key = {data.id}>


                    <RelationshipCard data = {data} />

                    </div>
                )
            )
        }
        
        </div>


}

    </div>
)





   
   

       
}