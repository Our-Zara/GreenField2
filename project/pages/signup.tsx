'use client';
import 'bootstrap/dist/css/bootstrap.css'
import React, {FormEvent, useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
}
from 'mdb-react-ui-kit';

import axios from 'axios';
import Link from 'next/link';

function Signup() {
     const [firstname, setFirstName] = useState<String>('');
     const [lastname, setLastName] = useState<String>('');
     const [email ,setEmail] = useState<String>('');
     const [password, setPassword] = useState<String>('');
     const [conpassword, setConPassword] = useState<String>('');

    const [error, setError] = useState<string>("");
  
    const handleSubmit = () => {
      axios.post("http://localhost:4001/api/signup", {
        firstname: firstname,
        lastname:lastname,
        email: email,
        password: password,
        conpassword:conpassword
      })
      .then(suc => {
        console.log(suc);
        setError('CREATED')
      })
      .catch(err => {
        console.log(err);
        setError(err.response.data);
      });
    };
      
    return (
        <MDBContainer className='' id="signup-container">
          <MDBRow className='g-0 d-flex'>
            <MDBCard id="signup-card">
              <h1 style={{marginBottom: "2rem"}}>Personal Details</h1>
    
    
            <MDBCol md='8'>
    
              <MDBCardBody className="card-body">
                <form >
                <MDBInput wrapperClass='mb-4' placeholder='E-MAIL' id='form1' className='input' onChange={(e) => setEmail(e.target.value)}/>
                <MDBRow style={{width: "65vw"}} className='dbl-input'>
                    <MDBCol className='pw-input'>
                        <MDBInput wrapperClass='mb-4' className='input' placeholder='PASSWORD' type='password' onChange={(e) => setPassword(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className='pw-input'>
                        <MDBInput wrapperClass='mb-4' className='input' placeholder='CONFIRM PASSWORD' type='password' onChange={(e) => setConPassword(e.target.value)}/>
                    </MDBCol>
                </MDBRow>
                <MDBRow style={{width: "65vw", marginBottom: "4rem"}} className='dbl-input'>
                    <MDBCol className='pw-input'>
                        <MDBInput wrapperClass='mb-4' className='input' placeholder='NAME' type='text' onChange={(e) =>setFirstName(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className='pw-input'>
                        <MDBInput wrapperClass='mb-4' className='input' placeholder='SURNAME' type='text' onChange={(e) => setLastName(e.target.value)}/>
                    </MDBCol>
                </MDBRow>
    
               <Link href={"/login"}> <MDBBtn className="mb-4 signup-btn" onClick={(e)=>{handleSubmit}}>Create Account</MDBBtn></Link>
                </form> 
              </MDBCardBody>
    
            </MDBCol>
    
            </MDBCard>
    
          </MDBRow>
    
      </MDBContainer>
      );  
}

export default Signup