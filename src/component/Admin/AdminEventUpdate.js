import React, { useState, useEffect } from 'react';
import axios from "../../axios";
import { useHistory, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import AdminEventDelete from './AdminEventDelete';
import { Form } from "react-bootstrap";
import Pictures from "../layout/Pictures";
import Button from 'react-bootstrap/Button';

export default function AdminEventUpdate(props) {

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    
    const navigate = useNavigate();

    const location = useLocation();


    const [isOpen, setIsOpen] = useState(false)
    const [eventName, setEventName] = useState("");
    const [eventLocation, setLocation] = useState("");
    const [eventDescription, setEventDescription] = useState("");
    const [eventImage, setEventImage] = useState("");
    const [eventDate, setEventDate] = useState(new Date());
    const [paymentAmount, setPaymentAmount] = useState();

    // const [startTime, setStartTime] = useState(new Date());
    // const [endTime, setEndime] = useState(new Date());
    
    
    
    // const [openDate, setOpenDate] = useState(new Date());
    // const [closeDate, setCloseDate] = useState(new Date());
    
console.log(location.state.event.eventId)
console.log(location.state.event.eventName)

    useEffect(() => {
        setEventName(location.state.event.eventName)
        setEventDescription(location.state.event.eventDescription);
        setEventImage(location.state.event.eventImage)
        // setStartTime(location.state.startTime);
        // setEndime(location.state.endTime);
        setEventDate(location.state.event.eventDate)
    }, [location.state]);
    


    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`admin/event/update/${location.state.event.eventId}`, {
            eventName, eventDescription, eventImage
        })
            .then(res=>{console.log(res.data);
            navigate('/admin-event-view');
          }).catch(err=>console.log(err))

          
    }

   

    return (
        <div>
            <div className="container">


                <h1>{location.state.name}</h1>
                <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                    <div class="jumbotron">
                        <h1 class="display-4 text-center">Update {location.state.name}</h1>
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
                            <form>
                                <div class="form-group">
                                    <label for="eventName">Event Name</label>
                                    <input type="text" class="form-control" name="eventName" 
                                    defaultValue = {location.state.name}
                                    placeholder= {location.state.name} value={eventName} onChange={(e) => setEventName(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label for="eventDescription">Event Description</label>
                                    <textarea name="eventDescription" 
                                    defaultValue = {location.state.description}
                                    placeholder= {location.state.description} value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
                                </div>


         <Form.Group controlId="eventDate">
          <Form.Label>Date of the event</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date of the event"
            defaultValue={location.state.date}
            value = {eventDate}
            name="eventDate"
            onChange={(e) => setEventDate(e.target.value)}
          />
        </Form.Group>


        <Form.Group controlId="eventLocation">
          <Form.Label>Location of the event</Form.Label>
          <Form.Control
            type="text"
            defaultValue = {location.state.eventLocation}
            value = {eventLocation}
            placeholder="Enter location of the event"
            name="eventLocation"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>


        <Form.Group controlId="eventLocation">
          <Form.Label>Location of the event</Form.Label>
          <Form.Control
            type="text"
            defaultValue = {location.state.eventLocation}
            value = {eventLocation}
            placeholder="Enter location of the event"
            name="eventLocation"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>


        <Form.Group controlId="paymentAmount">
          <Form.Label>Payment Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the amount to be paid"
            value = {paymentAmount}
            defaultValue = {location.state.payment}
            name="paymentAmount"
            onChange={(e) => setPaymentAmount(e.target.value)}
          />
        </Form.Group>



                                {/* <div class="form-group">
                                    <label for="eventDate">Date of Event</label>
                                    <DatePicker selected={eventDate} placeholder = {location.state.name} name = "eventDate" value = {eventDate} onChange={(date) => setEventDate(date)} />
                                </div>

                              

                                <div class = "form-group">
                                    <label for = "startTime">Start Time</label>
                                <input type="time" class = "form-control" name="startTime" placeholder = {location.state.name} value = {startTime} 
                                        onChange={(e) => setStartTime(e.target.value)}
                                        
                                        />
                                    </div>



                                    <div class = "form-group">
                                    <label for = "endTime">Close Time</label>
                                <input type="time" class = "form-control" name="endTime" placeholder = {location.state.name} value = {endTime} 
                                        onChange={(e) => setEndime(e.target.value)}
                                        
                                        
                                        />
                                    </div> */}

                                <div className="container text-center">
                                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2"  onClick={e => updateAPIData(e)}>Update</button>
                                    <AdminEventDelete id = {location.state.id} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}