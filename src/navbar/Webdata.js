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
        <div className="web-data">
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
          <div className="wd-navbar">
            <div className="wd-navbar-left">
              <h1 className="wd-text-2">Home</h1>
              <h2 className="wd-text">
                Homepage has a video for background which is autoplayed, looped
                and muted. Navbar/Dropdown is put at the top of the screen just
                like every other page. font size is 5vw (5 view width) as is
                line height, font family is "Raleway" and color is Ivory.
              </h2>
              <h1 className="wd-text-2">About</h1>
              <h2 className="wd-text">
                Landing page for About is a little summary of me, as well as a
                timeline of my work and education with the background color of
                "Dark Sienna" "#36151e". By hovering over Ivory circles you will
                notice a popup text declaring what that circle is for. And
                clicking on said circles would prompt the summary text to change
                as well as the circle to change color. For experience the color
                used was "Olive" "#988f2a" and for education "Blizard Blue"
                "#98dfea". Mobile version had to be done with "display:none"
                again. By pressing the timeline button you would be met with the
                same timeline as in the non mobile version.
              </h2>
              <h1 className="wd-text-2">Projects</h1>
              <h2 className="wd-text">
                Background color for projects page is "#3d0804". Projects also
                has two flex boxes. First one has all my programing projects and
                the second one has all the 3D modelling projects.
              </h2>
              <h1 className="wd-text-2">Web Data</h1>
              <h2 className="wd-text">
                Web Data was ment to be a more indept look in to my webpage.
                It's background color is black "#000000".
              </h2>
            </div>
            <div className="wd-navbar-right">
              <h1 className="wd-text-2">Navbar</h1>
              <h2 className="wd-text">
                Navbar is split into two flex boxes. First one is made with
                React "Link" components, the second one is made with "a"
                element. Navbar's text is colored with "Ivory" color "#fffff3"
                as is most of the text on the web page. Font size is "23px" and
                font family is "Raleway". For mobile version instead of a normal
                navbar, there is a dropwdown button which adds some new styling.
                That new styling does "display: none;" for everything, adds a
                new background color "Royal Blue Dark" "#0a2472" and
                "flex-direction" is set to "column"
              </h2>
              <h1 className="wd-text-2">Button</h1>
              <h2 className="wd-text">
                Every button's onClick function wasa coded with React's
                useState. Dropdown for navbar and timeline has an SVG background
                image.
              </h2>
              <h1 className="wd-text-2">Mobile Version</h1>
              <h2 className="wd-text">
                Complete web page was made to be responsive, so mobile version
                was a must. To achieve that result "@media (max-width: 774px)"
                was used.
              </h2>
              <h1 className="wd-text-2">Animations</h1>
              <h2 className="wd-text">
                There are 2 animations and both just increase opacity on refresh
                of the page.
              </h2>
              <h1 className="wd-text-2">Google Fonts</h1>
              <h2 className="wd-text">
                Google fonts was added trough "google-webfonts-helper" API.
                Fonts added: Raleway.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webdata;
