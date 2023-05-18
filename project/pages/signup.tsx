'use client';
import 'bootstrap/dist/css/bootstrap.css'
import React, {useState} from 'react';
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

function signup() {
    const [firstname, setFirstName] = useState<String>('');
    const [lastname, setLastName] = useState<String>('');
    const [firstname, setFirstName] = useState<String>('');
    const [firstname, setFirstName] = useState<String>('');

    const handleSubmit=()=>{}
    return (
        <MDBContainer className='' id="signup-container">
          <MDBRow className='g-0 d-flex'>
            <MDBCard id="signup-card">
              <h1 style={{marginBottom: "2rem"}}>Personal Details</h1>
    
    
            <MDBCol md='8'>
    
              <MDBCardBody className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                <MDBInput wrapperClass='mb-4' placeholder='E-MAIL' id='form1' className='input' onChange={(e) => setEmail(e.target.value)}/>
                <MDBRow style={{width: "65vw"}} className='dbl-input'>
                    <MDBCol className='pw-input'>
                        <MDBInput wrapperClass='mb-4' className='input' placeholder='PASSWORD' type='password' onChange={(e) => setPassword(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className='pw-input'>
                        <MDBInput wrapperClass='mb-4' className='input' placeholder='CONFIRM PASSWORD' type='password' onChange={(e) => setConfPassword(e.target.value)}/>
                    </MDBCol>
                </MDBRow>
                <MDBRow style={{width: "65vw", marginBottom: "4rem"}} className='dbl-input'>
                    <MDBCol className='pw-input'>
                        <MDBInput wrapperClass='mb-4' className='input' placeholder='NAME' type='text' onChange={(e) => setName(e.target.value)}/>
                    </MDBCol>
                    <MDBCol className='pw-input'>
                        <MDBInput wrapperClass='mb-4' className='input' placeholder='SURNAME' type='text' onChange={(e) => setSurname(e.target.value)}/>
                    </MDBCol>
                </MDBRow>
    
                <MDBBtn className="mb-4 signup-btn">Create Account</MDBBtn>
                </form> 
              </MDBCardBody>
    
            </MDBCol>
    
            </MDBCard>
    
          </MDBRow>
    
      </MDBContainer>
      );  
}

export default signup