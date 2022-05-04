import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from '../../axios';
import { Button } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";


export default function UpdateAbout(props){

    const[description, setDescription] = useState([]);

    const [formData, setFormData] = useState();

    const update = (e) => {
        e.preventDefault();
        console.log(description)
        axios.put(`/about/update/${2}`, {
            description
        })
            .then(res=>{console.log(res.data);
                
                window.location.reload();
          }).catch(err=>console.log(err))
    }

    return(
        <div>

{/* <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control  as="textarea"
                    defaultValue = {props.about}
                    name="eventDescription"
                    value={description}
                    placeholder= {props.about} 
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group> */}
               


                <Editor
      initialValue={description}
      init={{
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
      }}
      onChange={(e) => setDescription(e.target.value)}
    />
     <Button onClick = {update}>
                    Update
                </Button>

        </div>
    )



}


