import React, { useState } from "react";

import Navbar from "./Navbar";
const About = () => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className={isActive ? "mobile " : "nav-close-mobile"}>
        <button type="button" className="bttn" onClick={handleClick}></button>
        <Navbar></Navbar>
      </div>

      <div className={isActive ? "dropdown-open" : null}>
        <div className="about">
          <div className="nav">
            <div className="nav-close">
              <Navbar></Navbar>
            </div>
            <div className="dropdown">
              <button
                type="button"
                className="btn"
                onClick={handleClick}
              ></button>
            </div>
          </div>

          <div className="wrap">
            <h1>
              Hi, my name is Krešimir, I am a front-end developer living in
              Čapljina, currently unemployed.
            </h1>

            <h2>
              I like to tinker with precision and accuracy. From a computer
              science background, I'm also passionate about 3D modeling.
            </h2>

            <h3>
              <a href="/projects" className="link">
                Get to know me
              </a>
            </h3>
          </div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
