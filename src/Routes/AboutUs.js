import React from "react";
import AboutUsCardClass from "./AboutUsCardClass";
import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  return (
    <div>
      <h1>AboutUs</h1>
      <AboutUsCard
        name={"Avnish function"}
        contact={"@nagpalavnish11"}
        location={"Jalandhar"}
      ></AboutUsCard>
      <AboutUsCardClass
        name={"Avnish class"}
        contact={"@nagpalavnish11"}
        location={"Jalandhar"}
      ></AboutUsCardClass>
    </div>
  );
};

export default AboutUs;
