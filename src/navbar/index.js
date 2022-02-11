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
        <Route exact path="/" element={<Home />} />

        <Route exact path="/about" element={<About />} />

        <Route exact path="/projects" element={<Projects />} />

        <Route exact path="/web-data" element={<Webdata />} />
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
