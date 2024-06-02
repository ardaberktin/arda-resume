import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Experiences from "./components/pages/Experiences";
import Projects from "./components/pages/Projects";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/Footer";

//source: https://youtu.be/I2UBjN5ER4s?si=Y5Z8KxagVCyQ2XDK
//https://github.com/briancodex/react-website-v1

// // "deploy": "gh-pages -d build",

//MainApp
function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
