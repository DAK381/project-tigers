import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate,Link} from 'react-router-dom'
import axios from "../../axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function AdminEventAddForm(){
  
    
        

        const [eventName, setEventName] = useState("");
        const [eventDescription, setEventDescription] = useState("");
        const [eventLocation, setLocation] = useState("");
        const [eventDate, setEventDate] = useState(new Date());
        const [startTime, setStartTime] = useState();
        const [endTime, setEndime] = useState();  
        const [paymentAmount, setPaymentAmount] = useState("");
        // const [openDate, setOpenDate] = useState(new Date());
        // const [closeDate, setCloseDate] = useState(new Date());
        const navigate = useNavigate();
      
      
       

          function registerEvent(e){
           
            e.preventDefault();
           console.log(eventName);
            axios.post("admin/event/add-event", {eventName, eventDescription, eventDate, eventLocation, paymentAmount})
            .then(res=>{console.log(eventName);
                navigate('/admin-event-view');
              }).catch(err=>console.log(err))
        }

        console.log(eventName)
        return (
            <div>
                <div className="container">
                    <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                        <div className="jumbotron">
                            <h1 className="display-4 text-center">Add Event</h1>
                            <div>
                                <form onSubmit={registerEvent}>
                                    <div className="form-group">
                                        <label for="eventName">Event Name</label>
                                        <input type="text" class="form-control" name="eventName" placeholder="Enter the name of the event" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                                    </div>

                                    <div className="form-group">
                                        <label for="eventDescription">Event Description</label>
                                        <textarea name="eventDescription" placeholder="Enter description" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
                                    </div>


                                    <Form.Group controlId="eventLocation">
          <Form.Label>Location of the event</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter location of the event"
            name="eventLocation"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>
                                
        <Form.Group controlId="eventDate">
          <Form.Label>Date of the event</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date of the event"
            name="eventDate"
            onChange={(e) => setEventDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="paymentAmount">
          <Form.Label>Payment Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the amount to be paid"
            name="paymentAmount"
            onChange={(e) => setPaymentAmount(e.target.value)}
          />
        </Form.Group>


        {/* <Form.Group controlId="startTime">
          <Form.Label>Start time for the event</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter time of the event"
            name="startTime"
            onChange={(e) => setStartTime(e.target.value)}
          />
        </Form.Group>


        <Form.Group controlId="endTime">
          <Form.Label>End time for the event</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter time of the event"
            name="endTime"
            onChange={(e) => setEndime(e.target.value)}
          />
        </Form.Group> */}



                                   


                                    <div className="container text-center">
                                        <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Add Event</button>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default AdminEventAddForm;
