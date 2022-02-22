import photo1 from "../../Images/photo1.jpeg"
import photo2 from "../../Images/photo2.jpeg"
import photo3 from "../../Images/photo3.jpeg"
import Carousel from 'react-bootstrap/Carousel'
import "./Slider.css";
import Card from 'react-bootstrap/Card'
import { CardBody } from "reactstrap";


function Slider (){

    return(
<Card>
<Carousel className = "carousel-inner"> 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo1}
      alt="First slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {photo2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {photo3}
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>

</Card>
    )
}

export default Slider;