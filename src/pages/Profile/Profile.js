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
import ProfileCalendar from "./ProfileCalendar";
import { Row , Col, Form,Card } from 'react-bootstrap';
import ProfileCalendar from './ProfileCalendar'

function Profile(props) {
    const userData = props.userData;
    const [groups, setGroups] = useState([]);
    const [memberGroups, setMemberGroups] = useState([]);
    const [events, setEvents] = useState([]);
    const[relationshipData, setRelationshipData] = useState([]);
    const[allMembers, setMembers] = useState([]);

    
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
                                    <h1>{userData.firstName + ' ' + userData.lastName}</h1>

                                    </div>
                                    
                                <div className="text-center">
                                <div className="buttons"> <button className ="btn btn-warning btn-outline-dark " onClick = {updateProfile}>Edit Profile</button> 
                                </div>
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                    
                </div>
                <br/>
    
                </Row>
                </Container>
                
                
                

        

                {/* <div className="profile-info col-md-9">
                    <div className="card">
                        <div className="card-body">


                            <div className="panel">

                                <form>
                                    <textarea placeholder="Send a invite for upcoming event" rows="2"
                                        className="form-control input-lg p-text-area"></textarea>
                                </form>
                                <br />
                                <footer className="panel-footer">
                                    <button className="btn btn-warning">Send</button>

                                </footer>
                            </div>
                        </div>
                    </div>
                </div> */}
                 
                <br/>
                <div className="bio-info">
                <div className="card">
                    <div className="card-body">
                        <Container>
                        <div className="panel">
                            <div className="panel-body bio-graph-info">
                                <h2>Bio Graph</h2>
                                <hr/>
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
                                    <h2>Groups</h2>
                                    <hr/>
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
                                    <h2>Relationships:</h2>
                                    <hr/>
                                        
                                                
                                               {

                                                    userData && <RelationshipData userData = {userData} />


                                               } 

                                                <Relationship userData = {userData} members = {allMembers}/>
                                                
                                          
                                    </div>
                                
                            </div>

                        </div>
                    </div>
                    </div>

                    

                    <br/>
                    <div className="card">
                        <div className="card-body">

                            <div className="panel">

                                <div className="panel-body bio-graph-info">
                                    <h2>Events</h2>
                                    <hr/>

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
                    
                    
                    
                </div>
                
            </div>
            
        </div>
        

    
</div>
        
    )
}

export default Profile;
