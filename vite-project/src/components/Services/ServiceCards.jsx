import React from "react";
import Card from "react-bootstrap/Card";
import "./OurServices.css";


const ServiceCards = ({ title }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServiceCards;
