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

  
//  const current = props.memberGroups && props.memberGroups.map(d => ({

//                     "value" : d.groupId,
//                     "label" : d.groupName + " " + d.groupYear
              
//                   }))

  

console.log(options)
// console.log(current)




const onOptionChangeAdd = useCallback(
    (option) => {
      console.log("this is ", option);
      setAddSelected(option)
    },
    []

    
  );

//   const onOptionChangeRemove = useCallback(
//     (option) => {
//       console.log("this is ", option);
//       setRemoveSelected(option)
      
//     },
//     []

    
//   );

 
function addGroup(e){
    e.preventDefault();

    addSelected.map(
    (group) => {
        axios.put(`/addUserToGroup/${group.value}/${props.id}`).then(() => {
            // window.location.reload();
                  }).catch((e) => {
            console.log(e);
        });

        
        

    }

    
    )

    window.location.reload();
}

// function removeGroup(e){
//   e.preventDefault();

//   removeSelected.map(
//   (group) => {
//       axios.delete(`/user/${props.id}/remove/${group.value}`).then(() => {

//         console.log(group.label, " added.")
         
//       }).catch((e) => {
//           console.log(e);
//       });
      

//   }

  
//   )

//   window.location.reload();
// }



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
       Add Group
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Add your groups</Modal.Title>
        </Modal.Header>

        <ModalBody>

        

        <Select
       options={options}
       isMulti
       onChange={(e) => onOptionChangeAdd (e)}
     />
   
   <Button variant="secondary" onClick={addGroup}>
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