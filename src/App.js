import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import Experiences from "./components/pages/Experiences";
import Projects from "./components/pages/Projects";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/Footer";

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
        <Route path="/ardaberktin.com/" element={<Home />} />
        <Route path="/ardaberktin.com/experiences" element={<Experiences />} />
        <Route path="/ardaberktin.com/projects" element={<Projects />} />
        <Route path="/ardaberktin.com/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
