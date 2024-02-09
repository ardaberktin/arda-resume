import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import ContactMe from "../ContactMe";
import AboutMeInfo from "../AboutMeInfo";

function AboutMe() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [location.pathname]);

  return (
    <>
      <ContactMe />
      <AboutMeInfo />
    </>
  );
}

export default AboutMe;
