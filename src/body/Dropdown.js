import React from "react";
import $ from "jquery";

const Dropdown = () => {
  const handleClick = () => {
    $("#dropdown").click(function () {
      $("span").hide();
    });
  };
  return (
    <div>
      <span id="dropdown" className="dropdown">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <button type="button" className="btn" onClick={handleClick}></button>
      </span>
    </div>
  );
};

export default Dropdown;
