import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "../../../axios";
import { useNavigate } from 'react-router-dom';


export default function DeleteLabel(props){

    const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const deleteLabel = (e) => {
    e.preventDefault();
    console.log(props.id)
    axios.delete(`preset/delete/${props.id}`)
        .then(res=>{
          console.log(res.data);
          window.location.reload();

      }).catch(err=>console.log(err))
}

return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Remove Label
      </Button>
      



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to remove this label?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={deleteLabel}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}