import axios from "../../axios";
import React, { useState, useEffect, useCallback} from 'react';
import { Card } from "react-bootstrap";

export default function RelationshipCard(props){

    const data = props.data;

    console.log("made it to here", data.relatedTo);
    
    const[relative, setRelative] = useState();

    // async function getData( ){
       

                     
    //                            axios.get(`admin/member/${data.relatedTo}`).then(res => {
    //                                setRelative(res.data.firstName + " " + res.data.maidenName + " " + res.data.lastName )

    //                            }).catch(err => console.log(err))

                        
           
    // }
    
    
    
    useEffect(() => {
        
       

                     
            axios.get(`admin/member/${data.relatedTo}`).then(res => {
                setRelative(res.data.firstName + " " + res.data.maidenName + " " + res.data.lastName )

            }).catch(err => console.log(err))

     

            
        }, [data]);


    

    return(
        <div>
           
           
           

           <Card>

           {relative}  - {data.relationship}
           </Card>

               

            
        
            

        </div>
    )

}