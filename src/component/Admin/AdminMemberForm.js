import React, { useState } from "react";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container, Card } from "react-bootstrap";


const AdminMemberForm= ({addInfo}) => {

    

   const [user, setUser] = useState([
      {username: '',
      email: '',
      phoneNumber: '',
      address: '',
      graduationYear: '',
      club: ''
  }

  ])


 function change(e){
    setUser({...user, [e.target.name] : e.target.value});
 }

 function submitForm(e){
    e.preventDefault();
    console.log(user.phoneNumber);
    addInfo(user);
 }

return(
    <div>
   
   <Container fluid>
      <Card>
<form onSubmit = {submitForm}> 

  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputName">Full Name</label>
      <input type="text" class="form-control" id="inputName" name = "username" value = {user.username} placeholder="Enter the full name" onChange={change} />
    </div>



    <div class="form-group col-md-6">
      <label for="inputEmail">Email</label>
      <input type="email" class="form-control" id="inputEmail" name = "email" placeholder="Enter the email" value = {user.email} onChange={change}/>
    </div>


    <div class="form-group col-md-6">
      <label for="inputPhone">Phone Number</label>
      <input type="tel" class="form-control" id="inputPhone" name = "phoneNumber" value = {user.phoneNumber} placeholder="Enter the phone number" onChange={change} />
    </div>
    
    <div class="form-group col-md-6">
      <label for="inputAddress">Address</label>
      <input type="text" class="form-control" id="inputAddress" name = "address" value = {user.address} placeholder="Enter the address" onChange={change} />
    </div>


    <div class="form-group col-md-6">
      <label for="inputYear">Graduation Year</label>
      <input type="text" class="form-control" id="inputYear" name = "graduationYear" value = {user.graduationYear} placeholder="Enter your graduation year. Enter NA if unapplicable" onChange={change} />
    </div>


 <fieldset class="form-group col-md-6">
    <div class="row" onChange = {change}>
      <legend class="col-form-label col-sm-5 pt-0">Membership</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="membershipType" id="gridRadios1" value="Membership Type 1" />
          <label class="form-check-label" for="gridRadios1">
           Membership Type 1
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="membershipType" id="gridRadios2" value="Membership Type 2" />
          <label class="form-check-label" for="gridRadios2">
            Membership Type 2
          </label>
        </div>


        <div class="form-check">
          <input class="form-check-input" type="radio" name="membershipType" id="gridRadios2" value="Membership Type 3" />
          <label class="form-check-label" for="gridRadios2">
            Membership Type 3
          </label>
        </div>
        
      </div>
    </div>
  </fieldset>

  







  </div>

  
  
  
  
  
 
  <button type="submit" class="btn btn-primary">Add Member</button>
</form>

</Card>

</Container>

  

{/* <h1>Username : {user.username}</h1>
<h1>Password: {user.password}</h1> */}
    </div>
)
 
};

export default AdminMemberForm;