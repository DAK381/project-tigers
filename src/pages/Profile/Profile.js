import './profile.css';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import axios from "../../axios";
import { Tagged } from 'react-tagged'
import { useNavigate } from 'react-router-dom';
import 'react-tagged/dist/index.css' // styles
import AttendedEventCard from './AttendedEventCard';
import Relationship from './Relationship';
import { LoadingSpinner } from '../../component/Loader/Loader';
import RelationshipData from './RelationshipData';
import MemberGroup from './MemberGroup';
import MemberGroupShow from './MemberGroupShow';
import { Row , Col, Form,Card } from 'react-bootstrap';
import ProfileCalendar from './ProfileCalendar';
import { Modal } from 'react-bootstrap';
import ProfileEdit from './UserEdit';

function Profile(props) {

    const[loading, setLoading] = useState(true)
    const userData = props.userData;
    const [groups, setGroups] = useState([]);
    const [memberGroups, setMemberGroups] = useState([]);
    const [events, setEvents] = useState([]);
    const[relationshipData, setRelationshipData] = useState([]);
    const[allMembers, setMembers] = useState([]);
    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

    
    
    React.useEffect(() => {
       

       
        axios.get("/search/allgroup").then(res => {
            setGroups(res.data)
            console.log('groups');
        }).catch(err => console.log(err))
        axios.get("/search/membersGroups/"+userData.id).then(res => {
            setMemberGroups(res.data)
            console.log('membergroups');
        }).catch(err => console.log(err))

        axios.get(`admin/event/search/membersEvent/${userData.id}`).then(res => {
            setEvents(res.data)
            console.log('memberevents');

        }).catch(err => console.log(err))

        axios.get("/admin/allMembers").then(res => {
            setMembers(res.data)

        }).catch(err => console.log(err))
        
        if(userData){
            setLoading(false)
        }
        
    }, [userData.id])


    console.log(relationshipData)
    
    const navigate = useNavigate();

    function updateProfile(){
		navigate('/profile-edit', {state:
			{
                admin: props.admin,
				data:userData

			}
		});
	}

if(loading){
    return(
        <LoadingSpinner />
    )
}

else{


    
    return (
        
    
            <div>
            
            <div className="container bootstrap snippets bootdey">
            <div className="row">
            <Container fluid>
            <br></br>
            <Row className="row justify-content-center">
        
            
 
            
                <div className="profile-nav col-md-3">
                

                    <div className="card">
                        <div className="card-body">


                            <div className="panel">
                                    <div className="text-center"> 
                                    <h2>{userData.firstName + ' ' + userData.lastName}</h2>
                                    <p>{userData.email}</p>
                                    </div>
                                    

                                <div className="buttons"> <button className="btn btn-outline-primary" onClick = {handleShow}>Edit Profile</button> <button
                                    className="btn btn-outline-primary">Activity</button> </div>
                                    
                            </div>
                        </div>
                    </div>
                    
                </div>
                <br/>

                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
								<Modal.Header closeButton>
									

	

								</Modal.Header>
								<Modal.Body>
                                    <h3>
                                        Edit Profile Information
                                    </h3>
                                    
                                    <ProfileEdit user = {userData} />

                                    
                                    </Modal.Body>
										
								
								
							</Modal>

    
                </Row>
                </Container>
                
                
                

        

                 
                <br/>
                <div className="bio-info">
                <div className="card">
                    <div className="card-body">
                        <Container>
                        <div className="panel">
                            <div className="panel-body bio-graph-info">
                                <h1>Bio Graph</h1>
                                <div className="row">
                                    <div className="bio-row">
                                        <p><span>First Name: </span>{userData.firstName}</p>
                                    </div>

                                    { userData.maidenName && 
                                        <div className="bio-row">
                                            <p><span>Maiden Name: </span>{userData.maidenName}</p>
                                        </div>
                                    }   

                                    <div className="bio-row">
                                        <p><span>Last Name: </span>{userData.lastName}</p>
                                    </div>
                                    
                                    {userData.graduatedYear && 
                                        <div className="bio-row">
                                            <p><span>Graduation year: </span>{userData.graduatedYear}</p>
                                        </div>
                                    }

                                    <div className="bio-row">
                                        <p><span>Birthday:</span>{userData.birthdate}</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Email: </span>{userData.email}</p>
                                    </div>

                                    <div className="bio-row">
                                        <p><span>Address: </span>{userData.address}</p>
                                    </div>

                                    <div className="bio-row">
                                        <p><span>Phone: </span>{userData.phone}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </Container>
                    </div>
                    </div>
                    <br />
                    <div className="activities-info">
                    <div className="card">
                        <div className="card-body">

                            <div className="panel">
                                
                                    
                                    <div className="panel-body bio-graph-info">
                                    <h1>Groups</h1>
                                        <div className="row">
                                            <div className="bio-row">
                                        

                                                    {
                                                        userData && <MemberGroup id = {userData.id} groups = {groups} memberGroups = {memberGroups} />
                                                    }

                                           

{
    
    memberGroups.length === 0? 
    <h2>
        You are not in any groups
    </h2>:
    <div>

        {
            memberGroups.map(
                (data) => (
                    <div key = {data.id}>


                    <MemberGroupShow data = {data} />

                    </div>
                )
            )
        }
        </div>
}
                                                
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>

                        </div>
                    </div>
                    </div>
                    <br />

                    <div className="activities-info">
                    <div className="card">
                        <div className="card-body">

                            <div className="panel">
                                
                                    
                                    <div>
                                    <h1>Relationships:</h1>
                                        
                                                
                                               {

                                                    userData && <RelationshipData userData = {userData} />


                                               } 

                                                <Relationship userData = {userData} members = {allMembers} />
                                          
                                    </div>
                                
                            </div>

                        </div>
                    </div>
                    </div>

                    


                    <div className="card">
                        <div className="card-body">

                            <div className="panel">

                                <div className="panel-body bio-graph-info">
                                    <h1>Events</h1>

                                    <div>
                      {userData &&   <ProfileCalendar events = {events} />}
                    </div>
                                   

                                    {events.map(event => (
                <AttendedEventCard key={event.id} event={event} />
               




))}  
         
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <Container>
                    <div className="card">
                        <div className="card-body">

                            <div className="panel">

                                <div className="panel-body bio-graph-info">
                                    <h1>Contributions</h1>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3 className="text">Donation </h3>
                                                    <h4 className="lead">$50.00 processed through paypal on 09/09/2019</h4>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h3>Donation</h3>
                                                    <h4 className="lead">$25.00 processed through paypal on 07/15/2020</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </Container>
                </div>
                
            </div>
            
        </div>
        

    
</div>
        


        
        
    )
}
}

export default Profile;
