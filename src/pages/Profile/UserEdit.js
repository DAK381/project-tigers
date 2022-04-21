import { useState, useEffect } from "react";
import { Form, FormControl } from "react-bootstrap";
import {  useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "../../axios";

export default function ProfileEdit(){



    const navigate = useNavigate();

    const location = useLocation();



  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  //const [password, setPassword] = useState('');
  //const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  //const [isAlumni, setIsAlumni] = useState();
  const [phone, setPhone] = useState('');
  const [graduatedYear, setGraduatedYear] = useState('');
  const [address,setAddress]=useState('');
  const [membership,setmembershipType]=useState('');


const id = location.state.data.id;

  useEffect(() => {
    setFirstName(location.state.data.firstName)
    setLastName(location.state.data.lastName);
    setMaidenName(location.state.data.maidenName);
    setBirthdate(location.state.data.birthdate);
    setPhone(location.state.data.phone);
    setGraduatedYear(location.state.data.graduatedYear);
    setAddress(location.state.data.address);
    setmembershipType(location.state.membership);
}, [location.state]);

console.log(location.state.data.role)

const updateAPIData = (e) => {
    e.preventDefault();
    axios.put(`admin/update/${id}`, 
    
        {firstName,lastName,maidenName,birthdate,graduatedYear,membership,address,phone}
    )
        .then(res=>{console.log(res.data);
       
        
            location.state.admin && navigate('/admin-member-profile', {
                state: {
                    id: id
                }
            });  
          

           !location.state.admin && navigate('/user-updated-profile', {
            state: {
                userData: res.data
            }
        });  

      }).catch(err=>console.log(err))

      
}

    return(
        <div>

<Form className="register-form">
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            name="First Name"
            defaultValue={location.state.data.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          </Form.Group>
          <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="Last Name"
            defaultValue={location.state.data.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          </Form.Group>
          <Form.Group controlId="maidenName">
          <Form.Label>Maiden Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter maiden name"
            name="Maiden Name"
            defaultValue={location.state.data.maidenName}
            onChange={(e) => setMaidenName(e.target.value)}
          />
        
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Mailing Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter mailing address"
            name="address"
            defaultValue={location.state.data.address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="birthDate">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date of birth"
            name="birthDate"
            defaultValue={location.state.data.birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phone"
            defaultValue={location.state.data.phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
      
        <Form.Group controlId="membership">
          <Form.Label>What type of membership do you have?</Form.Label>
          <Form.Select onChange={(e) => setmembershipType(e.target.value)}
          defaultValue={location.state.data.membership}>
            <option>None</option>
            <option>MemType1</option>
            <option>MemType2</option>
            <option>MemType3</option>
          </Form.Select>
        </Form.Group>


        {/* <Form.Group controlId="isAlumni">
          <Form.Label>Are you an alumni of Neville High School?</Form.Label>
          <Form.Select>
            <option>Yes</option>
            <option  onClick ={(e) => setIsAlumni(false)}>No</option>
          </Form.Select>
        </Form.Group> */}

        
        <Form.Group controlId="graduatedYear">
          <Form.Label>Graduation Year</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter Graduation Year"
            name="graduatedYear"
            defaultValue={location.state.graduatedYear}
            onChange={(e) => setGraduatedYear(e.target.value)}
          />
        </Form.Group>

        <button type ="button" className="btn-primary btn" onClick={e => updateAPIData(e)}>Update</button>
      </Form>
        </div>

    )
}