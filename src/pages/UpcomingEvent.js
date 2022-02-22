import Slider from "../component/layout/Slider";
import { Link } from "react-router-dom";
import UpcomingEvent from "./UpcomingEvent";
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home() {

    return (
        
        
       <div className = "body">
        <Slider />
        <Container>
        <section className = "section">
             


                    <div classname = "col-md-12 text center">
                        <h3 className = "heading">WELCOME</h3>

                        <div className = "underline"></div>

                        <p className = "description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>

           {/* <div className = "underline2"></div> */}
 
           
            <div className = "container">
                
                        <h3 className = "heading">Upcoming Events</h3>

                        <div className = "underline"></div>

                       
                            <UpcomingEvent />
                          
                        
                    </div>
                
            </section>
    
          
            
        
            
           
            </Container>
            </div>
            
    )
}

export default Home;
