import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from "./footer"

const HomeCarousel = () => {
  return (
    <>
      <Carousel fade controls={false} indicators={false} interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-20//w/1920/IMAGE-landscape-fill-c858f95e-9272-423c-a1ee-40e7dfd5b638-default_0.jpg?ts=1684136380997"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-dresses/subhome-xmedia-20//w/1920/IMAGE-landscape-fill-07b13c36-46b1-440b-84a8-e3af731690ef-default_0.jpg?ts=1684086767489"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.zara.net/photos///contents/mkt/spots/ss23-north-man-new/subhome-xmedia-19-2//w/1920/IMAGE-landscape-fill-7c8c1a5b-ce41-46df-94ea-8f45d2bd772f-default_0.jpg?ts=1683800443276"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <div>
        {/* Missing opening <Box> tags */}
        <div mt="-10%">
          <img  alt="" width="100%" height="50%" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomeCarousel;