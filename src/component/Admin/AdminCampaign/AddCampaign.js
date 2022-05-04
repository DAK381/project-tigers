import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {useNavigate,Link} from 'react-router-dom'
import axios from "../../../axios";
import "react-datepicker/dist/react-datepicker.css";
import Pictures from "../../layout/Pictures";
import Button from 'react-bootstrap/Button';


function AddCampaign(){

  const dayjs = require('dayjs');
    const [campaignName, setCampaignName] = useState('');
    const [campaignDescription, setCampaignDescription] = useState('');
    const [campaignImage, setCampaignImage] = useState("");
    const[amountGoal, setAmountGoal] = useState("");

    const [addedDate, setAdded] = useState(dayjs())

    const navigate = useNavigate();
  
    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
   

      function registerCampaign(e){
       
        e.preventDefault();
        axios.post("campaign/add-campaign", {campaignName, campaignDescription, campaignImage, amountGoal, addedDate})
        .then(res=>{;
            navigate('/campaign');
          }).catch(err=>console.log(err))
    }

    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                    <div className="jumbotron">
                        <h1 className="display-4 text-center">Add Campaign</h1>
                        <div>
                            <Button variant="primary" onClick={handleShow}>
				                Choose Image
			                </Button>
                            <br></br>
                            {campaignImage&& (
                                <div>
                                    <img className="preview" src={process.env.PUBLIC_URL + '/upload/' + campaignImage} alt="" style={{border: '1px solid #ddd',
                                                                                                                                         borderRadius: '4px',
                                                                                                                                         padding: '5px',
                                                                                                                                         width: '150px'}}/>
                                </div>
                            )}
                            <Pictures show={show} onHide={handleClose} setImage={setCampaignImage} isCarousel={false} />
                            <form onSubmit={registerCampaign}>
        

                            
                                <Form.Group controlId="scholarshipName">
                  <Form.Label>Scholarship Name</Form.Label>
                  <Form.Control
                    type="text"
                    class= "form-control"
                    name="campaignName" placeholder="Enter the name of the campaign"
                    value = {campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="scholarshipDescription">
                  <Form.Label>Campaign Description</Form.Label>
                  <Form.Control  as="textarea"
                    placeholder="Enter Scholarship Description"
                    name="campaignDescription"
                    value = {campaignDescription}
                    onChange={(e) => setCampaignDescription(e.target.value)}
                  />
                </Form.Group>



        

                <Form.Group controlId="formLink">
                  <Form.Label>Campaign Goal</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Link the scholarship form"
                    name="amountGoal"
                    value = {amountGoal}
                    onChange={(e) => setAmountGoal(e.target.value)}
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

export default AddCampaign;
