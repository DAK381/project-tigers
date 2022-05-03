import AdminNavigation from "../AdminNavigation";
import { Card, Container } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../../../axios';
import Select from 'react-select'
import { useCallback } from "react";

function AdminContact() {

    const location = useLocation();

    // const emails = location.state.arrayId;
    // console.log(emails)

    const[options, setOptions] = useState([]);

    const[final, setFinal] = useState([]);

    const navigate = useNavigate();


    // const emailArray = location.state.arrayId;

    const[subject, setSubject] = useState();

    const[body, setBody] = useState();

    const[data, setData] = useState();

    



    async function getData( ){
        axios.get("/admin/allMembers"
            )
            .then(
                (response) =>
                {
    
                     setData(response.data)
    
                     
         
                   const options = data && data.map(d => ({
    
                        "value" : d.id,
                        "label" : d.email
                  
                      }))
    
                      setOptions(options)

                    
    
                }
            )
    }

    useEffect(() => {
        getData();

    }, [data]);


    const onOptionChange = useCallback(
        (option) => {
          console.log("this is ", option);
    
          setFinal(...final, option)
        },
        []
      );
    
      console.log(final)


    for(var i = 0; i < final.length; i++){
        console.log(final[i].label)
        console.log(typeof final[i])
    }


    //   function sendEmails(){

    //     final.map(
    //         (email) => {
    //             console.log(typeof email)
    //             const toEmail = email.label

    //             console.log(toEmail)

    //             axios.get("admin/send-email", {toEmail, subject, body}).then(res=>{
                    
                    
    //                 navigate('/admin-member');
                    
    //               }).catch(err=>
    //                 {console.log("vayena")
    //                 console.log(err)}
    //               )
    //             }

    //     )
    //         }

    function sendEmails(e){
        console.log("HHIHIHII")
        e.preventDefault();
        final.map(
            email => {
                console.log(email.label)
            }
        )
    }
        

     


    return (

        <Container>
            <Container>
                <Card>
                    <CardBody>
                        <Card.Title>
                            <h3>Contact Members</h3></Card.Title>
                        <Form className="form-control">
                            

<Select
       
       options={options}
       isMulti
    //    defaultValue = {emails.map(ele => ele)}
       onChange={(e) => onOptionChange(e)}

    //    onChange={(e) => onOptionChangeRelative(e)}
     />



                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="Email Subject" value = {subject} 
                                name = "subject"  onChange={(e) => setSubject(e.target.value)}
                                />


                            <Form.Label>Body</Form.Label>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            name = "body"  onChange={(e) => setBody(e.target.value)}
                            style={{ height: '100px' }}
                            />
                            </FloatingLabel>

                            <Button variant="primary" type="submit" onCLick = {sendEmails}>
                                Send
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </Container>

        </Container>

        // contact members page

    )
}

export default AdminContact;