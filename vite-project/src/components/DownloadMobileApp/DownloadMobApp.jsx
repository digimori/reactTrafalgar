import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DefaultButton from "../Button";
import sectionimg2 from "../../assets/images/trafalgar-illustrationsec031.png";
import Separator from "../Separator";
import { FaArrowDownLong } from "react-icons/fa6";

const DownloadMobApp = () => {
  return (
    <Container className="flex__center top__margin">
      <Row className="justify-content-center">
        <Col className="col-md-4 offset-2">
          <h2 className="h2__muli">Download our mobile apps</h2>
          <Separator className="separator" />
          <p className="p__muli">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <DefaultButton text="Download" icons={<FaArrowDownLong />} />
        </Col>
        <Col className="col-md-6">
          <img src={sectionimg2} alt="section image" className="sectionimg2" />
        </Col>
      </Row>
    </Container>
  );
};

export default DownloadMobApp;
