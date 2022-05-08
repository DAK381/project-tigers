import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate,Link} from 'react-router-dom'
import axios from "../../../axios";

export default function CreateLabel(){

    const dayjs = require('dayjs');
	var customParseFormat = require('dayjs/plugin/customParseFormat')
	dayjs.extend(customParseFormat)

    var now = dayjs();

    dayjs(now, "MM-DD-YYYY")

   


    const [presetName, setLabelName] = useState("");
    const [dateAdded, setDateAdded] = useState(now.format("YYYY-MM-DD"));

    const navigate = useNavigate();
  
  
    console.log(dateAdded)

    function addGroup(e) { 
      
      e.preventDefault();
      axios.post("/addPreset", {presetName, dateAdded}).then(res=>{
        console.log(res.data);

        navigate('/admin-show-label');
        
      }).catch(err=>console.log(err))
    }
  


    return(
        <div>
        <div className="container">
          <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
            <div className="jumbotron">
              <h1 className="display-4 text-center">Create Group</h1>
              <br></br>
              <div>


                <form onSubmit={addGroup}>
                
                  <Form.Group controlId="labelName">
                    <Form.Label>Label Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="presetName" placeholder="Enter the name of the Label" 
                      value={presetName} 
                      onChange={(e) => setLabelName(e.target.value)}
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