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
        <ul>
          <li>
            <Link
              to="https://github.com/kresimirgalic32"
              className="contacts text"
            >
              github
            </Link>
          </li>
          <li>
            <Link to="mailto:me" className="contacts text">
              mail
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
