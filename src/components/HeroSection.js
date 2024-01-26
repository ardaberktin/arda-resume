import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
      <h1>ARDA BERKTIN</h1>
      <p>Software Engineering Student</p>
      <div className="hero-btns">
        <Button
          to="/experiences"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Experiences
        </Button>
        <Button
          to="/projects"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          PROJECTS <i className="fa-solid fa-bolt"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
