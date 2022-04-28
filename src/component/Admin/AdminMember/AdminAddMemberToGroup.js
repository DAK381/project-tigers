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
  
    const [id, selectedId] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [groups, setGroups] = useState([]);
  
    
    React.useEffect(() => {
        axios.get("/search/allgroup").then(res => {
            setGroups(res.data)
        }).catch(err => console.log(err))

        
        
    }, [props])

    const addMembers = () => {
      console.log(selectedId)

      users.map(
        (userId) =>
        {
          console.log(userId, "....")
          axios.put(`/addUserToGroup/${id}/${userId}`)
          .then(
            res => {
              console.log(userId, id)

              navigate('admin-group-all')
            }
            
          ).catch(err => console.log(err))
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