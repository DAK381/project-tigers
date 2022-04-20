import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate,Link} from 'react-router-dom'
import axios from "../../axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-bootstrap-time-picker';
import Pictures from "../layout/Pictures";
import Button from 'react-bootstrap/Button';

import { MDBDatePickerV5 } from 'mdbreact';

function AdminScholarshipAddForm(){

    const [scholarshipName, setScholarshipName] = useState('');
    const [scholarshipDescription, setScholarshipDescription] = useState('');
    const [scholarshipImage, setScholarshipImage] = useState("");
    // const [location, setLocation] = useState('');
    // const [eventDate, setEventDate] = useState(new Date());
    // const [startTime, setStartTime] = useState(new Date());
    // const [endTime, setEndime] = useState(new Date());
    // const [timeOccurrence, setTimeOccurrence] = useState('');
    
    //  const [paymentAmount, setPaymentAmount] = useState();
    // const [openDate, setOpenDate] = useState(new Date());
    // const [closeDate, setCloseDate] = useState(new Date());
    const navigate = useNavigate();
  
    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
   

      function registerScholarship(e){
       
        e.preventDefault();
        axios.post("/scholarship/add-scholarship", {scholarshipName, scholarshipDescription, scholarshipImage})
        .then(res=>{console.log(scholarshipName);
            navigate('/admin-scholarship-view');
          }).catch(err=>console.log(err))
    }

    console.log(scholarshipName)
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
                                <div className="form-group">
                                    <label for="scholarshipName">Scholarship Name</label>
                                    <input type="text" class="form-control" name="scholarshipName" placeholder="Enter the name of the scholarship" value={scholarshipName} onChange={(e) => setScholarshipName(e.target.value)} />
                                </div>

                                <div className="form-group">
                                    <label for="scholarshipDescription">Scholarship Description</label>
                                    <textarea name="scholarshipDescription" placeholder="Enter description" value={scholarshipDescription} onChange={(e) => setScholarshipDescription(e.target.value)} />
                                </div>



                                {/* <div class="form-group">
                                    <label for="eventDate">Date of Event</label>
                                    <DatePicker selected={eventDate} name = "eventDate" value = {eventDate} onChange={(date) => setEventDate(date)} />
                                </div>

                              

                                <div class = "form-group">
                                    <label for = "startTime">Start Time</label>
                                <input type="time" class = "form-control" name="startTime" placeholder = "Enter Start Time" value = {startTime} 
                                        onChange={(e) => setStartTime(e.target.value)}
                                        
                                        />
                                    </div> */}


                                    {/* <div class = "form-group">
                                    <label for = "endTime">Close Time</label>
                                <input type="time" class = "form-control" name="endTime" placeholder = "Enter Start Time" value = {endTime} 
                                        onChange={(e) => setEndime(e.target.value)}
                                        
                                        
                                        />

                                    </div> */}


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
