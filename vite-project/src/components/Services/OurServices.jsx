import React from "react";
import ServiceCards from "./ServiceCards";
import "./OurServices.css";
import Separator from "../Separator.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { services } from "../../constants/data.js";
import background from "../../assets/images/bgelement.png";
import DefaultButton from "../Button.jsx";

const OurServices = () => {
  return (
    <Container id="aboutus" className="top__margin section__container">
      <Row className="section__services-text">
        <h2 className="col-12 h2__muli">Our services</h2>
        <Row className="justify-content-center">
          <Separator
            className="col-12"
            style={{
              margin: "22px auto 33px auto",
            }}
          />
        </Row>
        <p className="row p__muli">
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
