import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experiences from "./components/pages/Experiences";
import Projects from "./components/pages/Projects";
import ContactMe from "./components/pages/ContactMe";
import Footer from "./components/Footer";

// source: https://www.youtube.com/watch?v=I2UBjN5ER4s&t=4427s
// https://github.com/briancodex/react-website-v1/tree/starter

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;