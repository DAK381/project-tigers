import axios from "../../axios";
import { useState, useEffect, useCallback} from 'react';
import Select from 'react-select'
import { LoadingSpinner } from "../../component/Loader/Loader";
import { Button, ModalBody } from "react-bootstrap";
import MemberGroupShow from "./MemberGroupShow";
import { Modal } from "react-bootstrap";


export default function AddMemberGroup(props){

  const[addSelected, setAddSelected] = useState([]);
 


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 const options = props.groups && props.groups.map(d => ({

                    "value" : d.groupId,
                    "label" : d.groupName + " " + d.groupYear
              
                  }))

  
 const current = props.memberGroups && props.memberGroups.map(d => ({

                    "value" : d.groupId,
                    "label" : d.groupName + " " + d.groupYear
              
                  }))


  
const notAddedOptions = options.filter(({ value: id1 }) => !current.some(({ value: id2 }) => id2 === id1));
console.log(notAddedOptions)

const onOptionChangeAdd = useCallback(
    (option) => {
      console.log("this is ", option);
      setAddSelected(option)
    },
    []

    
  );

 
function addGroup(e){


        axios.put(`/addUserToGroup/${addSelected.value}/${props.id}`).then(() => {
          
                }).catch((e) => {
          console.log(e);
      });

    window.location.reload();

}



return (
  <div>
    <Button variant="primary" onClick={handleShow}>
       Add Group
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add your groups</Modal.Title>
        </Modal.Header>

        <ModalBody>

        

        <Select
       options={notAddedOptions}
      //  isMulti
       onChange={(e) => onOptionChangeAdd (e)}
     />
   
   <Button variant="secondary" onClick={(e) => addGroup(e)}>
										Save
									</Button>
        <br>
        </br>
        <br>
        </br>


</ModalBody>


    


        </Modal>


  </div>
)


}