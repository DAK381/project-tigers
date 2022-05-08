import AdminNavigation from "../AdminNavigation";
import { Card, Container } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../../../axios';
import Select from 'react-select'
import { useCallback } from "react";
import EmailForm from "./EmailForm";

function AdminContact() {

    const navigate = useNavigate();
    const location = useLocation();

    // const emails = location.state.arrayId;
    // console.log(emails)

    const [email, setEmail] = useState({
        subject: "",
       body: ""
     })

    // const[options, setOptions] = useState([]);

    const[final, setFinal] = useState([]);

    const[subject,setSubject] = useState();
    const[body, setBody] = useState();

    // const navigate = useNavigate();


    // const emailArray = location.state.arrayId;



    const[data, setData] = useState();

      const emailSend = (email) => {

    setEmail([
                {
                    subject: email.subject,
                    body: email.body

                }
    
    ]);

    setSubject(email.subject)
    setBody(email.body)
  };


  function getData( ){
    axios.get("/admin/allMembers"
        )
        .then(
            (response) =>
            {

                 setData(response.data)

            }
        )
}

useEffect(() => {
        getData();

    }, []);

    const options = data && data.map(d => ({
    
        "value" : d.id,
        "label" : d.email
  
      }))



    const onOptionChange = useCallback(
        (option) => {
            
          console.log("this is ", option);
    
          setFinal(option)
        },
        []
      );

     console.log(final)


    for(var i = 0; i < final.length; i++){
        console.log(final[i].label)
        console.log(typeof final[i])
    }


      function sendEmails(){

        final.map(
            (final) => {
                console.log(email)
                console.log(typeof email)

                const toEmail = final.label

                console.log(toEmail, subject,  body)

                axios.post("/admin/send-email", {toEmail, subject, body}).then(res=>{

                    navigate('/admin-member');
                    
                  }).catch(err=>
                    {
                    console.log(err)}
                  )
                }

        )
            }

    // function sendEmails(e){

    //     e.preventDefault();

    //     console.log("HHIHIHII")
        
    //     final.map(
    //         email => {
    //             console.log(email.label)
    //         }
    //     )
    // }

    console.log(email)

    return (

        <Container>
            <Container>
                <Card>
                    <CardBody>
                        <Card.Title>
                            <h3>Contact Members</h3></Card.Title>

                            {
                                location.state? 
                                <Select
       
                         options={options}
                             isMulti
                 defaultValue = {location.state.arrayId.map(ele => ele)}
                         onChange={(e) => {
                        onOptionChange(e)
    }}

     />:
     <Select
       
                         options={options}
                             isMulti
                //  defaultValue = {emails.map(ele => ele)}
                         onChange={(e) => {
                        onOptionChange(e)
    }}

     />
                            }
                        

<EmailForm emailSend = {emailSend} />



                                
                            <Button variant="primary" onClick = {sendEmails}>
                                Send
                            </Button>
                      
                    </CardBody>
                </Card>
            </Container>

        </Container>

        // contact members page

    )
}

export default AdminContact;