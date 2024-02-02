import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import IphoneApps from "../IphoneApps";
import DesktopApps from "../DesktopApps";

function Projects() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [location.pathname]);

  return (
    <>
      <IphoneApps />
      <DesktopApps />
    </>
  );
}

export default Projects;
