import { Card, Container } from "react-bootstrap";
import { CardBody } from "reactstrap";
import { Form, Button, FloatingLabel } from "react-bootstrap"
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from '../../../axios';
import Select from 'react-select'
import { useCallback } from "react";
import EmailForm from "./EmailForm";


export default function ContactMember(){

    const[final, setFinal] = useState();
    const [email, setEmail] = useState({
        subject: "",
       body: ""
     })

     const emailSend = (email) => {

        setEmail([
                    {
                        subject: email.subject,
                        body: email.body
    
                    }
        
        ]);
      };

      const[data, setData] = useState();
      const[options, setOptions] = useState([]);

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
    
          setFinal()
        },
        []
      );

      console.log(final)
    


      return(

        <div>


        <Container>
            <h3>
                Contact members
            </h3>


       

            <Select
       
       options={options}
       onChange={(e) => onOptionChange(e)}
     />
        
          <div>
              <EmailForm emailSend = {emailSend} />
          </div>


          </Container>

          </div>



      )
}