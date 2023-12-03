import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import "./Testimonials.css";
import Separator from "../Separator";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { testimonialData } from "../../constants/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  return (
    <Container id="testimonials" className="testimonial__container pt-3">
      <Row className="text-center text-white my-4">
        <h2 className="">What our customers are saying</h2>
      </Row>
      <Row className="justify-content-center">
        <Separator
          className="separator col-12"
          style={{
            margin: "22px auto 33px auto",
          }}
        />
      </Row>
      <Row>
        <Slider {...settings}>
          {testimonialData.map((item, index) => (
            <Carousel
              icon={item.icon}
              person={item.person}
              personTitle={item.personTitle}
              review={item.review}
              key={item.person + index}
            />
          ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default Testimonials;
