import { CardBody } from "reactstrap";
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";

export default function EmailForm({emailSend})
{
    const [email, setEmail] = useState({
         subject: "",
        body: ""
      })

    // const[subject, setSubject] = useState();

    // const[body, setBody] = useState();

    const handleChange = (event) => {
        setEmail({ ...email, [event.target.name]: event.target.value });
    
      };


      const handleSubmit = (event) => {
        event.preventDefault();
    
        emailSend(email);
    
        // setQuery({ firstName: "", lastName: "", group: "", graduationYear: ""});
        
      };
    

    return(
        <div>

<Container>
            <Container>
                <Card>
                    <CardBody>
                        

                            
                        <Form className = "form-control" onSubmit = {handleSubmit}>

                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Email Subject" value = {email.subject} 
                                name = "subject"  onChange={handleChange}
                                />


                            <Form.Label>Body</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            value = {email.body}
                            name = "body"  onChange={handleChange}
                            style={{ height: '100px' }}
                            />
                            </FloatingLabel>

                            <Button variant="primary" type="submit">
                                Confirm Subject and Body of the Email
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </Container>

        </Container>

        </div>
    )
}