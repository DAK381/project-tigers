import React, { useState, useEffect } from 'react';
import axios from "../../../axios";
import { useHistory, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import Pictures from "../../layout/Pictures";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import AdminScholarshipDelete from './AdminScholarshipDelete';

export default function AdminScholarshipUpdate(props) {

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
    const handleBack = () => navigate('/scholarship');


    const navigate = useNavigate();

    const location = useLocation();


    const [scholarshipId, setScholarshipId] = useState();
    const [scholarshipName, setScholarshipName] = useState();
    const [scholarshipDescription, setScholarshipDescription] = useState();
    const [scholarshipImage, setScholarshipImage] = useState();
    const[formLink, setLink] = useState();
    const[deadline, setDeadline] = useState();
    
    
console.log(location.state.id)
console.log(location.state.name)

    useEffect(() => {
        setScholarshipId(location.state.scholarship.scholarshipId)
        setScholarshipName(location.state.scholarship.scholarshipName)
        setScholarshipDescription(location.state.scholarship.scholarshipDescription);
        setScholarshipImage(location.state.scholarship.scholarshipImage);
        setDeadline(location.state.scholarship.deadline)
        setLink(location.state.scholarship.formLink)
    }, [location.state]);
    


    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`/scholarship/update-scholarship/${scholarshipId}`, {
            scholarshipName, scholarshipDescription, scholarshipImage, deadline, formLink
            
        })
            .then(res=>{console.log(res.data);
            navigate('/scholarship');
          }).catch(err=>console.log(err))

          
    }


    return (
        <div>
            <div className="container">


                <h1>{location.state.name}</h1>
                <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                    <div class="jumbotron">
                    <button onClick={handleBack}>Back</button>
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


                                <Form.Group controlId="scholarshipName">
                  <Form.Label>Scholarship Name</Form.Label>
                  <Form.Control
                    type="text"
                    class= "form-control"
                    name="scholarshipName" 
                    placeholder= {location.state.scholarship.scholarshipName}
                    defaultValue = {location.state.scholarship.scholarshipName}
                    value = {scholarshipName}
                    onChange={(e) => setScholarshipName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="scholarshipDescription">
                  <Form.Label>Scholarship Description</Form.Label>
                  <Form.Control  as="textarea"
                    name="scholarshipDescription"
                    placeholder= {location.state.scholarship.scholarshipDescription}
                    defaultValue = {location.state.scholarship.scholarshipDescription}
                    value = {scholarshipDescription}
                    onChange={(e) => setScholarshipDescription(e.target.value)}
                  />
                </Form.Group>



                   <Form.Group controlId="deadline">
                  <Form.Label>Application Deadline</Form.Label>
                  <Form.Control
                    type="date"
                    data-date-format="DD MMMM YYYY"
                    name="deadline"
                    placeholder= {location.state.scholarship.deadline}
                    defaultValue = {location.state.scholarship.deadline}
                    value = {deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formLink">
                  <Form.Label>Scholarship Application Link</Form.Label>
                  <Form.Control
                    type="text"
                    name="formLink"
                    placeholder= {location.state.scholarship.formLink}
                    defaultValue = {location.state.scholarship.formLink}
                    value = {formLink}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </Form.Group>
                                <div className="container text-center">
                                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2"  onClick={e => updateAPIData(e)}>Update</button>
                                    <AdminScholarshipDelete id = {location.state.scholarship.scholarshipId} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}