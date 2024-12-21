import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MonginisCarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const MonginisCarousel = () => {
  return (
    <div className="container-fluid mt-0">
      <Carousel interval={1000} indicators={false} >
        <Carousel.Item>
          <img
            src="https://www.monginis.net/wp-content/uploads/2022/12/Anniversary-cakes-8_Monginis_E_commerce_Banner_Dec_2022_1366x375.jpeg"
            className="d-block w-100"
            alt="Anniversary Cakes"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.monginis.net/wp-content/uploads/2024/09/Moniginis-Banner-1512-X-475-14.png"
            className="d-block w-100"
            alt="Monginis Banner"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://www.monginis.net/wp-content/uploads/2022/12/TallnFancyE_commerce_Banner_1366x375.jpg"
            className="d-block w-100"
            alt="Tall and Fancy"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MonginisCarousel;
