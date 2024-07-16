import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./home.css";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import menu1 from "../images/menu-01.jpg";
import menu2 from "../images/menu-02.jpg";
import menu3 from "../images/menu-03.jpg";
import menu4 from "../images/menu-04.jpg";
import menu5 from "../images/menu-05.jpg";
import menu6 from "../images/menu-06.jpg";

function home() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img src={slide1} alt="slide1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide2} alt="slide2" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide3} alt="slide3" />
        </Carousel.Item>
      </Carousel>

      <div className="menu-item">
        <img src={menu1}></img>
        <img src={menu2}></img>
        <img src={menu3}></img>
        <img src={menu4}></img>
        <img src={menu5}></img>
        <img src={menu6}></img>
      </div>
      <h3 className="home-heading">This is Home Page</h3>
    </>
  );
}

export default home;
