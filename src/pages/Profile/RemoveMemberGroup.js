import axios from "../../axios";
import { useState, useEffect, useCallback} from 'react';
import Select from 'react-select'
import { LoadingSpinner } from "../../component/Loader/Loader";
import { Button, ModalBody } from "react-bootstrap";
import MemberGroupShow from "./MemberGroupShow";
import { Modal } from "react-bootstrap";


export default function RemoveMemberGroup(props){


  const[removeSelected, setRemoveSelected] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 const current = props.memberGroups && props.memberGroups.map(d => ({

                    "value" : d.groupId,
                    "label" : d.groupName + " " + d.groupYear
              
                  }))

  
console.log(current)





  const onOptionChangeRemove = useCallback(
    (option) => {
      console.log("this is ", option);
      setRemoveSelected(option)
      
    },
    []

    
  );

 


function removeGroup(){


  
      axios.delete(`/user/${props.id}/remove/${removeSelected.value}`).then(() => {

        // console.log(group.label, " removed.")
         
      }).catch((e) => {
          console.log(e);
      });
      


  window.location.reload();
}





return (
  <div>
    <Button variant="primary" onClick={handleShow}>
       Remove Groups
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Remove your group</Modal.Title>
        </Modal.Header>

        <ModalBody>

    
        <Select
       options={current}
      //  isMulti
       onChange={(e) => onOptionChangeRemove (e)}
     />

<Button variant="secondary" onClick={(e) => removeGroup(e)}>
										Save
									</Button>

</ModalBody>


    


        </Modal>


  </div>
)


}