import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Webdata from "./Webdata";
import Github from "./Github";
import Error from "./Error";
import Navbar from "./Navbar";
const Index = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/Portfolio/" element={<Home />} />

        <Route exact path="/Portfolio/about" element={<About />} />

        <Route exact path="/Portfolio/projects" element={<Projects />} />

        <Route exact path="/Portfolio/web-data" element={<Webdata />} />
        <Route
          exact
          path="https://github.com/kresimirgalic32"
          element={<Github />}
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Index;
