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
      <h1>Check Out My Projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/MoneyOnTrack.jpg"
              text="Personal Finance App Built With Swift"
              label="Mobile App"
              path="/arda-resume/projects#mobile-apps"
            />
            <CardItem
              src="images/Robber.jpg"
              text="2D Video Game Built With Java"
              label="Game"
              path="/arda-resume/projects#desktop-apps"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Jastagram.jpg"
              text="Social Media Website Built With HTML, CSS, JavaScript And PHP"
              label="Website"
              path="/arda-resume/projects#desktop-apps"
            />
            <CardItem
              src="images/MountDougMaps-iOS.jpg"
              text="Maps App For Mount Douglas Secondary Built with Swift"
              label="Mobile App"
              path="/arda-resume/projects#mobile-apps"
            />
            <CardItem
              src="images/MountDougMaps-Android.jpg"
              text="Maps App For Mount Douglas Secondary Built With Java"
              label="Mobile App"
              path="/arda-resume/projects#mobile-apps"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
