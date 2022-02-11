import React, { useState } from "react";

import Summary from "./Summary";
import Wolt from "./Wolt";
import Vivat from "./Vivat";
import Ivomix from "./Ivomix";
import Construction from "./Construction";
import Dominant from "./Dominant";
import Hepok from "./Hepok";
import University from "./University";
import Courses from "./Courses";
import Highschool from "./Highschool";
// import Timeline from "./Timeline";

const TimelineMobile = () => {
  const [isActive1, setActive1] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);
  const [isActive4, setActive4] = useState(false);
  const [isActive5, setActive5] = useState(false);
  const [isActive6, setActive6] = useState(false);
  const [isActive7, setActive7] = useState(false);
  const [isActive8, setActive8] = useState(false);
  const [isActive9, setActive9] = useState(false);

  const handleClick1 = () => {
    setActive1(!isActive1);
    setActive2(isActive2 ? false : false);
    setActive3(isActive3 ? false : false);
    setActive4(isActive4 ? false : false);
    setActive5(isActive5 ? false : false);
    setActive6(isActive6 ? false : false);
    setActive7(isActive7 ? false : false);
    setActive8(isActive8 ? false : false);
    setActive9(isActive9 ? false : false);
  };
  const handleClick2 = () => {
    setActive2(!isActive2);
    setActive1(isActive1 ? false : false);
    setActive3(isActive3 ? false : false);
    setActive4(isActive4 ? false : false);
    setActive5(isActive5 ? false : false);
    setActive6(isActive6 ? false : false);
    setActive7(isActive7 ? false : false);
    setActive8(isActive8 ? false : false);
    setActive9(isActive9 ? false : false);
  };
  const handleClick3 = () => {
    setActive3(!isActive3);
    setActive1(isActive1 ? false : false);
    setActive2(isActive2 ? false : false);
    setActive4(isActive4 ? false : false);
    setActive5(isActive5 ? false : false);
    setActive6(isActive6 ? false : false);
    setActive7(isActive7 ? false : false);
    setActive8(isActive8 ? false : false);
    setActive9(isActive9 ? false : false);
  };
  const handleClick4 = () => {
    setActive4(!isActive4);
    setActive1(isActive1 ? false : false);
    setActive2(isActive2 ? false : false);
    setActive3(isActive3 ? false : false);
    setActive5(isActive5 ? false : false);
    setActive6(isActive6 ? false : false);
    setActive7(isActive7 ? false : false);
    setActive8(isActive8 ? false : false);
    setActive9(isActive9 ? false : false);
  };
  const handleClick5 = () => {
    setActive5(!isActive5);
    setActive1(isActive1 ? false : false);
    setActive2(isActive2 ? false : false);
    setActive3(isActive3 ? false : false);
    setActive4(isActive4 ? false : false);
    setActive6(isActive6 ? false : false);
    setActive7(isActive7 ? false : false);
    setActive8(isActive8 ? false : false);
    setActive9(isActive9 ? false : false);
  };
  const handleClick6 = () => {
    setActive6(!isActive6);
    setActive1(isActive1 ? false : false);
    setActive2(isActive2 ? false : false);
    setActive3(isActive3 ? false : false);
    setActive4(isActive4 ? false : false);
    setActive5(isActive5 ? false : false);
    setActive7(isActive7 ? false : false);
    setActive8(isActive8 ? false : false);
    setActive9(isActive9 ? false : false);
  };
  const handleClick7 = () => {
    setActive7(!isActive7);
    setActive1(isActive1 ? false : false);
    setActive2(isActive2 ? false : false);
    setActive3(isActive3 ? false : false);
    setActive4(isActive4 ? false : false);
    setActive5(isActive5 ? false : false);
    setActive6(isActive6 ? false : false);
    setActive8(isActive8 ? false : false);
    setActive9(isActive9 ? false : false);
  };
  const handleClick8 = () => {
    setActive8(!isActive8);
    setActive1(isActive1 ? false : false);
    setActive2(isActive2 ? false : false);
    setActive3(isActive3 ? false : false);
    setActive4(isActive4 ? false : false);
    setActive5(isActive5 ? false : false);
    setActive6(isActive6 ? false : false);
    setActive7(isActive7 ? false : false);
    setActive9(isActive9 ? false : false);
  };
  const handleClick9 = () => {
    setActive9(!isActive9);
    setActive1(isActive1 ? false : false);
    setActive2(isActive2 ? false : false);
    setActive3(isActive3 ? false : false);
    setActive4(isActive4 ? false : false);
    setActive5(isActive5 ? false : false);
    setActive6(isActive6 ? false : false);
    setActive7(isActive7 ? false : false);
    setActive8(isActive8 ? false : false);
  };

  return (
    <div>
      <div>
        <div
          className={
            isActive1
              ? "none"
              : null || isActive2
              ? "none"
              : null || isActive3
              ? "none"
              : null || isActive4
              ? "none"
              : null || isActive5
              ? "none"
              : null || isActive6
              ? "none"
              : null || isActive7
              ? "none"
              : null || isActive8
              ? "none"
              : null || isActive9
              ? "none"
              : null
          }
        >
          <Summary></Summary>
        </div>
        <div
          className={
            isActive1
              ? null
              : "none" && isActive2
              ? "none"
              : "none1" && isActive3
              ? "none"
              : "none1" && isActive4
              ? "none"
              : "none1" && isActive5
              ? "none"
              : "none1" && isActive6
              ? "none"
              : "none1" && isActive7
              ? "none"
              : "none1" && isActive8
              ? "none"
              : "none1" && isActive9
              ? "none"
              : "none1"
          }
        >
          <Courses></Courses>
        </div>
        <div
          className={
            isActive2
              ? null
              : "none" && isActive1
              ? "none"
              : "none1" && isActive3
              ? "none"
              : "none1" && isActive4
              ? "none"
              : "none1" && isActive5
              ? "none"
              : "none1" && isActive6
              ? "none"
              : "none1" && isActive7
              ? "none"
              : "none1" && isActive8
              ? "none"
              : "none1" && isActive9
              ? "none"
              : "none1"
          }
        >
          <Wolt></Wolt>
        </div>
        <div
          className={
            isActive3
              ? null
              : "none" && isActive2
              ? "none"
              : "none1" && isActive1
              ? "none"
              : "none1" && isActive4
              ? "none"
              : "none1" && isActive5
              ? "none"
              : "none1" && isActive6
              ? "none"
              : "none1" && isActive7
              ? "none"
              : "none1" && isActive8
              ? "none"
              : "none1" && isActive9
              ? "none"
              : "none1"
          }
        >
          <Vivat></Vivat>
        </div>
        <div
          className={
            isActive4
              ? null
              : "none" && isActive2
              ? "none"
              : "none1" && isActive3
              ? "none"
              : "none1" && isActive1
              ? "none"
              : "none1" && isActive5
              ? "none"
              : "none1" && isActive6
              ? "none"
              : "none1" && isActive7
              ? "none"
              : "none1" && isActive8
              ? "none"
              : "none1" && isActive9
              ? "none"
              : "none1"
          }
        >
          <University></University>
        </div>
        <div
          className={
            isActive5
              ? null
              : "none" && isActive2
              ? "none"
              : "none1" && isActive3
              ? "none"
              : "none1" && isActive4
              ? "none"
              : "none1" && isActive1
              ? "none"
              : "none1" && isActive6
              ? "none"
              : "none1" && isActive7
              ? "none"
              : "none1" && isActive8
              ? "none"
              : "none1" && isActive9
              ? "none"
              : "none1"
          }
        >
          <Ivomix></Ivomix>
        </div>
        <div
          className={
            isActive6
              ? null
              : "none" && isActive2
              ? "none"
              : "none1" && isActive3
              ? "none"
              : "none1" && isActive4
              ? "none"
              : "none1" && isActive5
              ? "none"
              : "none1" && isActive1
              ? "none"
              : "none1" && isActive7
              ? "none"
              : "none1" && isActive8
              ? "none"
              : "none1" && isActive9
              ? "none"
              : "none1"
          }
        >
          <Construction></Construction>
        </div>
        <div
          className={
            isActive7
              ? null
              : "none" && isActive2
              ? "none"
              : "none1" && isActive3
              ? "none"
              : "none1" && isActive4
              ? "none"
              : "none1" && isActive5
              ? "none"
              : "none1" && isActive6
              ? "none"
              : "none1" && isActive1
              ? "none"
              : "none1" && isActive8
              ? "none"
              : "none1" && isActive9
              ? "none"
              : "none1"
          }
        >
          <Dominant></Dominant>
        </div>
        <div
          className={
            isActive8
              ? null
              : "none" && isActive2
              ? "none"
              : "none1" && isActive3
              ? "none"
              : "none1" && isActive4
              ? "none"
              : "none1" && isActive5
              ? "none"
              : "none1" && isActive6
              ? "none"
              : "none1" && isActive7
              ? "none"
              : "none1" && isActive1
              ? "none"
              : "none1" && isActive9
              ? "none"
              : "none1"
          }
        >
          <Highschool></Highschool>
        </div>
        <div
          className={
            isActive9
              ? null
              : "none" && isActive2
              ? "none"
              : "none1" && isActive3
              ? "none"
              : "none1" && isActive4
              ? "none"
              : "none1" && isActive5
              ? "none"
              : "none1" && isActive6
              ? "none"
              : "none1" && isActive7
              ? "none"
              : "none1" && isActive8
              ? "none"
              : "none1" && isActive1
              ? "none"
              : "none1"
          }
        >
          <Hepok></Hepok>
        </div>
      </div>
      <div className="dot temp">
        <div className="big"></div>
        <div className="wrapper1">
          <div className={isActive1 ? "small-e  active-e" : "small-e"}></div>
          <div className={isActive2 ? "small  active" : "small"}></div>
          <div className={isActive3 ? "small  active" : "small"}></div>
          <div className={isActive4 ? "small-e  active-e" : "small-e"}></div>
          <div className={isActive5 ? "small  active" : "small"}></div>
          <div className={isActive6 ? "small  active" : "small"}></div>
          <div className={isActive7 ? "small  active" : "small"}></div>
          <div className={isActive8 ? "small-e  active-e" : "small-e"}></div>
          <div className={isActive9 ? "small  active" : "small"}></div>
        </div>
        <div className="big"></div>
      </div>
      <div className="temp">
        <div className="dot-inv">
          <div className="big-inv timeline-text-big color-exp-big">
            EXPERIENCE
          </div>
          <div className="wrapper-inv">
            <button
              className="btn-timeline small-inv-1 color-edu"
              type="button"
              onClick={handleClick1}
            >
              COURSES
            </button>
            <button
              className="btn-timeline small-inv-2 color-exp"
              type="button"
              onClick={handleClick2}
            >
              WOLT
            </button>
            <button
              className="btn-timeline small-inv-3 color-exp"
              type="button"
              onClick={handleClick3}
            >
              VIVAT
            </button>
            <button
              className="btn-timeline small-inv-4 color-edu"
              type="button"
              onClick={handleClick4}
            >
              UNIVERSITY
            </button>
            <button
              className="btn-timeline small-inv-5 color-exp"
              type="button"
              onClick={handleClick5}
            >
              IVOMIX
            </button>
            <button
              className="btn-timeline small-inv-6 color-exp"
              type="button"
              onClick={handleClick6}
            >
              CONSTRUCTION
            </button>

            <button
              className="btn-timeline small-inv-7 color-exp"
              type="button"
              onClick={handleClick7}
            >
              DOMINANT
            </button>
            <button
              className="btn-timeline small-inv-8 color-edu"
              type="button"
              onClick={handleClick8}
            >
              HIGH SCHOOL
            </button>
            <button
              className="btn-timeline small-inv-9 color-exp"
              type="button"
              onClick={handleClick9}
            >
              HEPOK
            </button>
          </div>
          <div className="big-inv timeline-text-big color-edu-big">
            EDUCATION
          </div>
        </div>
        <div className="timeline">
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default TimelineMobile;
