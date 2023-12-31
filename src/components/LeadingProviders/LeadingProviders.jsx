import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DefaultButton from "../Button";
import sectionimg1 from "../../assets/images/trafalgar-illustrationsec021.png";
import Separator from "../Separator";

const LeadingProviders = () => {
  return (
    <Container id="find" style={{ margin: "60px auto" }}>
      <Row className="justify-content-center">
        <Col className="col-lg-5 col-12">
          <img src={sectionimg1} alt="section image" className="illustImg" />
        </Col>
        <Col className="col-lg-4 col-12">
          <h2 className="h2__muli">Leading healthcare providers</h2>
          <Separator />
          <p className="p__muli p__padding">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <DefaultButton text="Learn more" />
        </Col>
      </Row>
    </Container>
  );
};

export default LeadingProviders;
