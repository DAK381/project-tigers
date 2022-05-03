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

 


function removeGroup(e){
  e.preventDefault();

  removeSelected.map(
  (group) => {
      axios.delete(`/user/${props.id}/remove/${group.value}`).then(() => {

        console.log(group.label, " added.")
         
      }).catch((e) => {
          console.log(e);
      });
      

  }

  
  )

  window.location.reload();
}



// return(

//     <div>

    
//     {/* {loading?

//     <LoadingSpinner />

//     : */}
// <div>


//     <h2>
//         Select groups you want to add yourselves to.
//     </h2>
//     <Select

    
//        options={options}
//        isMulti
//        onChange={(e) => onOptionChangeAdd (e)}
//      />
   
//    <Button variant="secondary" onClick={addGroup}>
// 										Save
// 									</Button>
    

// <h2>
//     Select groups you want to remove yourselves from
// </h2>


//      <Select


//        options={current}
//        isMulti
//        onChange={(e) => onOptionChangeRemove(e)}
//      />

//      </div>
//      {/* } */}

// <div>



// </div>
     


// </div>


     
     
     
// )

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
       isMulti
       onChange={(e) => onOptionChangeRemove (e)}
     />

<Button variant="secondary" onClick={removeGroup}>
										Save
									</Button>

</ModalBody>


    


        </Modal>


  </div>
)


}