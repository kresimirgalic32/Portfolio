import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to="/about">
        <button type="button" className="button"></button>
      </Link>
    </div>
  );
};

export default Button;
