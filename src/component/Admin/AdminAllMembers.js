import React from "react";
import { useState } from "react";
import { Nav } from 'react-bootstrap';
import AdminMemberView from "./AdminMemberView"; 
import axios from '../../axios';
import { useEffect} from "react";
import { CardGroup, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MemberCard from "./MemberCard";

function AdminAllMembers (props) { 

    const[data, setData] = useState([]);
    async function getData( ){
        axios.get("/admin/allMembers"
            )
            .then(
                (response) =>
                {
                    console.log(response.data)
                     setData(response.data)

                }
            )
    }
    useEffect(() => {
            getData();
        }, []);

        
if(!props.status){


    return(
        <div>

<Container>
            <CardGroup>





<Row className='row-cols-3 row-cols-md-1 p-9 g-4'>



{data.map(member => (
<MemberCard key={member.id} data={member} />

))}  

</Row>

</CardGroup>
</Container>

        </div>
    )

}
        
        
}

export default AdminAllMembers; 