import React, { useState } from "react";
import Button from "../body/Button";
import Navbar from "./Navbar";

const Home = () => {
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
        <div className="home">
          <div className="nav-close">
            <Navbar></Navbar>
          </div>
          {/* this is dropdown */}
          <div className="dropdown">
            <button
              type="button"
              className="btn"
              onClick={handleClick}
            ></button>
          </div>
          {/* this is dropdown */}

          <div className="button-box">
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
// }

export default Home;
