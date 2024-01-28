import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [location.pathname]);

  return (
    <div className="cards">
      <h1>Check out my Projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/MoneyOnTrack.jpg"
              text="Personal Finance App built with Swift"
              label="Mobile App"
              path="/arda-resume/projects"
            />
            <CardItem
              src="images/Robber.jpg"
              text="2D Video Game Built with Java"
              label="Game"
              path="/arda-resume/projects"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Jastagram.jpg"
              text="Social Media Website built with HTML, CSS, JavaScript and PHP"
              label="Website"
              path="/arda-resume/projects"
            />
            <CardItem
              src="images/MountDougMaps-iOS.jpg"
              text="Maps of for Mount Douglas Secondary built with Swift"
              label="Mobile App"
              path="/arda-resume/projects"
            />
            <CardItem
              src="images/MountDougMaps-Android.jpg"
              text="Maps of for Mount Douglas Secondary built with Java"
              label="Mobile App"
              path="/arda-resume/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
