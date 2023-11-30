import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import images from "../../constants/images";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="p__muli-active" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={images.logo} alt="logo" className="nav__logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mb-auto nav__links">
            <Nav.Link href="#home" className="p__muli-active_home">
              Home
            </Nav.Link>
            <Nav.Link href="#find">Find a doctor</Nav.Link>
            <Nav.Link href="#apps">Apps</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#aboutus">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
