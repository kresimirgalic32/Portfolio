import React from "react";

const Summary = () => {
  return (
    <div className="wrap">
      <h1 className="first-text">
        Hi, my name is Krešimir, I am a front-end developer living in Čapljina,
        currently looking for work as a frontend designer.
      </h1>

      <h2 className="second-text">
        I come from a computer science background but I'm also passionate about
        3D modeling. I like to tinker with precision and accuracy.
      </h2>

      <h3 className="third-text">
        <a href="/projects" className="link">
          Get to know me.
        </a>
      </h3>
    </div>
  );
};

export default Summary;
