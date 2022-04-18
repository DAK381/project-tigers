import photo1 from "../../Images/nafa1.jpg";
import photo2 from "../../Images/nafa2.jpeg";
import photo3 from "../../Images/nafa3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Pictures from './Pictures';


function Slider (props){
  const userData = props.userData;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);







    return(
<Card>
  { userData.role === "ADMIN" && 
    <div>
      <Button variant="primary" onClick={handleShow}>
				Upload Pictures
			</Button>
      <Pictures show={show} onHide={handleClose}/>
    </div>
	}


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