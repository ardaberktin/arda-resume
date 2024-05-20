import React, { useState, useEffect } from "react";
import "./IphoneApps.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Cancel";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import iPhoneImage from "./IphoneApps.png";
// tried to import the images beforehand but didn't work

function IphoneApps(isActive) {
  const [selectedArea, setSelectedArea] = useState(0);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [banner, setBanner] = useState(false);

  const images1 = ["MotHome.png", "MotTrack.png", "MotBudget.png", "MotAI.png"];
  const images2 = ["MDMHome.png", "MDMRoom.png", "MDMFavourites.png"];
  const images3 = ["Pixel1.png", "Pixel2.png"];

  const githubMOT = "https://github.com/ardaberktin/MoneyOnTrack";
  const githubMDM = "https://github.com/ardaberktin/MountDougMapsiOS-main";
  const githubMDM2 = "https://github.com/ardaberktin/MountDougMapsAndroid";

  const [click] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setButton(false);

  const location = useLocation();

  // Initialize ref with current window width add useRef to react to use!!
  // const windowWidth = useRef(window.innerWidth);
  // const handleBanner = () => {
  //   setBanner(!banner);
  // };

  const showButton = () => {
    const currentWidth = window.innerWidth;

    // Update the button state only if the width is less than or equal to 960
    if (currentWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();

    const sections = location.hash.slice(1).split("&");
    const deviceSection = sections[0];
    const appSection = sections[1];

    if (deviceSection === "mobile-apps") {
      setBanner(false);

      // Scroll to the element with the matching id
      const targetElement = document.getElementById("mobile-apps");
      console.log(targetElement);

      // Scroll to the target
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Adjust the delay as needed
      }
    }

    if (appSection) {
      // Open the element with the matching id
      if (appSection === "mot") {
        handleButtonClick(1);
      } else if (appSection === "mdmi") {
        handleButtonClick(2);
      } else if (appSection === "mdma") {
        handleButtonClick(3);
      }
    }
  }, [location.hash]);

  const handleButtonClick = (area) => {
    setCurrentImageIndex(0);
    setSelectedArea(area);
    setButton(true);

    ReactGA.event({
      category: "user_interaction",
      action: "clicked_mobile_app_area",
      label: area.toString(), // Include the area information in the label
    });
  };

  const scrollBackward = (area) => {
    if (area === 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images1.length - 1
      );
    } else if (area === 2) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images2.length - 1
      );
    } else if (area === 3) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : images3.length - 1
      );
    }
  };

  const scrollForward = (area) => {
    if (area === 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images1.length - 1 ? prevIndex + 1 : 0
      );
    } else if (area === 2) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images2.length - 1 ? prevIndex + 1 : 0
      );
    } else if (area === 3) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images3.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  return (
    <div>
      <div className="mobile-apps-title">
        <h1>Mobile Apps</h1>
        <div className="iphone-icon-container">
          {/* {banner ? (
            <ExpandMoreIcon
              className="expend-more icon-size"
              sx={{ fontSize: 50 }}
            />
          ) : (
            <ExpandLessIcon
              className="expend-less icon-size"
              sx={{ fontSize: 50 }}
            />
          )} */}
        </div>
      </div>
      <div
        className={`iphone-container ${banner ? "collapsed" : "expanded"}`}
        id="mobile-apps"
      >
        <h2 className="app-description" onClick={() => handleButtonClick(0)}>
          Please Click On My Apps To Learn More!
        </h2>
        <div className="iphone-wrapper">
          <div className="iphone">
            <button
              className="invisible-button button-area-1"
              onClick={() => handleButtonClick(1)}
            />

            {/* Invisible button overlay for Area 2 */}
            <button
              className="invisible-button button-area-2"
              onClick={() => handleButtonClick(2)}
            />

            <button
              className="invisible-button button-area-3"
              onClick={() => handleButtonClick(3)}
            />

            <img
              className="iphone-image"
              src="images/IphoneApps.png"
              alt="iPhone"
            />
          </div>
          {click ||
            (button && (
              <div className="iphone-app-info" id="iphone-app-info">
                <CloseIcon
                  className="exit-button"
                  onClick={() => closeMobileMenu()}
                  fontSize="large"
                />
                {selectedArea === 0 && (
                  <>
                    <h1>
                      My iOS Apps are built on XCode with Swift and SwiftUI.
                    </h1>{" "}
                    <br />
                    <h1>
                      My Android App is built on Android Studio with Java.
                    </h1>
                  </>
                )}
                {selectedArea === 1 && (
                  <div>
                    {/* Content for Area 1 */}
                    <h1>
                      Money on Track{" "}
                      <a
                        href={githubMOT}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon className="github-icon" />
                      </a>
                    </h1>
                    <br />
                    <p>
                      • Personal Finance app built with Swift <br />
                      • Explored user and functional needs, resulting in a
                      detailed software requirements document, and followed an
                      incremental development process.
                      <br />
                      • Utilized Firebase API, for authentication, database, and
                      Open AI API, for financial education, to satisfy the user
                      requirements.
                      <br />• Applied object-oriented programming in Swift and
                      designed the UI with Swift UI, adopting a human-centered
                      design process.
                    </p>
                    {/* Additional content for Area 1 */}
                  </div>
                )}
                {selectedArea === 2 && (
                  <div>
                    {/* Content for Area 2 */}
                    <h1>
                      MountDoug Maps - iOS{" "}
                      <a
                        href={githubMDM}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon className="github-icon" />
                      </a>
                    </h1>
                    <p>
                      • Created a Maps application for Mount Douglas Secondary
                      that displays classroom locations. <br />
                      • Self-taught Swift and XCode to develop the iOS app,
                      improving upon the Android version developed in Java in
                      2022.
                      <br />• Efficiently tested and debugged the application to
                      ensure quality before deployment.
                    </p>
                    {/* Additional content for Area 2 */}
                  </div>
                )}
                {selectedArea === 3 && (
                  <div>
                    {/* Content for Area 2 */}
                    <h1>
                      MountDoug Maps - Android{" "}
                      <a
                        href={githubMDM2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon className="github-icon" />
                      </a>
                    </h1>
                    <p>
                      • Created an app that shows each classroom on the map in
                      my high school to help newcomers. <br />
                      • Learned Android Studio independently and used my Java
                      knowledge to code the product.
                      <br />• Presented my application to a large group using my
                      communication and presentation skills.
                    </p>
                    {/* Additional content for Area 2 */}
                  </div>
                )}

                <div className="app-details">
                  {selectedArea === 1 && (
                    <div className="image-container">
                      <div className="image-and-btn">
                        <ArrowBackIosIcon
                          fontSize="large"
                          className="scroll-button"
                          onClick={() => scrollBackward(selectedArea)}
                        />

                        <img
                          className="app-image"
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
                        <div className="app-image-info">
                          <h4 className="image-title">(1/4) Home View</h4>
                          <p>
                            Quick look at your monthly budget chart and the
                            transactions made by categories.
                          </p>
                        </div>
                      )}
                      {currentImageIndex === 1 && (
                        <div className="app-image-info">
                          <h4 className="image-title">(2/4) Track View</h4>
                          <p>
                            Track your net worth, account balances and
                            individual transactions.
                          </p>
                        </div>
                      )}
                      {currentImageIndex === 2 && (
                        <div className="app-image-info">
                          <h4 className="image-title">(3/4) Budget View</h4>
                          <p>Compare your spending to your budget.</p>
                        </div>
                      )}
                      {currentImageIndex === 3 && (
                        <div className="app-image-info">
                          <h4 className="image-title">
                            (4/4) Budget Buddy AI View
                          </h4>
                          <p>
                            Ask Budget Buddy (powered by OpenAI) all about your
                            finance related questions.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  {selectedArea === 2 && (
                    <div className="image-container">
                      <div className="image-and-btn">
                        <ArrowBackIosIcon
                          fontSize="large"
                          className="scroll-button"
                          onClick={() => scrollBackward(selectedArea)}
                        />
                        <img
                          className="app-image"
                          src={`images/${images2[currentImageIndex]}`}
                          alt="My Apps"
                        />

                        <ArrowForwardIosIcon
                          fontSize="large"
                          className="scroll-button"
                          onClick={() => scrollForward(selectedArea)}
                        />
                      </div>

                      {currentImageIndex === 0 && (
                        <div className="app-image-info">
                          <h4 className="image-title"> (1/3) Home View</h4>
                          <p>
                            Scroll or search to find the directions to the
                            desired classroom.
                          </p>
                        </div>
                      )}
                      {currentImageIndex === 1 && (
                        <div className="app-image-info">
                          <h4 className="image-title"> (2/3) Map View</h4>
                          <p>Follow the red arrow to the destination.</p>
                        </div>
                      )}
                      {currentImageIndex === 2 && (
                        <div className="app-image-info">
                          <h4 className="image-title">
                            {" "}
                            (3/3) Favourites View
                          </h4>
                          <p>
                            Add, remove or reorder your favourites to access
                            them easily.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                  {selectedArea === 3 && (
                    <div className="image-container">
                      <div className="image-and-btn">
                        <ArrowBackIosIcon
                          fontSize="large"
                          className="scroll-button"
                          onClick={() => scrollBackward(selectedArea)}
                        />
                        <img
                          className="app-image mdma"
                          src={`images/${images3[currentImageIndex]}`}
                          alt="My Apps"
                        />

                        <ArrowForwardIosIcon
                          fontSize="large"
                          className="scroll-button"
                          onClick={() => scrollForward(selectedArea)}
                        />
                      </div>

                      {currentImageIndex === 0 && (
                        <div className="app-image-info">
                          <h4 className="image-title">(1/2) Home View</h4>
                          <p>
                            Scroll to find the classroom and tap to see the
                            location on the map.
                          </p>
                        </div>
                      )}
                      {currentImageIndex === 1 && (
                        <div className="app-image-info">
                          <h4 className="image-title">(2/2) Map View</h4>
                          <p>
                            Follow the arrow to arrive at the desired classroom.
                          </p>
                        </div>
                      )}
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

export default IphoneApps;
