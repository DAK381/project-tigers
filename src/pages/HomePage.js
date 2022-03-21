import Slider from "../component/layout/Slider";
import { Link } from "react-router-dom";
import UpcomingEvent from "./UpcomingEvent";
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { queryByDisplayValue } from "@testing-library/react";

function Home() {

    return (
        <div>
            
        <Slider />

        <section className = "section">
            <div className = "container">
                <div className = "row">

                    <div classname = "col-md-12 text center">
                        <h3 className = "heading">WELCOME</h3>

                        <div className = "underline"></div>

                        <p className = "description">
                        
                        It is the mission of NAFA to provide supplemental funding for programs or projects to enhance the quality of instructional delivery and student life, and to
                        promote excellence in higher education at NHS.
                        If you have any information or event that needs to be featured on this site, please contact <a href="http://localhost:3000/contact-us">Dana Jefferson</a>, NAFA Executive Director.
                        </p>
                        
                    </div>
              

        


           {/* <div className = "underline2"></div> */}
 
           
            <div className = "container">
                
                        <h3 className = "heading">Upcoming Events</h3>

                        <div className = "underline"></div>
                        <UpcomingEvent />
                    </div>
                </div>
            </div>
            </section>
    
          
            
        
            
            </div>
            
    )
}

export default Home;