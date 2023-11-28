import React from "react";
import images from "../../constants/images";
import "./Header.css";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <div className="flex__center top__margin">
      <div className="section__header-text">
        <h1 className="headtext__muli">Virtual healthcare for you</h1>
        <p className="p__muli opacity-50 p__padding">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <Button className="section__header-button">Consult Today</Button>{" "}
      </div>
      <div className="section__image">
        <img src={images.illustration} alt="header-image" />
      </div>
    </div>
  );
};

export default Header;
