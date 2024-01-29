import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import IphoneApps from "../IphoneApps";

function Projects() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [location.pathname]);

  return (
    <>
      <IphoneApps />
    </>
  );
}

export default Projects;
