import React, { useState, useEffect } from 'react';
import axios from "../../axios";
import { useHistory, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import Pictures from "../layout/Pictures";
import Button from 'react-bootstrap/Button';


export default function AdminScholarshipUpdate(props) {

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


    const navigate = useNavigate();

    const location = useLocation();


    const [scholarshipId, setScholarshipId] = useState();
    const [scholarshipName, setScholarshipName] = useState();
    const [scholarshipDescription, setScholarshipDescription] = useState();
    const [scholarshipImage, setScholarshipImage] = useState();
    //const [location, setLocation] = useState('');
    // const [eventDate, setEventDate] = useState(new Date());
    // const [startTime, setStartTime] = useState(new Date());
    // const [endTime, setEndime] = useState(new Date());
    // const [timeOccurrence, setTimeOccurrence] = useState('');
    
    //  const [paymentAmount, setPaymentAmount] = useState('00:00');
    // const [openDate, setOpenDate] = useState(new Date());
    // const [closeDate, setCloseDate] = useState(new Date());
    
console.log(location.state.id)
console.log(location.state.name)

    useEffect(() => {
        setScholarshipId(location.state.scholarship.scholarshipId)
        setScholarshipName(location.state.scholarship.scholarshipName)
        setScholarshipDescription(location.state.scholarship.scholarshipDescription);
        setScholarshipImage(location.state.scholarship.scholarshipImage);
        // setStartTime(location.state.startTime);
        // setEndime(location.state.endTime);
        // setEventDate(location.state.eventDate)
    }, [location.state]);
    


    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`/scholarship/update-scholarship/${scholarshipId}`, {
            scholarshipName, scholarshipDescription, scholarshipImage
            // , 
            // eventDate,
            // startTime, endTime
        })
            .then(res=>{console.log(res.data);
            navigate('/admin-scholarship-view');
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
                            {scholarshipImage && (
                                <div>
                                    <img className="preview" src={process.env.PUBLIC_URL + '/upload/' + scholarshipImage} alt="" style={{border: '1px solid #ddd',
                                                                                                                                   borderRadius: '4px',
                                                                                                                                   padding: '5px',
                                                                                                                                   width: '150px'}}/>
                                </div>
                            )}
                            <Pictures show={show} onHide={handleClose} setImage={setScholarshipImage} isCarousel={false} />
                            <form>
                                <div class="form-group">
                                    <label for="eventName">Event Name</label>
                                    <input type="text" class="form-control" name="eventName" 
                                    defaultValue = {location.state.name}
                                    placeholder= {location.state.name} value={scholarshipName} onChange={(e) => setScholarshipName(e.target.value)} />
                                </div>

                                <div class="form-group">
                                    <label for="eventDescription">Event Description</label>
                                    <textarea name="eventDescription" 
                                    defaultValue = {location.state.description}
                                    placeholder= {location.state.description} value={scholarshipDescription} onChange={(e) => setScholarshipDescription(e.target.value)} />
                                </div>



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
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}