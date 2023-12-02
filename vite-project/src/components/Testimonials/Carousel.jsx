import React from "react";
import "./Testimonials.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Carousel = ({ icon, person, personTitle, review }) => {
  return (
    <Container>
      <Row className="align-items-baseline">
        <Col style={{}}>
          <img src={icon} className="review__circle" />
        </Col>
        <Col>
          <h3>{person}</h3>
          <p>{personTitle}</p>
        </Col>
        <Col>
          <p>{review}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Carousel;
