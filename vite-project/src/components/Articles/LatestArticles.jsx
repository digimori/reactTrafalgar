import React from "react";
import ArticleCards from "./ArticleCards";
import Separator from "../Separator";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import DefaultButton from "../Button";
import img1 from "../../assets/images/img1.png";
import image2 from "../../assets/images/image 2.png";
import image3 from "../../assets/images/image 3.png";

const articleInfo = [
  {
    image: img1,
    title: "Disease detection, check up in the laboratory",
    desc: "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
  {
    image: image2,
    title: "Herbal medicines that are safe for consumption",
    desc: "Herbal medicine is very widely used at this time because of its very good for your health...",
  },
  {
    image: image3,
    title: "Natural care for healthy facial skin",
    desc: "A healthy lifestyle should start from now and also for your skin health. There are some...",
  },
];

const LatestArticles = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center align-items-center">
        <h2 className="text-center">Check out our latest articles</h2>
      </Row>
      <Row className="justify-content-center align-items-center my-3">
        <Separator />
      </Row>
      <Row className="justify-content-center align-items-center">
        {articleInfo.map((item, index) => (
          <ArticleCards
            key={item.title + index}
            image={item.image}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </Row>
      <Row>
        <DefaultButton text="View all" />
      </Row>
    </Container>
  );
};

export default LatestArticles;
