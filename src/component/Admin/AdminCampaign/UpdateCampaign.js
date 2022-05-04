import React, { useState, useEffect } from 'react';
import axios from "../../../axios";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Pictures from "../../layout/Pictures";
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import CampaignDelete from './DeleteCampaign';


export default function AdminScholarshipUpdate(props) {

    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    const handleBack = () => navigate('/campaign');

    const navigate = useNavigate();

    const location = useLocation();


    const [campaignId, setCampaignId] = useState();
    const [campaignName, setCampaignName] = useState();
    const [campaignDescription, setCampaignDescription] = useState();
    const [campaignImage, setCampaignImage] = useState();
    const[amountGoal, setAmountGoal] = useState();
   
    
    
console.log(location.state.id)
console.log(location.state.name)

    useEffect(() => {
        setCampaignId(location.state.campaign.campaignId)
        setCampaignName(location.state.campaign.campaignName)
        setCampaignDescription(location.state.campaign.campaignDescription);
        setCampaignImage(location.state.campaign.campaignImage);
        setAmountGoal(location.state.campaign.amountGoal)
    }, [location.state]);
    


    const updateAPIData = (e) => {
        e.preventDefault();
        axios.put(`/campaign/update-campaign/${campaignId}`, {
            campaignName, campaignDescription, campaignImage, amountGoal
            
        })
            .then(res=>{console.log(res.data);
            navigate('/campaign');
          }).catch(err=>console.log(err))

          
    }


    return (
        <div>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5 mt-2 bg-light">
                    <div className="jumbotron">
                    <button onClick={handleBack}>Back</button>

                        <h1 className="display-4 text-center">Update Campaign</h1>
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
                            <form onSubmit={updateAPIData}>
    
                            
                                <Form.Group controlId="scholarshipName">
                  <Form.Label>Campaign Name</Form.Label>
                  <Form.Control
                    type="text"
                    class= "form-control"
                    name="campaignName" 
                    value = {campaignName}
                    defaultValue = {location.state.campaign.campaignName}
                    placeholder = {location.state.campaign.campaignName}
                    onChange={(e) => setCampaignName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="scholarshipDescription">
                  <Form.Label>Campaign Description</Form.Label>
                  <Form.Control  as="textarea"
                    name="campaignDescription"
                    defaultValue = {location.state.campaign.campaignDescription}
                    placeholder = {location.state.campaign.campaignDescription}
                    value = {campaignDescription}

                    onChange={(e) => setCampaignDescription(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formLink">
                  <Form.Label>Campaign Goal</Form.Label>
                  <Form.Control
                    type="text"
                    name="amountGoal"
                    value = {amountGoal}
                    defaultValue = {location.state.campaign.amountGoal}
                    placeholder = {location.state.campaign.amountGoal}
                    onChange={(e) => setAmountGoal(e.target.value)}
                  />
                </Form.Group>


                                <div className="container text-center">
                                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Update Campaign</button>
                                    <CampaignDelete id = {location.state.campaign.campaignId}/>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}