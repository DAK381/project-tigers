import './profile.css';
import React, {useState} from 'react';
import { Button,Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../authenticationService';
import axios from "../../axios";


// function getGroups(data){
//     let groups = '';
//     for (let i = 0; i<data.length; i++) {
//         groups += data[i].groupName + "<br>";
//     }
//     return groups;
// }

function Profile(props){

    const [data,setData]=useState({});
    const [groups,setGroups]=useState([]);
    
    axios.get("/search/allgroup").then(res=>{
        setGroups(res.data)
        console.log(groups);
    }).catch(err=>console.log(err))

    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data);
        }).catch((e)=>{
            localStorage.clear();
            props.history.push('/');
        })
    },[])



    return (
<div className="container bootstrap snippets bootdey">
        <div className="row">

            <div className="profile-nav col-md-3">

                <div className="card">
                    <div className="card-body">


                        <div className="panel">
                            <div className="user-heading round">
                                <div className="text-center"> <img src="bojack.0.0.jpg" width="200" className="rounded-circle"/>
                                </div>
                                <h1>{data.firstName + ' ' + data.lastName}</h1>
                                <p>{data.email}</p>
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
                <br/>
                <div className="card">
                    <div className="card-body">

                        <div className="panel">
                            <div className="panel-body bio-graph-info">
                                <h1>Bio Graph</h1>
                                <div className="row">
                                    <div className="bio-row">
                                        <p><span>First Name: </span>{data.firstName}</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Last Name: </span>{data.lastName}</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Graduation year: </span></p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Birthday: </span></p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Email: </span>{data.email}</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Phone: </span>{data.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <br/>
                <div className="card">
                    <div className="card-body">

                        <div className="panel">
                            <div className="panel-body groups">
                                <h1>Groups</h1>
                                <div className="row">
                                    <div className="bio-row">
                                        <p><span>All groups:</span></p>
                                        <form>
                                                {
                                            groups.map(group =>
                                                <p key={group.groupId}>
                                                    <input type="checkbox" id={group.groupId} name={group.groupName} value={group.groupName} />
                                                    <span> {group.groupName}</span>
                                                </p>      
                                                )}
                                        </form>
                                    </div>
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
                                <h1>Events attended</h1>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h3 className="text">Blood Drive</h3>
                                                <h4 className="lead">December 14, 2019</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h3>Food station</h3>
                                                <h4 className="lead">January 21, 2021</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h3>Fundraiser Camp</h3>
                                                <h4 className="lead">February 2, 2021</h4>
                                            </div>
                                        </div>
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

                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile;
