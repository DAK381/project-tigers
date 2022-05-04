import Slider from "../../component/layout/Slider";
import UpcomingEvent from "./UpcomingEvents";
import { Nav, Link } from "react-bootstrap";
import UpcomingScholarships from "./UpcomingScholarships";

function Home(props) {
    const userData = props.userData;

    return (
    <div> 
            
        <Slider userData={userData}/>

        <section className = "section">
            <div className = "container">
                <div className = "row">

                    <div className = "col-md-12 text center">
                        <h3 className = "heading">WELCOME</h3>

                        <div className = "underline"></div>
                        <div>
                        <p>
                        NAFA Membership is a way to show your support for Neville and the Alumni group.  
                        <br></br>If you are interested in becoming a member, you'll need to first create an account which you can do from this <a href="/sign-up">page</a>. 
                        <br></br>After creating your account, you'll be able to sign up for membership. If you are a previous NAFA , your information should be on file and signing up for membership will be even faster.
                        </p>
                        </div>
                    </div>
              

        


           {/* <div className = "underline2"></div> */}
 
           
            <div className = "container">
                
                        <h3 className = "heading">Upcoming Events</h3>

                        <div className = "underline"></div>
                        <UpcomingEvent />
                    </div>

                    <div>
        <Nav.Link  href={`/events`}>
          <hr />
          <h5 className="text-center text-warning">View More Events</h5>
        </Nav.Link>
      </div>


      <div className = "container">
                
                <h3 className = "heading">Latest Scholarships</h3>

                <div className = "underline"></div>
                <UpcomingScholarships/>
            </div>

            <div>
<Nav.Link  href={`/scholarship`}>
  <hr />
  <h5 className="text-center text-warning">View More Scholarships</h5>
</Nav.Link>
</div>





                </div>
            </div>
            </section>
    
          
            
        
            
            </div>
            
    )
}

export default Home;