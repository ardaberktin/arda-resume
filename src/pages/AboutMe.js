import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import ContactMe from "../components/sections/ContactMe";
import AboutMeInfo from "../components/sections/AboutMeInfo";
import ReactGA from "react-ga";

function AboutMe() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
    ReactGA.pageview(location.pathname + location.search);
    document.title = "Arda's Portfolio - About Me";
  }, [location.pathname, location.search]); // Include location.pathname and location.search in the dependency array

  return (
    <>
      <div className="about-me-main">
        <AboutMeInfo />
        <ContactMe />
      </div>
    </>
  );
}

export default AboutMe;
