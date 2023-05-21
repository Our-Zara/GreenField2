import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  gender: string;
  category: string;
  description: string;
}

const ProductPage = () => {
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [data, setData] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchData = () => {
    axios
      .get(`http://localhost:4001/zara/product/${gender}/${category}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setCategory(window.location.pathname.split("/")[2]);
    setGender(window.location.pathname.split("/")[1]);
    if (category && gender) {
      fetchData();
    }
  }, [category, gender]);

  const addToCart = (product: Product) => {
    const Newcart = {
      users_id: 1, 
      products_id: product.id,
    };

    axios
      .post("http://localhost:4001/zara/cart/add", Newcart)
      .then((res) => {
        console.log("Product added to cart:", res.data);
        setCart([...cart, product]);
      })
      .catch((err) => {
        console.error("Failed to add product to cart:", err);
      });
  };

  return (
    <MDBContainer style={{ marginTop: "150px" }}>
      <MDBRow className="justify-content-center">
        {data.map((product) => (
          <MDBCol md="12" lg="4" className="mb-4" key={product.id}>
            <MDBCard className="h-100">
              <MDBCardImage src={product.image} alt={product.name} className="w-100" />
              <MDBCardBody className="d-flex flex-row justify-content-between p-0 pt-1.5">
                <span className="card-title mb-3 text-left details" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "15px", paddingLeft:"20px", paddingTop :"5px" }}>
                  {product.name}
                </span>
                <span className="mb-3 text-right details" style={{ fontFamily: "Arial, Helvetica, sans-serif", fontSize: "15px", paddingRight:"20px", paddingTop :"5px" }}>
                  ${product.price}
                </span>
              </MDBCardBody>
              <MDBBtn
                style={{ backgroundColor: "white", color: "black" }}
                className="btn-white-hover"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </MDBBtn>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default ProductPage;
