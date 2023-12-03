import React from "react";
import Card from "react-bootstrap/Card";
import "./OurServices.css";

const ServiceCards = ({ icon, title, desc }) => {
  return (
    <Card
      className="card__container"
      style={{ width: "21rem", height: "22.12rem" }}
    >
      <Card.Body>
        <img src={icon} style={{ padding: "50px 10px" }} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCards;
