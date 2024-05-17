import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    // Displays a warning when refreshing the page because refreshing it gives an error on github pages.
    const handleBeforeUnload = (event) => {
      if (
        location.pathname === "/arda-resume/" &&
        location.pathname.length === 13
      ) {
      } else {
        console.log(location.pathname + " pathname");
        console.log(location.pathname.length + " pathname length");
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location.pathname]);

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
