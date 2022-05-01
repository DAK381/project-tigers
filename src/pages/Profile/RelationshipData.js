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

    async function getData( ){
        props.id &&
        axios.get(`getallRelationship/${props.id}`
            )
            .then(
                (response) =>
                {
                         setData(response.data)

                         relationShipData.map(
                            (data) =>{
                               axios.get(`admin/member/${data.relatedTo}`).then(res => {
                                   setRelative(res.data.firstName)

                               }).catch(err => console.log(err))

                               data["relative"] = relative;

                               
                            }
                        )
                         
    
                }
            )
    }
    

    
    useEffect(() => {
            getData();

            
                        //  relationShipData.map(
                        //      (data) =>{
                        //         axios.get(`admin/member/${data.relatedTo}`).then(res => {
                        //             const relative = res.data
                        //             data["relative"] = relative.firstName;
                        //             // console.log(data)
                        //             setShown(
                        //                 (prev) => [...prev, data]
                        //             )

                        //         }).catch(err => console.log(err))
                                
                                
                        //      }
                        //  )

                         console.log(relationShipData)
    
             
        }, [props.id]);

        





   if(relationShipData.length === 0){
       return (
           <div> 
               No one related to you
           </div>
       )
   }

   else{


   return(
    <div>
        <h1> You relations:</h1>
        {
             relationShipData.map(
                (data) => {
                    <RelationshipCard key = {data.id} data = {data} />

                }
            )
        }
        
    </div>
)
       
   }

       
}