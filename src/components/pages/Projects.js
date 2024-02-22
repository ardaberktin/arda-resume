import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import IphoneApps from "../IphoneApps";
import DesktopApps from "../DesktopApps";
import { getAnalytics } from "firebase/analytics";

const analytics = getAnalytics();

function Projects() {
  const location = useLocation();

  useEffect(() => {
    // Extract the section identifier from the hash
    //const section = location.hash.substr(1);
    const section = location.hash.slice(1);

    console.log(section);

    if (section) {
      // Scroll to the element with the matching id
      const targetElement = document.getElementById(section);
      console.log(targetElement);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If no section identifier, scroll to the top
      window.scrollTo(0, 0);
    }

    const pageTitle = "Arda's Portfolio - Projects"; // Set the page title
    document.title = pageTitle; // Update document title

    analytics.logEvent("page_view", {
      page_path: location.pathname,
      page_title: pageTitle, // Pass the pageTitle variable
    });
  }, [location.pathname, location.hash, location.search]);

  return (
    <>
      <IphoneApps />
      <DesktopApps />
    </>
  );
}

export default Projects;
