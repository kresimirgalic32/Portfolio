import React from "react";

import Dropdown from "../body/Dropdown";
const About = () => {
  return (
    <div className="about">
      <div className="nav">
        <Dropdown></Dropdown>
      </div>

      <div className="wrap">
        <h1>
          Hi, my name is Krešimir, I am a front-end developer living in
          Čapljina, currently unemployed.
        </h1>

        <h2>
          I like to tinker with precision and accuracy. From a computer science
          background, I'm also passionate about 3D modeling.
        </h2>

        <h3>
          <a href="/projects" className="link">
            Get to know me
          </a>
        </h3>
      </div>
      <div className="image"></div>
    </div>
  );
};

export default About;
