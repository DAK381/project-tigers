import photo1 from "../../Images/nafa1.jpg"
import photo2 from "../../Images/nafa2.jpeg"
import photo3 from "../../Images/nafa3.jpg"
import Carousel from 'react-bootstrap/Carousel'
import "./Slider.css";
import Card from 'react-bootstrap/Card'
import { CardBody } from "reactstrap";
import axios from '../../axios';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


function Slider (props){
  const userData = props.userData;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

  const [images,setImages]=useState([]);
  const [fileState,setFileState]=useState({
      selectedFile: undefined,
      previewImage: undefined
  });
  
  const onFileChange = event => {
    setFileState({ 
      selectedFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0])
    });
  };
  
  const onFileUpload = () => {
    const formData = new FormData();
  
    formData.append("file", fileState.selectedFile);
    console.log(fileState.selectedFile);
    console.log(formData.get('file'));
    axios.post("/uploadImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
  });
  };

    return(
<Card>
  { userData.role === "ADMIN" && 
  <div>
    <div>
      <Button variant="primary" onClick={handleShow}>
				Upload Pictures
			</Button>
			<Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			  <Modal.Header closeButton>
			  	<Modal.Title>Pictures</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
          <div className="card-header">All Pictures</div>
            <ul className="list-group list-group-flush">
              {images &&
                images.map((img, index) => (
                  <li className="list-group-item" key={index}>
                    <a href={img.url}>{img.name}</a>
                  </li>
                ))}
            </ul>
          <div>
          <p>Upload Pictures</p>
          <input type="file" onChange={onFileChange} />
          </div>
          {fileState.previewImage && (
          <div>
            <img className="preview" src={fileState.previewImage} alt="" />
          </div>
        )}
        </Modal.Body>
			  <Modal.Footer>
			  	<Button onClick={onFileUpload}>
            Upload
			  	</Button>
			</Modal.Footer>
			</Modal>
    </div>
  </div> }
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