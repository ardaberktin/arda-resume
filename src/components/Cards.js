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
              path="/projects#mobile-apps&mot"
            />
            <CardItem
              src="images/Robber.jpg"
              text="2D Video Game Built With Java"
              label="Video Game"
              path="/projects#desktop-apps&robber"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Jastagram.jpg"
              text="Social Media Website Built With HTML, CSS, JavaScript And PHP"
              label="Website"
              path="/projects#desktop-apps&jastagram"
            />
            <CardItem
              src="images/MountDougMaps-iOS.jpg"
              text="Maps App For Mount Douglas Secondary Built with Swift"
              label="Mobile App"
              path="/projects#mobile-apps&mdmi"
            />
            <CardItem
              src="images/MountDougMaps-Android.jpg"
              text="Maps App For Mount Douglas Secondary Built With Java"
              label="Mobile App"
              path="/projects#mobile-apps&mdma"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
