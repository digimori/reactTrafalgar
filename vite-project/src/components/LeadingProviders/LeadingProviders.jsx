import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DefaultButton from "../Button";
import sectionimg1 from "../../assets/images/trafalgar-illustrationsec021.png";

const LeadingProviders = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={sectionimg1} alt="section image" />
        </Col>
      </Row>
    </Container>
  );
};

export default LeadingProviders;
