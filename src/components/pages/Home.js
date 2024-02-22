import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Skills from "../Skills";
import { getAnalytics } from "firebase/analytics";

const analytics = getAnalytics();

function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes

    const pageTitle = "Arda's Portfolio - Home"; // Set the page title
    document.title = pageTitle; // Update document title

    analytics.logEvent("page_view", {
      page_path: location.pathname,
      page_title: pageTitle, // Pass the pageTitle variable
    });
  }, [location.pathname, location.search]);

  return (
    <>
      <HeroSection />
      <Cards />
      <Skills />
    </>
  );
}

export default Home;
