import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Curriculum from "./Curriculum";
import Github from "./Github";
import Mail from "./Mail";
import Error from "./Error";
import Navbar from "./Navbar";
const Index = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="about" element={<About />} />

        <Route exact path="projects" element={<Projects />} />

        <Route exact path="/curriculum" element={<Curriculum />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default Index;
