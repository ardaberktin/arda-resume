import React, { useState, useEffect } from "react";
import "./DesktopApps.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Cancel";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
//import iPhoneImage from "./IphoneApps.png";
// tried to import the images beforehand but didn't work

function DesktopApps() {
  const [selectedArea, setSelectedArea] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [banner, setBanner] = useState(false);

  const images1 = ["Robber1.png", "Robber2.png"];

  const githubRobber = "https://github.com/ardaberktin/robber";
  const githubSocial = "https://github.com/ardaberktin/SocialMediaWebsite";
  const githubRes = "https://github.com/ardaberktin/arda-resume";

  const [click] = useState(false);
  const [button, setButton] = useState(false);

  const closeMobileMenu = () => setButton(false);

  const location = useLocation();

  // const handleBanner = () => {
  //   setBanner(!banner);
  // };

  // Initialize ref with current window width add useRef to react to use!!
  // const windowWidth = useRef(window.innerWidth);

  const handleButtonClick = (area) => {
    setCurrentImageIndex(0);
    setSelectedArea(area);
    setButton(true);

    ReactGA.event({
      category: "user_interaction",
      action: "clicked_desktop_area",
      label: area.toString(), // Include the area information in the label
    });
  };

  const scrollBackward = (area) => {
    if (area === 2) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images1.length - 1
      );
    }
  };

  const scrollForward = (area) => {
    if (area === 2) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images1.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  useEffect(() => {
    const sections = location.hash.slice(1).split("&");
    const deviceSection = sections[0];
    const appSection = sections[1];

    if (deviceSection === "desktop-apps") {
      setBanner(false);

      // Scroll to the element with the matching id
      const targetElement = document.getElementById("desktop-apps");

      // Scroll to the target
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Adjust the delay as needed
      }
    }

    if (appSection) {
      // Scroll to the element with the matching id
      if (appSection === "jastagram") {
        handleButtonClick(1);
      } else if (appSection === "robber") {
        handleButtonClick(2);
      } else if (appSection === "portfolio") {
        handleButtonClick(3);
      }
    }
  }, [location.hash]);

  return (
    <div>
      <div className="desktop-apps-title">
        <h1>Games & Websites</h1>
        <div className="desktop-icon-container"></div>
      </div>
      <div
        className={`desktop-container ${banner ? "collapsed" : "expanded"}`}
        id="desktop-apps"
      >
        <h2 className="desktop-app-description">
          Please Click On My Projects To Learn More!
        </h2>
        {/* Apply classes based on banner state */}
        <div className="desktop-wrapper">
          <div className="desktop">
            <button
              className="desktop-invisible-button desktop-button-area-1"
              onClick={() => handleButtonClick(1)}
            />

            {/* Invisible button overlay for Area 2 */}
            <button
              className="desktop-invisible-button desktop-button-area-2"
              onClick={() => handleButtonClick(2)}
            />

            <button
              className="desktop-invisible-button desktop-button-area-3"
              onClick={() => handleButtonClick(3)}
            />

            <img
              className="desktop-image"
              src="images/DesktopApps.png"
              alt="Desktop Screen"
            />
          </div>
          {click ||
            (button && (
              <div
                className={`desktop-app-info ${
                  selectedArea === 1
                    ? "area-1"
                    : selectedArea === 2
                    ? "area-2"
                    : selectedArea === 3
                    ? "area-3"
                    : ""
                }`}
              >
                <CloseIcon
                  className="exit-button"
                  onClick={() => closeMobileMenu()}
                  fontSize="large"
                />
                {selectedArea === 1 && (
                  <div>
                    {/* Content for Area 1 */}
                    <div className="desktop-app-title">
                      <h1>
                        JASTAGRAM{" "}
                        <a
                          href={githubSocial}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon className="github-icon" />
                        </a>
                      </h1>
                    </div>

                    <br />
                    <div className="desktop-skill-category">
                      <p className="desktop-app-points">
                        • Social Media website where users can log in and post
                        pictures. <br />
                        • Created Jastagram using HTML, CSS, Javascript and PHP.
                        <br />• Utilized my teamwork, communication and
                        collaboration skills with my teammates to work on the
                        project at the same time in our designated roles.
                      </p>
                      {/* Additional content for Area 1 */}
                    </div>
                  </div>
                )}
                {selectedArea === 2 && (
                  <div>
                    {/* Content for Area 2 */}
                    <a
                      className="download-robber"
                      href="/robbergame.jar"
                      download
                    >
                      <h4>Play Game!</h4>
                      <h5>Download . JAR File</h5>
                    </a>
                    <div className="desktop-app-title">
                      <h1>
                        ROBBER
                        <a
                          href={githubRobber}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon className="github-icon" />
                        </a>
                      </h1>
                    </div>
                    <div className="desktop-skill-category">
                      <p className="desktop-app-points">
                        • 2D (Frogger-like) game where you rob a bank and try to
                        escape from the cops before the train leaves. <br />
                        • Built the game with my team of 2 friends using Java
                        and object-oriented programming.
                        <br />• Designed the sprites and game mechanics,
                        practicing peer programming.
                        <br />• Led the team and assigned my group mates their
                        roles to meet the deadline effectively.
                      </p>
                    </div>

                    {/* Additional content for Area 2 */}
                  </div>
                )}
                {selectedArea === 3 && (
                  <div>
                    {/* Content for Area 2 */}
                    <div className="desktop-app-title">
                      <h1>
                        Arda's Portfolio
                        <a
                          href={githubRes}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon className="github-icon" />
                        </a>
                      </h1>
                    </div>
                    <div className="desktop-skill-category">
                      <p className="desktop-app-points">
                        • Built a portfolio website that showcases my
                        experiences, projects, and accomplishments in a visually
                        pleasing way.
                        <br />• Self-taught React to utilize it for the front
                        end alongside JavaScript, HTML and CSS. <br />•
                        Integrated Google Analytics to gather data about user
                        interactions to detect issues and improve user
                        experience. <br />• Deployed my React portfolio website
                        on GitHub Pages to make it live and accessible to
                        everyone.
                      </p>
                      {/* Additional content for Area 2 */}
                    </div>
                  </div>
                )}

                <div className="desktop-app-details">
                  {selectedArea === 2 && (
                    <div className="desktop-image-container">
                      <div className="desktop-image-and-btn">
                        <ArrowBackIosIcon
                          fontSize="large"
                          className="scroll-button"
                          onClick={() => scrollBackward(selectedArea)}
                        />
                        <img
                          className="desktop-app-image"
                          src={`images/${images1[currentImageIndex]}`}
                          alt="My Apps"
                        />

                        <ArrowForwardIosIcon
                          fontSize="large"
                          className="scroll-button"
                          onClick={() => scrollForward(selectedArea)}
                        />
                      </div>

                      {currentImageIndex === 0 && (
                        <div className="desktop-app-image-info">
                          <h4 className="desktop-image-title">
                            (1/2) Robbing the bank
                          </h4>
                          <p>
                            To rob the bank, you must avoid security personnel
                            and bring the key to the vault.
                          </p>
                        </div>
                      )}
                      {currentImageIndex === 1 && (
                        <div className="desktop-app-image-info">
                          <h4 className="desktop-image-title">
                            (2/2) Dodging the bullets
                          </h4>
                          <p>
                            As you are trying to escape, you come across cops
                            who are trying to shoot you.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  {selectedArea === 1 && (
                    <div className="desktop-image-container">
                      <div className="desktop-image-and-btn">
                        <img
                          className="desktop-app-image"
                          src={`images/Jastagram.png`}
                          alt="My Apps"
                        />
                      </div>
                    </div>
                  )}
                  {selectedArea === 3 && (
                    <div className="desktop-image-container">
                      <div className="desktop-image-and-btn">
                        <img
                          className="desktop-app-image"
                          src={`images/Portfolio.png`}
                          alt="My Apps"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DesktopApps;
