import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate,Link} from 'react-router-dom'
import axios from "../../axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-bootstrap-time-picker';

import { MDBDatePickerV5 } from 'mdbreact';

function AdminEventAddForm(){
  
    
        

        const [eventName, setEventName] = useState('');
        //const [event_Id, setEventId] = useState('');
        const [eventDescription, setEventDescription] = useState('');
        const [location, setLocation] = useState('');
        const [eventDate, setEventDate] = useState(new Date());
        const [timeOccurrence, setTimeOccurrence] = useState('');
        const [paymentAmount, setPaymentAmount] = useState('00:00');
        const [openDate, setOpenDate] = useState(new Date());
        const [closeDate, setCloseDate] = useState(new Date());
        const navigate = useNavigate();
      
      
       

          function registerMember(event){
            axios.post("/registerEvent",{eventName, eventDescription,location,eventDate,timeOccurrence,paymentAmount,openDate,closeDate})
            .then(res=>{console.log(res.data);
                navigate('/admin-event-view');
              }).catch(err=>console.log(err))
        }

        return (
            <div>
                <div className="container">
                    <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                        <div class="jumbotron">
                            <h1 class="display-4 text-center">Add Event</h1>
                            <div>
                                <form onSubmit={e => registerMember(e)}>
                                    <div class="form-group">
                                        <label for="eventName">Event Name</label>
                                        <input type="text" class="form-control" name="eventName" placeholder="Enter the name of the event" value={eventName} onChange={(e) => setEventName(e.target.value)} />
                                    </div>

                                    <div class="form-group">
                                        <label for="eventDescription">Event Description</label>
                                        <textarea name="eventDescription" placeholder="Enter description" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
                                    </div>


                                    <div class="form-group">
                                        <label for="eventLocation">Event Location</label>
                                        <input type="text" class="form-control" name="eventLocation"  placeholder="Enter the location if feasilble. NA if not." value={location} onChange={(e) => setLocation(e.target.value)} />
                                    </div>
                                    <div class="form-group">
                                        <label for="eventDate">Date of Event</label>
                                        <DatePicker selected={eventDate} name = "eventDate" value = {eventDate} onChange={(date) => setEventDate(date)} />
                                    </div>

                                    
                                    {/* <div class="md-form mx-5 my-5">
                                        <input type="time" id="timeOccurrence" class="form-control"value = {timeOccurrence} name = "timeOccurence"onChange={(time) => setTimeOccurrence(time)} />
                                            <label for="timeOccurrence">Choose your time</label>
                                            
                                    </div> */}

                                    {/* <div class="form-group">
                                        <label for="paymentAmount">Payment Amount</label>
                                        <input type="text" class="form-control" name="paymentAmount"  placeholder="Enter the amount to be paid" value={paymentAmount} onChange={(e) => setPaymentAmount(e)} />
                                    </div> */}

                                    <div class="form-group">
                                        <label for="openDate">Registration Opens At:</label>
                                        <DatePicker selected={openDate} value = {openDate} name = "openDate" onChange={(date) => setOpenDate(date)} />                                    </div>

                                    <div class="form-group">
                                        <label for="closeDate">Registration CLoses At:</label>
                                        {/* <input type="date" class="form-control" name="price"  placeholder="Enter the end date for registration" value={dateClose} onChange={(e) => setDateClose(e)} /> */}
                                        <DatePicker selected={closeDate} value = {closeDate} name = "openDate" onChange={(date) => setCloseDate(date)} />
                                    </div>


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
