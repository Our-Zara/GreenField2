import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
    import React from "react";

    
    export default function QuantityEdit() {
      
    return (
    <section className="h-100 h-custom" style={{ backgroundColor: "white" }}>
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <br />
                        <br />
                        <br />
                        <MDBTypography tag="h1" style={{fontSize: "15px", width: "40px", height: "40px", marginTop: "150px",marginRight: "1200px",textDecorationLine:"underline" }}>
                          Cart 
                        </MDBTypography>
                       
                      </div>
                    </div>
                  </MDBCol>               
                </MDBRow>
              </MDBCardBody>
    
    </section>
    );
    }