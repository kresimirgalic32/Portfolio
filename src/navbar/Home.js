import React from "react";
import Button from "../body/Button";
import Dropdown from "../body/Dropdown";

const Home = () => {
  return (
    <div className="home">
      <div className="nav">
        <Dropdown></Dropdown>
      </div>
      <div className="button-box">
        <Button></Button>
      </div>
    </div>
  );
};

export default Home;
