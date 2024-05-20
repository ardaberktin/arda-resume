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
        <Route path="/arda-resume/" element={<Home />} />
        <Route path="/arda-resume/experiences" element={<Experiences />} />
        <Route path="/arda-resume/projects" element={<Projects />} />
        <Route path="/arda-resume/about-me" element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
