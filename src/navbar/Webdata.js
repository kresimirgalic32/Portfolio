import React, { useState } from "react";
import Navbar from "./Navbar";

const Webdata = () => {
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
        <div className="curriculum">
          <div className="nav-close">
            <Navbar></Navbar>
          </div>
          <div className="dropdown">
            <button
              type="button"
              className="btn-white"
              onClick={handleClick}
            ></button>
          </div>
          <div className="center">
            <h1 className="text">Work in Progress, TEST</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webdata;