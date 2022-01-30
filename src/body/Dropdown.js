import { render } from "@testing-library/react";
import React, { useState } from "react";

// class Dropdown extends Component{
const Dropdown = () => {
  // constructor(props) {
  //   super(props);
  //   this.wrapperRef = React.createRef();
  // }

  // handleClick() {
  //   const wrapper = this.wrapperRef.current;
  //   wrapper.classList.toggle("nav-open");
  // }

  // const [isActive, setActive] = useState(false);

  // const handleClick = (props) => {
  //   props.setActive(!isActive);
  //   // const wrapper = this.wrapperRef.current;
  //   // wrapper.classList.toggle("nav-open");
  // };

  return (
    <div id="dropdown" className="dropdown">
      <button type="button" className="btn"></button>
    </div>
  );
};

export default Dropdown;
