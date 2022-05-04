import React from 'react'
import { Container, Form, Card, Button, Row, Col } from "react-bootstrap";
import axios from '../../axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { LoadingSpinner } from '../../component/Loader/Loader';
import AboutContainer from './AboutContainer';
import Staff from './Staff';



export default function AboutPage(props){

const id = 2;
  const[data, setData] = useState([]);
  const[loading, setLoading] = useState(true)
const[about, setAbout] = useState();
  function getData( ){
      axios.get(`about/${id}`
          )
          .then(
              (response) =>
              {
                   setData(response.data)
                  //  setAbout(data[0].description)
                    // let name = "description"
                    setAbout(response.data.description)
                    setLoading(false)

              }

              
          )
  }

console.log(data)
console.log(about)

  useEffect(() => {
          getData();
          

      }, []);

      console.log(props.userData)

      // console.log(about)

      return(
          <div>  
      
          {
              loading?
              <LoadingSpinner />:
      <div>
              <div>
              
                      <AboutContainer data = {about} user ={props.userData}/>
             
                 
               </div>
      
               
         
       </div>
        }

        <div>
          <Staff user = {props.userData} />

        </div>
          
           </div>
      )

    
      }
