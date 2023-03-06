import React from "react";
import "./Slider.css";
import slider1 from "../Website_images/slider1.jpg"
import slider2 from "../Website_images/slider2.jpg"
import slider3 from "../Website_images/slider3.jpg"
import slider4 from "../Website_images/slider4.jpg"
import slider5 from "../Website_images/slider5.jpg"
import slider6 from "../Website_images/slider6.jpeg"
import slider7 from "../Website_images/slider7.jpg"
import slider8 from "../Website_images/slider8.jpg"
import slider9 from "../Website_images/slider9.jpg"
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>;

const Slider = () => {
  return (
    <>

      <div className="main-container aem-GridColumn aem-GridColumn--default--12">
        <div
          className="key-feature-tab"
          style={{ margin: "50px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center" }}
        >
          <div className="key-feature-tab__contents ">
            <div
              className="key-feature-tab__header-wrap"
              style={{ justifyContent: "center", alignContent: "center" }}
            >
              <h1
                className="key-feature-tab__tittle"
                style={{
                  // paddingLeft: "375px",
                  color: "#000000",
                  fontSize: "45px",
                  // fontSize: "5.9vw",
                  fontFamily: "Montserrat"
                }}
              >
                Amazon Learing Initiative By
              </h1>
              <div className="tab">
                <h1 className="learnt" style={{fontFamily: "Montserrat" }}>
                  The Techroctics Lab
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      


      <div className="container-fluid">         
      <div id="carouselExampleIndicators" className="carousel slide container-fluid">
        <div className="carousel-indicators ">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider5} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider6} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider7} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider8} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider9} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div> 
    </>
  );
};

export default Slider;
