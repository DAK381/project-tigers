import { Modal, ModalBody } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import axios from "../../../axios";
import { useNavigate } from 'react-router-dom';
import { setISODay } from "date-fns";

export default function AdminAddMemberToGroup(props){

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
  
    const [id, selectedId] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [groups, setGroups] = useState([]);
  
    
    React.useEffect(() => {
        axios.get("/search/allgroup").then(res => {
            setGroups(res.data)
        }).catch(err => console.log(err))

        
        
    }, [props])

    const addMembers = (e) => {
      e.preventDefault();
      console.log(selectedId)
     
  
  }

  
  
  return (
      <>
       
          

             { groups.map(
                  (group) => {
                      return(
                          <p>

                          
                      <Button size = 'xl' onCLick ={(e) => {console.log(group.groupId)}}>
                      {group.groupName} {group.groupYear}
                  </Button>
                  
                  </p>  
                )
                      
                  }
              )
                }

                <Button onSubmit = {addMembers} > Add Members to the Selected Group</Button>
          
        
      </>
    );
  }