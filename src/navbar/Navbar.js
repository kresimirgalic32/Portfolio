import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container">
      <div>
        <ul>
          <li>
            <Link to="/" className="text">
              home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text">
              about
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text">
              projects
            </Link>
          </li>
          <li>
            <Link to="/curriculum" className="text">
              curriculum
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
