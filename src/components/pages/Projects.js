import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Projects.css";
import "../../App.css";
import IphoneApps from "../IphoneApps";
import DesktopApps from "../DesktopApps";
import ReactGA from "react-ga";

function Projects() {
  const location = useLocation();

  const [mobile, SetMobile] = useState(true);
  const [desktop, SetDesktop] = useState(false);

  const SetMobileButton = () => {
    SetMobile(true);
    SetDesktop(false);
  };

  const SetDesktopButton = () => {
    SetDesktop(true);
    SetMobile(false);
  };

  useEffect(() => {
    // Extract the section identifier from the hash
    //const section = location.hash.substr(1);

    const sections = location.hash.slice(1).split("&");
    const deviceSection = sections[0];
    //const appSection = sections[1];

    if (deviceSection === "mobile-apps") {
      SetMobileButton();
    } else if (deviceSection === "desktop-apps") {
      SetDesktopButton();
    }
    console.log(sections[0]);

    if (!sections[0]) {
      // If no section identifier, scroll to the top
      window.scrollTo(0, 0);
    }

    ReactGA.pageview(location.pathname + location.search);
    document.title = "Arda's Portfolio - Projects";
  }, [location.pathname, location.hash, location.search]);

  return (
    <div className="projects-wrapper">
      <div className="projects">
        <div className="projects-title-wrapper">
          <div className="projects-title">
            <h1>My Projects</h1>
          </div>
          <div className="big-title-container">
            <Link
              className={`mobile-apps-big-title ${mobile ? "active" : ""}`}
              onClick={SetMobileButton}
            >
              Mobile Apps
            </Link>
            <Link
              className={`desktop-apps-big-title ${desktop ? "active" : ""}`}
              onClick={SetDesktopButton}
            >
              Games & Websites
            </Link>
          </div>
        </div>
        {mobile && <IphoneApps />}
        {desktop && <DesktopApps />}
      </div>
    </div>
  );
}

export default Projects;
