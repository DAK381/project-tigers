import Select from 'react-select'
import axios from "../../axios";
import { useState, useEffect, useCallback} from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { LoadingSpinner } from '../../component/Loader/Loader';

export default function Relationship(props){

  const userData=props.userData;
  const members = props.members;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[loading, setLoading] = useState(false);

  const[data, setData] = useState();

  // const[options, setOptions] = useState();

  const [relationship, setRelationship] = useState();

  const[selectedId, setSelectedId] = useState();

  const[selected, setSelected] = useState();

  const relationshipOptions = [
	{
		value: "1",
		label: "PARENT"
	},
	{
		value: "2",
		label: "CHILDREN"
	},
	{
		value: "3",
		label: "SPOUSE"
	},

    {
		value: "4",
		label: "SIBLING"
	}
	
]

console.log(members)
const options = members && members.map(
  d => ({

    "value" : d.id,
    "label" : d.firstName + " " + d.maidenName + " " + d.lastName

  }))


const onOptionChangeRelative = useCallback(
    (option) => {
      console.log("this is ", option);

      setSelected(option)
      setSelectedId(option.value);
    },
    []
  );


  const onOptionChangeRelationship = useCallback(
    (option) => {
      console.log("this is ", option);

      setRelationship(option.label)
    },
    []
  );

  function addRelation(e){

    e.preventDefault()
    axios.post(`/relationship/${userData.id}/${relationship}/${selectedId}`).then(res => {
      console.log(res.data)
      console.log("You have added ", selected.label, " with id ", selected.value, " as your ", relationship)
      window.location.reload();
  }).catch(err => console.log(err))
   

  }
  console.log('Relationship component is reloading repeatedly');


    return(
        <div>

<Button className ="btn btn-warning btn-outline-dark " onClick={handleShow}>
       Add Relationship
      </Button>
      <br/>

      

      

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Search members to add your relationship</Modal.Title>
        </Modal.Header>

       

          <ModalBody>

        <h3>Seach for a member: </h3>
        {
          loading? 
          <LoadingSpinner />:
        <Select
       
        options={options}
        onChange={(e) => onOptionChangeRelative(e)}
      />}

<h3>Select relationship: </h3>

        <Select
       
       options={relationshipOptions}
       onChange={(e) => onOptionChangeRelationship(e)}
     />


<Modal.Footer>
                <div class="text-center">
									<Button className ="btn btn-warning btn-outline-dark " onClick={addRelation}>
										Add relation
									</Button>
                </div>
                
								</Modal.Footer>

        </ModalBody>
        </Modal>
        

        
        

        

     
    



        </div>
        
    )
}