import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Pictures from './Pictures';
import axios from '../../axios';


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
<Card>
  { userData.role === "ADMIN" && 
    <div>
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
          <img className="d-block w-100" src={process.env.PUBLIC_URL + '/upload/' + pic.name} alt=""/>
        </Carousel.Item>
    ))
  }
</Carousel>

</Card>
    )
}

export default Slider;