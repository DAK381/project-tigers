import { useLocation, useNavigate } from "react-router-dom";
import { CardBody, List } from "reactstrap";
import { Container, Card} from "react-bootstrap";
import EventRegistration from "../component/Forms/EventRegistration";
function EventDetails(){

// const { name } = useParams();


// console.log(props.data)

// return(
//     <div>
//         {/* {
//             props.data.filter(
//                 (list) => list.name === name)
//                 .map(
//                     (list) => (
//                         <div key = { list.id }>

//                             <h3>list.firstName</h3>
//                             <h4>list.lastName</h4>


//                             </div>
//                     )
//                 )
//         } */}

//         <h1>{typeof(props.data)}</h1>
//         <h1>{props.data.firstName}</h1>
        
        

//     </div>
// )
const navigate = useNavigate();

const location = useLocation();
// function registerEvent(){
//     navigate('/memberRegisterEvent', {state:
//         {
//             id: location.state.id
//         }
//     });
// }


return(
    <div>

        

        <h1>  </h1>

        <Container>

        <Card>

        <Card.Img va driant="top" src="#" />

        
        <Card.Title>
        {location.state.name}
        </Card.Title>

        <CardBody>
           <h3>
           Details <h5>
           {location.state.name}
               </h5>
           </h3>
           <h4>
               Date: {location.state.name}
           </h4>

           <h4>
               Time: {location.state.name}
           </h4>

           <h4>
               Deadline: {location.state.name}
           </h4>

           <h4>
               Date Posted: {location.state.name}
           </h4>


        </CardBody>
        </Card>


    
    <EventRegistration />



        </Container>

    </div>
)

}

export default EventDetails;