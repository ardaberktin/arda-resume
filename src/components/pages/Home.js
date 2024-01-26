import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Skills from "../Skills";

function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [location.pathname]);

  return (
    <>
      <HeroSection />
      <Cards />
      <Skills />
    </>
  );
}

export default Home;
