import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import ContactMe from "../ContactMe";
import AboutMeInfo from "../AboutMeInfo";
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
      <AboutMeInfo />
      <ContactMe />
    </>
  );
}

export default AboutMe;
