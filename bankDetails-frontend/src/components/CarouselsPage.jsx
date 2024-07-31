import React from "react";
import { Carousel, Image } from "react-bootstrap";

const CarouselsPage = () => {
  return (
    <div className="carousel-container">
      <Carousel className="my-5 py-2">
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100 carousel-image"
            src="https://assets-global.website-files.com/63c14315b818a31b179512a3/642a5e5a0700e36fe5967a17_open-banking-1200-1662083126.jpg"
            alt="Bank details"
          />
          <Carousel.Caption>
            <h1 className="carousel-h1">Bank details</h1>
            <p className="carousel-p">
              A bank is a financial institution that accepts deposits from the
              public and creates a demand deposit while simultaneously making
              loans. Lending activities can be directly performed by the bank or
              indirectly through capital markets.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100 carousel-image"
            src="https://orpical.com/wp-content/uploads/2023/07/digital-transformation-in-banking.png"
            alt="Bank details"
          />
          <Carousel.Caption>
            <h1 className="carousel-h1">Bank details</h1>
            <p className="carousel-p">
              A bank is a financial institution that accepts deposits from the
              public and creates a demand deposit while simultaneously making
              loans. Lending activities can be directly performed by the bank or
              indirectly through capital markets.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image
            className="d-block w-100 carousel-image"
            src="https://static.vecteezy.com/system/resources/thumbnails/030/741/470/small/business-global-internet-connection-application-technology-and-digital-marketing-financial-and-banking-digital-link-tech-big-data-photo.jpg"
            alt="Bank details"
          />
          <Carousel.Caption>
            <h1 className="carousel-h1">Bank details</h1>
            <p className="carousel-p">
              A bank is a financial institution that accepts deposits from the
              public and creates a demand deposit while simultaneously making
              loans. Lending activities can be directly performed by the bank or
              indirectly through capital markets.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselsPage;
