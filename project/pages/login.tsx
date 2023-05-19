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


 function Login() {
//     const [email, setEmail] = useState<string>(" ");
//     const [password, setPassword] = useState<string>(" ");

// const handleSubmit= async (e:React.FormEvent)=>{
//   const user={
//     email,
//     password
//   }
//     try {
//         e.preventDefault();
//         if (email === "" || password === "") {
//           return alert("fill the rows please");
//         }
//         const response = await axios.post('http://localhost:4001/api/login',user, {
//        headers: {
//         'Content-Type': 'application/json'
//         }
//         });
//         if (response.data === "you are logged") {
//           return alert("Welcom to zara");
//         } else {
//           alert(response.data);
//         }
//       } catch (error) {
//         alert("check your password or email");
//       }
// }

    return (
        <MDBContainer id="login-container">
          <MDBRow className='g-0 d-flex'>
            <MDBCard id="login-card">
              <h1 style={{marginBottom: "2rem"}}>Log in to your account</h1>
    
    
            <MDBCol md='6'>
    
              <MDBCardBody id="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>              
                <MDBInput wrapperClass='mb-4' placeholder='E-MAIL' id='form1' type="email" onChange={(e) => setEmail(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' placeholder='PASSWORD' id='form2' type='password' onChange={(e) => setPassword(e.target.value)}/>
    
               <Link href={"/"}> <MDBBtn className="mb-4 login-btn" >Log in</MDBBtn></Link>
                </form>
    
                <div className="d-flex justify-content-between mb-4">
                  <a href="!#">Have you forgotten your password?</a>
                </div>
              </MDBCardBody>
    
            </MDBCol>
    
            </MDBCard>
            <MDBCol mdcol={6} mdRrow={19} id="need-account">
              <h3>Need an Account?</h3>
             <Link href={"/signup"}> <MDBBtn className="mb-4" id="register-btn">Register</MDBBtn></Link> 
    
            </MDBCol>
          </MDBRow>
    
      </MDBContainer>
      ); 
}

export default Login