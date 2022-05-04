import React, { useState, useEffect } from 'react';
import axios from "../../../axios";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import AdminEventDelete from './AdminEventDelete';
import { Form } from "react-bootstrap";
import Pictures from "../../layout/Pictures";
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
    const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndime] = useState("");  

  const handleBack = () => navigate('/events');
    


    useEffect(() => {
        setEventName(location.state.event.eventName)
        setEventDescription(location.state.event.eventDescription);
        setEventImage(location.state.event.eventImage)
        setStartTime(location.state.startTime);
        setEndime(location.state.endTime);
        setEventDate(location.state.event.eventDate)
        setPaymentAmount(location.state.event.paymentAmount)
    }, [location.state]);
    


    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`admin/event/update/${location.state.event.eventId}`, {
            eventName, eventDescription, eventImage, eventDate, startTime, endTime, paymentAmount
        })
            .then(res=>{console.log(res.data);
            navigate('/events');
          }).catch(err=>console.log(err))

          
    }

   

    return (
        <div>
            <div className="container">




                <h1>{location.state.name}</h1>
                

                <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                    <div class="jumbotron">
                    <button onClick={handleBack}>Back</button>
                        <h1 class="display-4 text-center">Update {location.state.event.eventName}</h1>
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
                                


                                <Form.Group controlId="eventName">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="eventName"                
                    defaultValue = {location.state.event.eventName}
                    placeholder= {location.state.event.eventName} value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="eventDescription">
                  <Form.Label>Event Description</Form.Label>
                  <Form.Control  as="textarea"
                    defaultValue = {location.state.event.eventDescription}
                    name="eventDescription"
                    value={eventDescription}
                    placeholder= {location.state.description} 
                    onChange={(e) => setEventDescription(e.target.value)}
                  />
                </Form.Group>


         <Form.Group controlId="eventDate">
          <Form.Label>Date of the event</Form.Label>
          <Form.Control
            type="date"
            placeholder= {location.state.event.eventDate}
            data-date-format="DD MMMM YYYY"
            defaultValue={location.state.event.eventDate}
            value = {eventDate}
            name="eventDate"
            onChange={(e) => setEventDate(e.target.value)}
          />
        </Form.Group>


        <Form.Group controlId="eventLocation">
          <Form.Label>Location of the event</Form.Label>
          <Form.Control
            type="text"
            defaultValue = {location.state.event.eventLocation}
            value = {eventLocation}
            placeholder= {location.state.event.eventLocation}
            name="eventLocation"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>


        <Form.Group controlId="paymentAmount">
          <Form.Label>Payment Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder= {location.state.event.payment}
            value = {paymentAmount}
            defaultValue = {location.state.event.payment}
            name="paymentAmount"
            onChange={(e) => setPaymentAmount(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="startTime">
          <Form.Label>Start time for the event</Form.Label>
          <Form.Control
            type="time"
            placeholder= {location.state.event.startTime}
            value = {startTime}
            defaultValue = {location.state.event.startTime}
            name="startTime"
            onChange={(e) => setStartTime(e.target.value)}
          />
        </Form.Group>


        <Form.Group controlId="endTime">
          <Form.Label>End time for the event</Form.Label>
          <Form.Control
            type="time"
            placeholder= {location.state.event.endTime}
            value = {endTime}
            defaultValue = {location.state.event.endTime}
            name="endTime"
            onChange={(e) => setEndime(e.target.value)}
          />
        </Form.Group>


                                <div className="container text-center">
                                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2"  onClick={e => updateAPIData(e)}>Update</button>
                                    <AdminEventDelete id = {location.state.event.eventId} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}