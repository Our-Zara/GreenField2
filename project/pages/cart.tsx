import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
  
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";
 
import axios from "axios";
import React,{useState,useEffect} from "react";

    export default function Cart() {
    const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:4001/zara/cart/1") 
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
const handleDelete=(prod:number)=>{
  axios.delete(`http://localhost:4001/zara/cart/delete/${prod}/1`)
  window.location.reload()
};
  useEffect(() => {
    fetchData();
  }, []);

    return (
    <section style={{ backgroundColor: "white" }}>
              <MDBCardBody>
                <MDBRow>             
                    <div style={{textAlign : "center"}} >
                      <div className="d-flex ">
                        <br />
                        <br />
                        <br />
                        <MDBTypography tag="h1" style={{fontSize: "15px", width: "40px", height: "40px", marginTop: "150px",paddingLeft: "120px",textDecorationLine:"underline" , textAlign : "center"}}>
                          Cart 
                        </MDBTypography>
                       
                      </div>
                    </div>
              
                </MDBRow>
              </MDBCardBody>
              <MDBContainer >
      <MDBRow className="justify-content-center">
        {data.map((e:any) => (
          <MDBCol  md="12" lg="4" className="mb-4">
            <MDBCard className="h-100">
              <MDBCardImage src={e.image} alt={e.name} className="w-100" />
              <MDBCardBody className="d-flex flex-row justify-content-between p-0 pt-1.5" >
                <span className="card-title mb-3 text-left details" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "15px", paddingLeft:"20px", paddingTop :"5px" }}>
                  {e.name}
                </span>
                <span className="mb-3 text-right details" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "15px", paddingRight:"20px", paddingTop :"5px" }}>${e.price}</span>
                
              </MDBCardBody>
              <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "15px", textAlign: "right", paddingRight:"20px", paddingBottom:"5px" }} onClick={() => handleDelete(e.products_id)}>DELETE</div>
            </MDBCard>
            
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
    </section>
    );
    }