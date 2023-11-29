import React from "react";
import Card from "react-bootstrap/Card";
import { FaArrowRightLong } from "react-icons/fa6";

const ArticleCards = ({ image, title, desc }) => {
  return (
    <Card style={{ width: "21.8rem", height: "32rem", margin: "10px 20px" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <a href="#" style={{ textDecoration: "none" }}>
          Read more
          <span>
            <FaArrowRightLong />
          </span>
        </a>
      </Card.Body>
    </Card>
  );
};

export default ArticleCards;
