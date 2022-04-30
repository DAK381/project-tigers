import Slider from "../component/layout/Slider";
import { Link } from "react-router-dom";
import UpcomingEvent from "./EventsForHome";
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { queryByDisplayValue } from "@testing-library/react";
import { Button } from "react-bootstrap";
import { getEvents } from "../AxiosRequests/axios";
import { useState, useEffect } from "react";

function Home(props) {
    const userData = props.userData;


    const [event, setEvents] = useState([]);

    useEffect(() => {
      getEvents()
        .then((response) => {
          console.log(response.data);
          setEvents(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }, []);


    return (
        <div>
            
        <Slider userData={userData}/>

        <Button>
                CHoose which events and scholarships to display on the homepage
            </Button>



        <section className = "section">
            <div className = "container">
                <div className = "row">

                    <div classname = "col-md-12 text center">
                        <h3 className = "heading">WELCOME</h3>

                        <div className = "underline"></div>
                        <div>
                        <p>
                        NAFA Membership is a way to show your support for Neville and the Alumni group.  
                        <br></br>If you are interested in becoming a member, you'll need to first create an account which you can do from this <a href="http://localhost:3001/sign-up">page</a>. 
                        <br></br>After creating your account, you'll be able to sign up for membership. If you are a previous NAFA , your information should be on file and signing up for membership will be even faster.
                        </p>
                        </div>
                    </div>
              

        
           

           {/* <div className = "underline2"></div> */}
 
           
            <div className = "container">
                
                        <h3 className = "heading">Upcoming Events</h3>

                        <div className = "underline"></div>
                        <UpcomingEvent/>
                    </div>
                </div>
            </div>
            </section>
    
          
            
        
            
            </div>
            
    )
}

export default Home;