import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate,Link} from 'react-router-dom'
import axios from "../../../axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-bootstrap-time-picker';
import Pictures from "../../layout/Pictures";
import Button from 'react-bootstrap/Button';
import moment from 'moment';

import { MDBDatePickerV5 } from 'mdbreact';

function AdminScholarshipAddForm(){

  const dayjs = require('dayjs');
    const [scholarshipName, setScholarshipName] = useState('');
    const [scholarshipDescription, setScholarshipDescription] = useState('');
    const [scholarshipImage, setScholarshipImage] = useState("");
    const[formLink, setLink] = useState("");
    const[deadline, setDeadline] = useState("");

    const [addedDate, setAdded] = useState(dayjs())

    const navigate = useNavigate();
  
    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
   

      function registerScholarship(e){
       
        e.preventDefault();
        axios.post("/scholarship/add-scholarship", {scholarshipName, scholarshipDescription, scholarshipImage, formLink, deadline, addedDate})
        .then(res=>{;
            navigate('/admin-scholarship-view');
          }).catch(err=>console.log(err))
    }

console.log(formLink)
    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Add Scholarship</h1>
                        <div>
                            <Button variant="primary" onClick={handleShow}>
				                Choose Image
			                </Button>
                            <br></br>
                            {scholarshipImage && (
                                <div>
                                    <img className="preview" src={process.env.PUBLIC_URL + '/upload/' + scholarshipImage} alt="" style={{border: '1px solid #ddd',
                                                                                                                                         borderRadius: '4px',
                                                                                                                                         padding: '5px',
                                                                                                                                         width: '150px'}}/>
                                </div>
                            )}
                            <Pictures show={show} onHide={handleClose} setImage={setScholarshipImage} isCarousel={false} />
                            <form onSubmit={registerScholarship}>
        

                            
                                <Form.Group controlId="scholarshipName">
                  <Form.Label>Scholarship Name</Form.Label>
                  <Form.Control
                    type="text"
                    class= "form-control"
                    name="scholarshipName" placeholder="Enter the name of the scholarship"
                    value = {scholarshipName}
                    onChange={(e) => setScholarshipName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="scholarshipDescription">
                  <Form.Label>Scholarship Description</Form.Label>
                  <Form.Control  as="textarea"
                    placeholder="Enter Scholarship Description"
                    name="scholarshipDescription"
                    value = {scholarshipDescription}
                    onChange={(e) => setScholarshipDescription(e.target.value)}
                  />
                </Form.Group>



                                <Form.Group controlId="deadline">
                  <Form.Label>Application Deadline</Form.Label>
                  <Form.Control
                    type="date"
                    data-date-format="DD MMMM YYYY"
                    placeholder="Enter deadline for application"
                    name="deadline"
                    value = {deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formLink">
                  <Form.Label>Scholarship Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Link the scholarship form"
                    name="formLink"
                    value = {formLink}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </Form.Group>


                                <div className="container text-center">
                                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Add Scholarship</button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminScholarshipAddForm;
