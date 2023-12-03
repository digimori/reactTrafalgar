import React from "react";
import images from "../../constants/images";
import "./Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <Container fluid className="flex__center top__margin">
      <Row className="justify-content-center align-items-center header__row">
        <Col className="section__header-text col-lg-5 col-12">
          <h1 className="headtext__muli">Virtual healthcare for you</h1>
          <p className="p__muli opacity-50 p__padding">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <Button className="section__header-button">Consult Today</Button>{" "}
        </Col>
        <Col className="section__image col-lg-7 col-12">
          <img src={images.illustration} alt="header-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
