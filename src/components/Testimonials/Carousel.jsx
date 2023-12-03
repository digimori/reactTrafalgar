import React from "react";
import "./Testimonials.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Carousel = ({ icon, person, personTitle, review }) => {
  return (
    <Container>
      <Row className="d-flex align-items-center carousel__container">
        <Col className="col-12 col-md-2 px-3 py-3">
          <img src={icon} className="review__circle" />
        </Col>
        <Col className="col-12 col-md-4 text-white personObj">
          <h3>{person}</h3>
          <p>{personTitle}</p>
        </Col>
        <Col className="col-12 col-md-5 text-white review">
          <p>{review}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Carousel;
