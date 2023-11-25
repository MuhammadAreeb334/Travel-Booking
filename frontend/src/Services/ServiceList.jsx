import React from "react";
import { Col } from "reactstrap";
import ServiceCard from "./ServiceCard";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Predicting weather using scientific data and models.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Blending history for memorable sightseeing.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Crafting experiences around personal preferences and needs.",
  },
];

const ServiceList = () => {
  return (
    <>
      {serviceData.map((items, index) => (
        <Col lg="3" key={index}>
          <ServiceCard items={items} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
