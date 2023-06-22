import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <div>
        <ul>
          <li>
            <Link to="/Portfolio/" className="text">
              home
            </Link>
          </li>
          <li>
            <Link to="/Portfolio/about" className="text">
              about
            </Link>
          </li>
          <li>
            <Link to="/Portfolio/projects" className="text">
              projects
            </Link>
          </li>
          <li>
            <Link to="/Portfolio/web-data" className="text">
              web data
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul id="socials">
          <li>
            <a
              href="https://github.com/kresimirgalic32"
              target="popup"
              className="text"
            >
              github
            </a>
          </li>
          <li>
            <a href="mailto:kresimir.galic32@gmail.com" className="text">
              mail
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
