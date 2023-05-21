import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

function Products() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:4001/zara/product/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MDBContainer style={{marginTop : "150px"}}>
      <MDBRow className="justify-content-center">
        {data.map((e:any) => (
          <MDBCol  md="12" lg="4" className="mb-4">
            <MDBCard className="h-100">
            <MDBCardImage
  src={e.image}
  alt={e.name}
  className="w-100" 
/>
              <MDBCardBody className="d-flex flex-row justify-content-between p-0 pt-1.5">
                <span className="card-title mb-3 text-left details" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "15px", paddingLeft:"20px", paddingTop :"5px" }}>
                  {e.name}
                </span>
                <span className="mb-3 text-right details" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "15px", paddingRight:"20px", paddingTop :"5px" }}>${e.price}</span>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

export default Products;
