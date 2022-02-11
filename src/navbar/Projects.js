import React, { useState } from "react";

import Navbar from "./Navbar";

const Projects = () => {
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
        <div className="projects">
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

          <div className="center2"></div>
          <div className="wrapper-programiranje">
            <div className="project"></div>
            <div className="hair-salon"></div>
          </div>
          <div className="wrapper-3d">
            <div className="project"></div>
            <div className="chair"></div>
            <div className="project"></div>
            <div className="head"></div>
            <div className="project"></div>
            <div className="orc"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
