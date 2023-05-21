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
import React,{useState,useEffect, FormEvent} from "react";

    export default function Cart(e:FormEvent) {
      const [show,setShow]:any=useState(false)
    const [data, setData] :any= useState([]);
    const [tracker,setTracker]:any=useState(false)
    const [productquantity,setproductquantity]:any=useState(e.quantity)

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
//////update////////
  const UpdateProd=(id:any,prod:any)=>{
    axios.put(`http://localhost:4001/api/products/${id}`,prod)
    .then((res)=>{
       console.log(res.data)
       setTracker(!tracker)
     })
     .catch((err)=>{console.log(err)})
   }
   const id:any=e.id;
   const handleUpdate=()=>{
  UpdateProd(id, {
    productquantity: productquantity,
  });
    setShow(!show)
}
const icrementQuanity=()=>{
  let inc=e.quantity+1
     UpdateProd(id,{
      productquantity:inc,
    });
}
const decrementQuanity=()=>{
  let dec=e.quantity-1
  UpdateProd(id,{
    productquantity:dec,
  });
 }
 useEffect(() =>{
  fetchData()
},[tracker]);
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
              <p className="card-text">Quantity: {e.productquantity}</p>
        <button onClick={icrementQuanity} className="btn ">+</button>
        <button onClick={decrementQuanity} className="btn btn-sm btn-outline-primary">-</button>
        {show ? 
        (
        <div>
          <input   style={{ width: '150px', marginRight: '10px' }}
             type="number" className="form-control my-2" placeholder='Quantity' defaultValue={e.productquantity} onChange={(e:any)=>setproductquantity(e.target.value)} />
             
             </div>)
             : <></>}
            </MDBCard>
            
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
    </section>
    );
    }