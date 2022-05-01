import Select from 'react-select'
import axios from "../../axios";
import React, { useState, useEffect, useCallback} from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default function Relationship(props){


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[data, setData] = useState();

  const[options, setOptions] = useState();

  const relationshipOptions = [
	{
		value: "1",
		label: "Parent"
	},
	{
		value: "2",
		label: "Children"
	},
	{
		value: "3",
		label: "Spouse"
	},

    {
		value: "4",
		label: "Sibling"
	}
	
]


  const [relationship, setRelationship] = useState();

  const[selectedId, setSelectedId] = useState();

  const[selected, setSelected] = useState();



  

  async function getData( ){
    axios.get("/admin/allMembers"
        )
        .then(
            (response) =>
            {

                 setData(response.data)

                
              

                const options = data.map(d => ({

                    "value" : d.id,
                    "label" : d.firstName + " " + d.maidenName + " " + d.lastName
              
                  }))

                  setOptions(options)
                

            }
        )
}

useEffect(() => {
        getData();

    }, [data]);



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

  function addRelation(){

    console.log("You have added ", selected.label, " with id ", selected.value, " as your ", relationship)
    window.location.reload();

  }



    return(
        <div>

<Button variant="primary" onClick={handleShow}>
        Relationship
      </Button>

      



      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Search members to add your relationship</Modal.Title>
        </Modal.Header>

        <ModalBody>

        <h3>Seach for a member: </h3>
        <Select
       
        options={options}
        onChange={(e) => onOptionChangeRelative(e)}
      />

<h3>Select relationship: </h3>

        <Select
       
       options={relationshipOptions}
       onChange={(e) => onOptionChangeRelationship(e)}
     />



        </ModalBody>
        

        <Modal.Footer>
									<Button variant="secondary" onClick={addRelation}>
										Add relation
									</Button>
								</Modal.Footer>

      </Modal>
    



        </div>
    )
}