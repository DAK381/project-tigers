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
import { Row } from 'react-bootstrap';

function Profile(props) {
    const userData = props.userData;
    const [groups, setGroups] = useState([]);
    const [memberGroups, setMemberGroups] = useState([]);
    const [events, setEvents] = useState([]);
    const[relationshipData, setRelationshipData] = useState([]);

    const map = new Map();
    const groupNames = [];
    var memberGroupNames = [];

    for (let i=0; i<groups.length; i++) {
        groupNames.push(groups[i].groupName)
        map.set(groups[i].groupName, groups[i].groupId);
    }

    for (let i=0; i<memberGroups.length; i++) {
        memberGroupNames.push(memberGroups[i].groupName);
    }

    console.log(events)

    
    React.useEffect(() => {
        axios.get("/search/allgroup").then(res => {
            setGroups(res.data)
        }).catch(err => console.log(err))
        axios.get("/search/membersGroups/"+userData.id).then(res => {
            setMemberGroups(res.data)
        }).catch(err => console.log(err))

        axios.get(`admin/event/search/membersEvent/${userData.id}`).then(res => {
            setEvents(res.data)

            
        }).catch(err => console.log(err))

        // axios.get(`getallRelationship/${userData.id}`).then(res => {
        //     setRelationshipData(res.data)
        //     // console.log(relationshipData)
        // }).catch(err => console.log(err))
        
        
    }, [props.userData])


    console.log(relationshipData)
    

    const saveTags = () => {
        console.log(memberGroupNames)
        console.log(memberGroups)

        const formData = new FormData();

        // check which groups to add
        for(var i=0; i<memberGroupNames.length; i++) {
            var isIn=false;
            for(var k=0; k< memberGroups.length; k++) {
                if(memberGroupNames[i]===memberGroups[k].groupName) {
                    isIn=true;
                    break
                }
            }
            if(!isIn) {
                formData.append("add", map.get(memberGroupNames[i]));
            }
        }

        //check which groups to remove
        for(var i=0; i<memberGroups.length; i++) {
            var isIn=false;
            for(var k=0; k<memberGroupNames.length; k++) {
                if(memberGroups[i].groupName===memberGroupNames[k]) {
                    isIn=true;
                    break
                }
            }
            if(!isIn) {
                formData.append("remove", map.get(memberGroups[i].groupName));
            }
        }
        axios.put("updateUserGroups/" + userData.id, formData).then(() => {
            window.location.reload();
        }).catch((e) => {
            console.log(e);
        });
    }
    
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

                <div className="profile-nav col-md-3">

                    <div className="card">
                        <div className="card-body">


                            <div className="panel">
                                <div className="user-heading round">
                                    <div className="text-center"> 
                                    </div>
                                    <h1>{userData.firstName + ' ' + userData.lastName}</h1>
                                    <p>{userData.email}</p>
                                </div>

                                <div className="buttons"> <button className="btn btn-outline-primary" onClick = {updateProfile}>Edit Profile</button> <button
                                    className="btn btn-outline-primary">Activity</button> </div>
                                    
                            </div>
                        </div>
                    </div>

                </div>

                <div className="profile-info col-md-9">
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
                </div>

                <br/>

                <div className="bio-info">
                <div className="card">
                    <div className="card-body">

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
                                                <p><span>Your activities:</span></p>
                                                
                                                    <Tagged
                                                        initialTags={memberGroupNames}                          // initial tags (array of strings)
                                                        suggestions={groupNames}                          // suggestions (array of strings)
                                                        onChange={(tags) => {memberGroupNames=tags}}                  // called every a tag is added or removed, tags is an array of strings
                                                        suggestionWrapPattern="<b><u>$1</u></b>"  // how to highlight search pattern in suggestions
                                                        allowCustom={false}                       // when false, it will only allow tags from suggestions
                                                        inputPlaceholder="Add new tag"            // the input placeholder
                                                        suggestionsThreshold={1}                  // how many characters typed before suggestions appear
                                                        autoFocus={false}                         // put focus into the input field
                                                        reverse={false}                           // what should go first: tags or the input
                                                    />
                                                    <br></br>
                                                    <button type="button" className="btn-primary btn" onClick={saveTags}>Save</button>

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

                                                    userData.id && <RelationshipData id = {userData.id} />


                                               } 

                                                <Relationship userData = {userData}/>
                                          
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
                                   

                                    {events.map(event => (
                <AttendedEventCard key={event.id} event={event} />
               




))}  
         
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
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
                </div>
            </div>
        </div>

    

</div>
        
    )
}

export default Profile;
