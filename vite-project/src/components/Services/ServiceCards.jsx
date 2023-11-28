import React from "react";
import Card from "react-bootstrap/Card";
import "./OurServices.css";

const ServiceCards = ({ icon, title, desc }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <img src={icon} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCards;
