import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import ContactMe from "../ContactMe";
import AboutMeInfo from "../AboutMeInfo";
import { analytics } from "../../config/firebase";

function AboutMe() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes

    const pageTitle = "Arda's Portfolio - About Me"; // Set the page title
    document.title = pageTitle; // Update document title

    analytics.logEvent("page_view", {
      page_path: location.pathname,
      page_title: pageTitle, // Pass the pageTitle variable
    });
  }, [location.pathname, location.search]); // Include location.pathname and location.search in the dependency array

  return (
    <>
      <AboutMeInfo />
      <ContactMe />
    </>
  );
}

export default AboutMe;
