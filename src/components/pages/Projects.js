import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import IphoneApps from "../IphoneApps";
import DesktopApps from "../DesktopApps";
import ReactGA from "react-ga";

function Projects() {
  const location = useLocation();

  useEffect(() => {
    // Extract the section identifier from the hash
    //const section = location.hash.substr(1);
    const section = location.hash.slice(1).split("&");

    console.log(section[0]);

    if (!section[0]) {
      // If no section identifier, scroll to the top
      window.scrollTo(0, 0);
    }

    ReactGA.pageview(location.pathname + location.search);
    document.title = "Arda's Portfolio - Projects";
  }, [location.pathname, location.hash, location.search]);

  return (
    <div className="projects">
      <IphoneApps />
      <DesktopApps />
    </div>
  );
}

export default Projects;
