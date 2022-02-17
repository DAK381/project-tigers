import './profile.css';

function Profile(){


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
                                <h1>Nischal Pokharel</h1>
                                <p>nischalp14@gmail.com</p>
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
                                        <p><span>First Name </span>: Nischal</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Last Name </span>: Pokharel</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Graduation year </span>: 2002</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Birthday</span>: 01/01/01</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Occupation </span>: Football player</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Email </span>: nischalp14@gmail.com</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Mobile </span>: 9999999999999</p>
                                    </div>
                                    <div className="bio-row">
                                        <p><span>Phone </span>: 111111111111</p>
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