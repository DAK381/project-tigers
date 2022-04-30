import axios from '../../axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { Row, CardGroup, Alert } from 'react-bootstrap';
import Image from './Image';


function Pictures (props){
    const set = new Set();
    const [images,setImages]=useState([]);
    const [fileState,setFileState]=useState({
        selectedFile: undefined,
        previewImage: undefined
    });

    const [showError, setShowError] = useState(false);
    var errorMessage = ""
    if(props.isCarousel){
      errorMessage = "Please select at least 1 image."
    }
    else{
      errorMessage = "Please select only 1 image."
    }

    const loadPictures = () => {
      axios.get("/getAllImages/all").then((response)=>{
        setImages(response.data); 
      }).catch((e)=>{
        console.log(e);
      })
    }

    React.useEffect(()=>{
        loadPictures();
    }, [])

    const onFileChange = event => {
        setFileState({ 
            selectedFile: event.target.files[0],
            previewImage: URL.createObjectURL(event.target.files[0])
        });
      };
      
    const onFileUpload = () => {
        const formData = new FormData();
        formData.append("image", fileState.selectedFile);
    
        axios.post("/uploadImage", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then((response)=>{
          loadPictures();
        }).catch((e)=>{});
    };
    
    const setPictures = () => {
      if(props.isCarousel){
        if (set.size > 0){
          const carouselPictures = [];
          for (const picture of set) {
            carouselPictures.push(picture);
          }
          axios.post("/changeCarousel",  carouselPictures).then(() => {
            window.location.reload();
          }).catch((e) => {
            console.log(e);
          });

        }
        else{
          setShowError(true);
        }
      }
      else {
        if (set.size === 1){
          for (const picture of set) {
            props.setImage(picture);
          }
          props.onHide();
        }
        else{
          setShowError(true);
        }
      }
    }

    const removePictures = () => {
        for (const picture of set) {
            axios.post("/removeImages/" + picture ).then((response)=>{
              loadPictures();
            }).catch((e)=>{});;
        }
    }


    return (
        <Modal show={props.show} onHide={props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          {showError &&
            <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
              <Alert.Heading>{errorMessage}</Alert.Heading>
            </Alert>
          }
        <Modal.Header closeButton>
			  	<Modal.Title><h1>Select Pictures</h1></Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
            <CardGroup>
              <Row className='row-cols-1 row-cols-md-5 p-1 g-1'>
                {images &&
                  images.map((image) => (
                    <div key={image.id}>
                      <Image src={process.env.PUBLIC_URL + '/upload/' + image.name} alt="" name={image.name} set={set}/>
                    </div>
                  ))
                }
              </Row>

            </CardGroup>
          
        </Modal.Body>
		    <Modal.Footer>
          <Button onClick={setPictures}>
            Select
			    </Button>
          <Button onClick={removePictures}>
            Remove
			    </Button>

          <div>
            <p>Upload Pictures</p>
            <input type="file" name="image" onChange={onFileChange} accept="image/*"/>
          </div>

          {fileState.previewImage && (
          <div>
            <img className="preview" src={fileState.previewImage} alt="" style={{border: '1px solid #ddd',
                                                                                borderRadius: '4px',
                                                                                padding: '5px',
                                                                                width: '150px'}}/>
          </div>
          )}

			  	<Button onClick={onFileUpload}>
            Upload
			  	</Button>
			  </Modal.Footer>
			</Modal>
    )
}

export default Pictures;