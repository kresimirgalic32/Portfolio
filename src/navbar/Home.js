import React, { useState } from "react";
import Button from "../body/Button";
import Navbar from "./Navbar";
import backgroundVideo from "../assets/video.mp4";

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
          <video className="background-video" autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
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

          {/* <div className="button-box">
            <Button></Button>
          </div> */}
          <div className="home-text center">
            Welcome to my home, feel free to take a look around.
          </div>
        </div>
      </div>
    </div>
  );
};
// }

export default Home;
