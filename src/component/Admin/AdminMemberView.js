import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Table } from 'react-bootstrap';

export default function AdminMemberView(props){ 

    return(
        <div>
    
    
    <Card className={"border border-dark bg-dark text-white"}>
 
   <Card.Header>Member List</Card.Header>
 
   <Card.Body>
   <Table bordered hover striped variant="dark">
       <thead>
           <tr>
               <th>id</th>
               <th> First Name</th>
               <th> Maiden Name</th>
               <th> Last Name</th>
               <th> Email Id</th>
               <th> Phone Number</th>
               <th> Address</th>
               <th> Graduation Year</th>
           </tr>
       </thead>
 
     
       <tbody>
                       {
                           props.data.map(member =>
                                   <tr key={member.id}>
                                       <td>{member.id}</td>
                                       <td>{member.firstName}</td>
                                       <td>{member.maidenName}</td>
                                       <td>{member.lastName}</td>
                                       <td>{member.email}</td>
                                       <td>{member.phone}</td>
                                       <td>{member.address}</td>
                                       <td>{member.graduationYear}</td>
     
                                   </tr>
                           )
                           }
                   </tbody>
 
 
       </Table>
   </Card.Body>
 
 
   </Card>
 

           

        </div>
    )

}

