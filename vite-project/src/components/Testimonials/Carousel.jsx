import React from "react";
import "./Testimonials.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Carousel = ({ icon, person, personTitle, review }) => {
  return (
    <Container style={{ margin: "35px 50px" }}>
      <Row className="d-flex align-items-center">
        <Col className="col-md-2">
          <img src={icon} className="review__circle" />
        </Col>
        <Col className="col-md-4 text-white">
          <h3>{person}</h3>
          <p>{personTitle}</p>
        </Col>
        <Col className="col-md-5 text-white">
          <p>{review}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Carousel;
