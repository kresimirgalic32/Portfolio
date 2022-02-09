import React, { useState } from "react";
import { Component } from "react";
import Timeline from "./Timeline/Timeline";
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
          <Timeline></Timeline>
        </div>
      </div>
    </div>
  );
};

export default About;
