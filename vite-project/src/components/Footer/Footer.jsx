import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <Container className="footer__container">
      <Row className="pt-5">
        <Col className="col-12 col-md-5 col-xl-3 my-3">
          <img src={logo} alt="logo" />
          <p className="p__muli text-white">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <p className="p__muli text-white">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </p>
        </Col>
        <Col className="col-6 col-md-3 text-left footer__container-sections">
          <h3>Company</h3>
          <ul className="footer__container-sections_list">
            <li>
              <a href="#aboutus">About</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#find">Find a doctor</a>
            </li>
            <li>
              <a href="#apps">Apps</a>
            </li>
          </ul>
        </Col>
        <Col className="col-3 col-md-2 text-left">
          <h3>Region</h3>
          <ul className="footer__container-sections_list">
            <li>
              <a href="#">Indonesia</a>
            </li>
            <li>
              <a href="#">Singapore</a>
            </li>
            <li>
              <a href="#">Hongkong</a>
            </li>
            <li>
              <a href="#">Canada</a>
            </li>
          </ul>
        </Col>
        <Col className="col-md-2 text-left">
          <h3>Help</h3>
          <ul className="footer__container-sections_list">
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Contact support</a>
            </li>
            <li>
              <a href="#">Instructions</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
