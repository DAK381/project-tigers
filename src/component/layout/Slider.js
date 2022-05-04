import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Pictures from './Pictures';
import axios from '../../axios';
import Image from 'react-bootstrap/Image'


function Slider (props){
  const userData = props.userData;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  const [carouselPictures, setCarouselPictures]=useState([]);

  React.useEffect(()=>{
    axios.get("/getAllImages/carousel").then((response)=>{
      setCarouselPictures(response.data); 
    }).catch((e)=>{
      console.log(e);
    })
  }, [])
  

  return(
    
<Card style={{margin: "10px 200px 10px 200px"}}>
  { userData.role === "ADMIN" && 
    <div className="position-absolute" style={{ zIndex: 2 }}>
      <Button variant="primary" onClick={handleShow}>
				Change Pictures
			</Button>
      <Pictures show={show} onHide={handleClose} isCarousel={true} />
    </div>
	}


<Carousel className = "carousel-inner"> 
  { carouselPictures &&
    carouselPictures.map((pic) => (
        <Carousel.Item key={pic.id}>
          <Image className="d-block w-100" src={process.env.PUBLIC_URL + '/upload/' + pic.name} alt="" fluid/>
        </Carousel.Item>
    ))
  }
</Carousel>

</Card>
    )
}

export default Slider;