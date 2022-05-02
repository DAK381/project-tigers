import { Modal, ModalBody } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import axios from "../../../axios";
import { useNavigate, useLocation } from 'react-router-dom';
import { setISODay } from "date-fns";


export default function AdminAddMemberToGroup(props){

    const navigate = new useNavigate();
    const [show, setShow] = useState(false);

    const location = new useLocation();

    const users = location.state.arrayId;
    console.log(users);
  
    const [id, selectedId] = useState();  //is when button clicked
    const [selGrp, setGrp] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const[alreadyAddedGroup, setAlreadyAdded] = useState([[]])
    const [groups, setGroups] = useState([]);
  
    
    React.useEffect(() => {
        axios.get("/search/allgroup").then(res => {
            setGroups(res.data)
        }).catch(err => console.log(err))

      

    }, [users])

    const addMembers = () => {
      console.log(selectedId)

      if(selectedId === null){
        alert("Please select a group to add the members to.")
      }
    
      
      users.map(
        (userId) =>
        {
          
          axios.put(`/addUserToGroup/${id}/${userId}`)
          .then(
            res => {
              console.log(userId, id)
              navigate('/admin-group-all');
            }
            
          ).catch(err => navigate('/admin-group-all'))
        }
      )
  }

  

  const addToGroup = (gId) =>{
    console.log(gId)
    selectedId(gId);


  }
  
  
  return (
    
       
          <div>

         

             { groups.map(
                  (group) => {
                      return(
                          <p>

                          
                      <Button size = 'xl' onClick={() => {addToGroup(group.groupId);}}>
                      {group.groupName} {group.groupYear}
                  </Button>
                  
                  </p>  
                )
                      
                  }
              )
                }

                <Button onClick = {addMembers} > Add Members to the Selected Group</Button>
          
                </div>
      
    )
  }