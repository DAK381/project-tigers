import AdminNavigation from "./AdminNavigation";
import React from "react";
import { Container, Card, Table} from "react-bootstrap";
import AdminMemberSearchForm from "../Forms/AdminMemberSearchForm";
import { CardColumns } from "reactstrap";
import APIService from "../../services/APIService";
import { useState } from "react";
import { Nav } from 'react-bootstrap';
 
 
 
export default class AdminMembers extends React.Component {
 
   constructor(props) {
       super(props)
  
       this.state = {
            data: []
       }
   }
 
 
  
 
 
   componentDidMount(){
      
      
       APIService.getMembers().then((data) => {
 
           let arrayData = [];
 
           for (var i in data.data){
               arrayData.push(
                   {name: i,
                   value: data.data[i]}
               )
           }
           this.setState({data: arrayData})
           console.log(this.state.data)
           console.log("HAHAHAHA")
           //console.log(this.state.data.members)
         })
         .catch(function (ex) {
             console.log('Error: ', ex);
         });;
   }
 
  
 
 
 
  
render(){
 
   return(
       <div>
 
 
 
 
<Nav.Link href="admin-member-search"><h2>Search Members</h2></Nav.Link>
 
       <Card className={"border border-dark bg-dark text-white"}>
 
   <Card.Header>Member List</Card.Header>
 
   <Card.Body>
   <Table bordered hover striped variant="dark">
       <thead>
           <tr>
               <th>#</th>
               <th> First Name</th>
               <th> Maiden Name</th>
               <th> Last Name</th>
               <th> Email Id</th>
               <th> Phone Number</th>
               <th> Address</th>
               <th> Graduation Year</th>
               <th> Relationship</th>
           </tr>
       </thead>
 
     
 
       <tbody>
                       {
                           this.state.data?.map(member =>
                                   <tr key={member.value.id}>
                                       <td>{member.value.id}</td>
                                       <td>{member.value.firstName}</td>
                                       <td>{member.value.maidenName}</td>
                                       <td>{member.value.lastName}</td>
                                       <td>{member.value.email}</td>
                                       <td>{member.value.phone}</td>
                                       <td>{member.value.address}</td>
                                       <td>{member.value.graduationYear}</td>
     
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
 
}
