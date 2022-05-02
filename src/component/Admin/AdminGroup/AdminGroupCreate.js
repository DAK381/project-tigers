import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate,Link} from 'react-router-dom'
import axios from "../../../axios";
import Pictures from "../../layout/Pictures";
import Button from 'react-bootstrap/Button';

export default function AdminGroupCreate(){
    const [groupName, setGroupName] = useState("");
    const [groupYear, setGroupYear] = useState("");
    const[groupImage, setGroupImage] = useState("");

    const navigate = useNavigate();
  
    function addGroup(e) { 
      
      e.preventDefault();
      axios.post("/addgroup", {groupName, groupYear}).then(res=>{
        console.log(res.data);
        
        navigate('/admin-group-all');
        
      }).catch(err=>console.log(err))
    }
  
  
  
    return (
      <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
            <div className="jumbotron">
              <h1 className="display-4 text-center">Create Group</h1>
              <br></br>
              <div>

                <form onSubmit={addGroup}>
                
                  <Form.Group controlId="groupName">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="groupName" placeholder="Enter the name of the group" 
                      value={groupName} 
                      onChange={(e) => setGroupName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="groupYear">
                    <Form.Label>Group Year</Form.Label>
                    <Form.Control
                      type="text"
                      name="groupYear" placeholder="Enter the name of the group" 
                      value={groupYear} 
                      onChange={(e) => setGroupYear(e.target.value)}
                    />
                  </Form.Group>
  
                 
  
                    <div className="container text-center">
                      <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Save</button>                   
                    </div>
  
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }