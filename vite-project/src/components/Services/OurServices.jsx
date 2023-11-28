import React from "react";
import ServiceCards from "./ServiceCards";
import "./OurServices.css";
import Separator from "./Separator";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { services } from "../../constants/data.js";

const OurServices = () => {
  return (
    <Container className="top__margin">
      <Row className="section__services-text">
        <h2 className="col-12">Our services</h2>
        <Row>
          <Separator color="#000" className="separator col-12" />
        </Row>
        <p className="row">
          We provide to you the best choices for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </Row>
      <Row className="row">
        {services.map((item, index) => (
          <ServiceCards title={item.title} key={item.title + index} />
        ))}

        {/* Map over cards from ServiceCards here - Remember Prop passing*/}
      </Row>
    </Container>
  );
};

export default OurServices;
