import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";

function Projects() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [location.pathname]);

  return <h1 className="projects">Projects</h1>;
}

export default Projects;
