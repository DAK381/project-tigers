import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate,Link} from 'react-router-dom'
import axios from "../../axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function AdminEventAddForm(){
  
    
        

        const [eventName, setEventName] = useState('');
        //const [event_Id, setEventId] = useState('');
        const [eventDescription, setEventDescription] = useState('');
        const [location, setLocation] = useState('');
        const [eventDate, setEventDate] = useState(new Date());
        const [startTime, setStartTime] = useState(new Date());
        const [endTime, setEndime] = useState(new Date());
        const [timeOccurrence, setTimeOccurrence] = useState('');
        
         const [paymentAmount, setPaymentAmount] = useState();
        const [openDate, setOpenDate] = useState(new Date());
        const [closeDate, setCloseDate] = useState(new Date());
        const navigate = useNavigate();
      
      
       

          function registerEvent(e){
           
            e.preventDefault();
           console.log(eventName);
            axios.post("admin/event/add-event", {eventName, eventDescription})
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
