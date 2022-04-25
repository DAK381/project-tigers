import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate,Link} from 'react-router-dom'
import axios from "../../axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pictures from "../layout/Pictures";
import Button from 'react-bootstrap/Button';


function AdminEventAddForm(){
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventLocation, setLocation] = useState("");
  const [eventDate, setEventDate] = useState();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndime] = useState("");  
  const [paymentAmount, setPaymentAmount] = useState("");
  // const [openDate, setOpenDate] = useState(new Date());
  // const [closeDate, setCloseDate] = useState(new Date());
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


  console.log(eventDate)
  function registerEvent(e) { 
    
    console.log(startTime)
    e.preventDefault();
    axios.post("admin/event/add-event", {eventName, eventDescription, eventImage, eventDate, eventLocation, paymentAmount, startTime, endTime}).then(res=>{
      console.log(eventName);
      
      navigate('/admin-event-view');
      
    }).catch(err=>console.log(err))
  }

  console.log(eventImage);

  return (
    <div>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
          <div className="jumbotron">
            <h1 className="display-4 text-center">Create Event</h1>
            <br></br>
            <div>
              <Button variant="primary" onClick={handleShow}>
				        Choose Image
			        </Button>
              <br></br>
              {eventImage && (
                <div>
                  <img className="preview" src={process.env.PUBLIC_URL + '/upload/' + eventImage} alt="" style={{border: '1px solid #ddd',
                                                                                                                 borderRadius: '4px',
                                                                                                                 padding: '5px',
                                                                                                                 width: '150px'}}/>
                </div>
              )}
              <Pictures show={show} onHide={handleClose} setImage={setEventImage} isCarousel={false} />
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


        <Form.Group controlId="startTime">
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

export default AdminEventAddForm;
