import React, { useState } from "react";
import "./DesktopApps.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Cancel";
import ReactGA from "react-ga";
//import iPhoneImage from "./IphoneApps.png";
// tried to import the images beforehand but didn't work

function DesktopApps() {
  const [selectedArea, setSelectedArea] = useState(0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images1 = ["Robber1.png", "Robber2.png"];

  const githubRobber = "https://github.com/ardaberktin/robber";
  const githubSocial = "https://github.com/ardaberktin/SocialMediaWebsite";
  const githubRes = "https://github.com/ardaberktin/arda-resume";

  const [click] = useState(false);
  const [button, setButton] = useState(false);

  const closeMobileMenu = () => setButton(false);

  // Initialize ref with current window width add useRef to react to use!!
  // const windowWidth = useRef(window.innerWidth);

  const handleButtonClick = (area) => {
    setCurrentImageIndex(0);
    setSelectedArea(area);
    setButton(true);

    ReactGA.event({
      category: "user_engagement",
      action: "clicked_desktop_area",
      label: `area_${area}`, // Include the area information in the label
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

  return (
    <div className="desktop-container" id="desktop-apps">
      <h1 className="desktop-apps-title">Desktop Apps & Websites</h1>
      <h2 className="desktop-app-description">
        Please Click On One Of My Projects To Learn More!
      </h2>
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
            <div className="desktop-app-info">
              <CloseIcon
                className="exit-button"
                onClick={() => closeMobileMenu()}
                fontSize="large"
              />
              {selectedArea === 1 && (
                <div>
                  {/* Content for Area 1 */}
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

                  <br />
                  <p>
                    • Social Media website where users can log in and post
                    pictures. <br />
                    • Created Jastagram using HTML, CSS, Javascript and PHP.
                    <br />• Utilized my teamwork, communication and
                    collaboration skills with my teammates to work on the
                    project at the same time in our designated roles.
                  </p>
                  {/* Additional content for Area 1 */}
                </div>
              )}
              {selectedArea === 2 && (
                <div>
                  {/* Content for Area 2 */}
                  <h1>
                    ROBBER{" "}
                    <a
                      href={githubRobber}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="github-icon" />
                    </a>
                  </h1>
                  <p>
                    • 2D (Frogger-like) game where you rob a bank and try to
                    escape from the cops before the train leaves. <br />
                    • Built the game with my team of 2 friends using Java and
                    object-oriented programming.
                    <br />• Designed the sprites and game mechanics, practicing
                    peer programming.
                    <br />• Led the team and assigned my group mates their roles
                    to meet the deadline effectively.
                  </p>
                  {/* Additional content for Area 2 */}
                </div>
              )}
              {selectedArea === 3 && (
                <div>
                  {/* Content for Area 2 */}
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

                  <p>
                    • Built a website with React that showcases all my
                    professional accomplishments and experiences in a
                    beautifully designed user interface. <br />• Researched and
                    self-taught React to improve my interactive web development
                    skills. <br /> <br />
                    Note: I sincerely hope that you like this website!
                  </p>
                  {/* Additional content for Area 2 */}
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
                          (1) Robbing the bank
                        </h4>
                        <p>
                          To rob the bank, you must avoid security personnel and
                          bring the key to the vault.
                        </p>
                      </div>
                    )}
                    {currentImageIndex === 1 && (
                      <div className="desktop-app-image-info">
                        <h4 className="desktop-image-title">
                          (2) Dodging the bullets
                        </h4>
                        <p>
                          As you are trying to escape, you come across cops who
                          are trying to shoot you.
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
                        src={`images/Portfolio.jpeg`}
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
  );
}

export default DesktopApps;
