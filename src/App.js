import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experiences from "./components/pages/Experiences";
import Projects from "./components/pages/Projects";
import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/Footer";
// Replace with your tracking ID

// source: https://www.youtube.com/watch?v=I2UBjN5ER4s&t=4427s
// https://github.com/briancodex/react-website-v1

//Useful resources:
//animations: https://www.youtube.com/watch?v=GOuwOI-WSkE&t=1117s

function App() {
  useEffect(() => {
    //Displays a warning when refreshing the page because refreshing it gives an error on github pages.
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/arda-resume/" element={<Home />} />
          <Route path="/arda-resume/experiences" element={<Experiences />} />
          <Route path="/arda-resume/projects" element={<Projects />} />
          <Route path="/arda-resume/about-me" element={<AboutMe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
