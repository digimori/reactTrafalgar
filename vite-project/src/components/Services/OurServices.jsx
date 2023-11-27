import React from "react";
import ServiceCards from "../ServiceCards";
import images from "../../constants/images";
import "./OurServices.css";

const OurServices = () => {
  return (
    <div className="flex__center top__margin section__services-container">
      <div className="section__services-text row">
        <h2 className="col-12">Our services</h2>
        <div className="separator col-12"></div>
        <p className="col-12">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>
      <div className="section__services-cards">
        {/* Map over cards from ServiceCards here - Remember Prop passing*/}
      </div>
    </div>
  );
};

export default OurServices;
