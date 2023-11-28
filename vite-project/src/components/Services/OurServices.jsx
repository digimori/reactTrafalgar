import React from "react";
import ServiceCards from "./ServiceCards";
import "./OurServices.css";
import Separator from "./Separator";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { services } from "../../constants/data.js";
import background from "../../assets/images/bgelement.png";
import DefaultButton from "../Button.jsx";

const OurServices = () => {
  return (
    <Container className="top__margin section__container">
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

      <div className="services__overlay">
        <img src={background} alt="background" />
      </div>
      <Row className="row card__parent">
        {services.map((item, index) => (
          <ServiceCards
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            key={item.title + index}
          />
        ))}

        {/* Map over cards from ServiceCards here - Remember Prop passing*/}
      </Row>

      <Row
        className="justify-content-center"
        style={{ padding: "40px", margin: "20px" }}
      >
        <DefaultButton text="Learn more" />
      </Row>
    </Container>
  );
};

export default OurServices;
