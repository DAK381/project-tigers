import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import About from "./components/about";
import Events from "./components/events";
import Grants from "./components/grants";
import Home from "./components/home";
import Membership from "./components/membership";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="content">
                    <Routes>
                        <Route path="/about" component={About} /> 
                        <Route path="/membership" component={Membership} />
                        <Route path="/grants" component={Grants} />
                        <Route path="/events" component={Events} />
                        <Route path="/" component={Home} />
                    </Routes>
                </div>
            </div>
          
        );
    }
}

export default App;