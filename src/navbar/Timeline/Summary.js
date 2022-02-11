import React from "react";

const Summary = () => {
  return (
    <div className="wrap">
      <h1 className="first-text">
        Hi, my name is Krešimir, I am a front-end developer living in Čapljina,
        currently unemployed.
      </h1>

      <h2 className="second-text">
        I like to tinker with precision and accuracy. From a computer science
        background, I'm also passionate about 3D modeling.
      </h2>

      <h3 className="third-text">
        <a href="/projects" className="link">
          Get to know me
        </a>
      </h3>
    </div>
  );
};

export default Summary;
