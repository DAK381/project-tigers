import './profile.css';
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../authenticationService';
import axios from "../../axios";
import Checkboxes from './Checkboxes';
import Checkbox from './Checkbox';
import { Tagged } from 'react-tagged'
import { useNavigate } from 'react-router-dom';
import 'react-tagged/dist/index.css' // styles
import AttendedEventCard from './AttendedEventCard';

const selectedCheckboxes = new Set();
const selectedRemoveCheckboxes = new Set();

function Profile(props) {
    const userData = props.userData;
    const [groups, setGroups] = useState([]);
    const [memberGroups, setMemberGroups] = useState([]);
    const [events, setEvents] = useState([]);

    React.useEffect(() => {
        axios.get("/search/allgroup").then(res => {
            setGroups(res.data)
        }).catch(err => console.log(err))
        console.log(userData.firstName);
        axios.get("/search/membersGroups/"+userData.id).then(res => {
            setMemberGroups(res.data)
        }).catch(err => console.log(err))

        axios.get(`admin/event/search/membersEvent/${userData.id}`).then(res => {
            setEvents(res.data)
        }).catch(err => console.log(err))
        
    }, [userData])

    const toggleCheckbox = id => {
        if (selectedCheckboxes.has(id)) {
            selectedCheckboxes.delete(id);
        } else {
            selectedCheckboxes.add(id);
        }
        console.log(selectedCheckboxes);
    }

    const toggleRemoveCheckbox = id => {
        if (selectedRemoveCheckboxes.has(id)) {
            selectedRemoveCheckboxes.delete(id);
        } else {
            selectedRemoveCheckboxes.add(id);
        }
    }

    const handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        for (const checkbox of selectedCheckboxes) {
            axios.put("/addUserToGroup/" + checkbox + "/" + userData.id);
        }
        window.location.reload();
    }

    const removeGroup = r => {
        r.preventDefault();

        for (const checkbox of selectedRemoveCheckboxes) {
            axios.put("/user/" + userData.id + "/remove/" + checkbox);
        }
        window.location.reload();
    }

    return (
        <div className="container bootstrap snippets bootdey">
            <div className="row">

                <div className="profile-nav col-md-3">

                    <div className="card">
                        <div className="card-body">


                            <div className="panel">
                                <div className="user-heading round">
                                    <div className="text-center"> <img src="bojack.0.0.jpg" width="200" className="rounded-circle" />
                                    </div>
                                    <h1>{userData.firstName + ' ' + userData.lastName}</h1>
                                    <p>{userData.email}</p>
                                </div>

                                <div className="buttons"> <button className="btn btn-outline-primary">Edit Profile</button> <button
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


                <div className="card">
                    <div className="card-body">

                        <div className="panel">
                            <div className="panel-body bio-graph-info">
                                <h1>Bio Graph</h1>
                                <div className="row">
                                    <div className="bio-row">
                                        <p><span>First Name: </span>{userData.firstName}</p>
                                    </div>

                                    <div className="bio-row">
                                        <p><span>Maiden Name: </span>{userData.maidenName}</p>
                                    </div>

                                    <div className="bio-row">
                                        <p><span>Last Name: </span>{userData.lastName}</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Graduation year: </span>{userData.graduatedYear}</p>
                                    </div>
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
                    <br />
                    <div className="card">
                        <div className="card-body">

                            <div className="panel">
                                <div className="panel-body groups">
                                    <h1>Groups</h1>
                                    <div className="row">
                                        <div className="bio-row">
                                            <div className="bio-row">
                                                <p><span>Your activities:</span></p>
                                                <form >
                                                    {
                                                        memberGroups.map(memberGroups =>
                                                            <div key={memberGroups.groupId}>
                                                                <Checkbox id={memberGroups.groupId} label={memberGroups.groupName} handleCheckboxChange={toggleRemoveCheckbox} />
                                                            </div>
                                                        )}
                                                    <button type="button" className="btn-primary btn" onClick={removeGroup}>remove</button>
                                                </form>
                                            </div>
                                            <p><span>All activities:</span></p>
                                            <form >
                                                {
                                                    groups.map(group =>
                                                        <div key={group.groupId}>
                                                            <Checkbox id={group.groupId} label={group.groupName} handleCheckboxChange={toggleCheckbox} />
                                                        </div>
                                                    )}
                                                <button type="button" className="btn-primary btn" onClick={handleFormSubmit}>Save</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="card-body">

                            <div className="panel">

                                <div className="panel-body bio-graph-info">
                                    <h1>Events attended</h1>
                                   

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

                    <div>
                        <Tagged
                            initialTags={[]}                          // initial tags (array of strings)
                            suggestions={[]}                          // suggestions (array of strings)
                            onChange={(tags) => { }}                   // called every a tag is added or removed, tags is an array of strings
                            suggestionWrapPattern="<b><u>$1</u></b>"  // how to highlight search pattern in suggestions
                            allowCustom={true}                        // when false, it will only allow tags from suggestions
                            inputPlaceholder="Add new tag"            // the input placeholder
                            suggestionsThreshold={1}                  // how many characters typed before suggestions appear
                            autoFocus={false}                         // put focus into the input field
                            reverse={false}                           // what should go first: tags or the input
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile;
