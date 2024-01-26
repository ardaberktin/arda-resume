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
              path="/projects"
            />
            <CardItem
              src="images/Robber.jpg"
              text="2D Video Game Built with Java"
              label="Game"
              path="/experiences"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/experiences"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/experiences"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/experiences"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
