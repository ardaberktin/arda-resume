import React from "react";
//import { Link } from "react-router-dom";
import "./AboutMeInfo.css";

function AboutMeInfo() {
  return (
    <div className="about-me-container">
      <h1 className="about-me-title">About Me</h1>

      <img
        className="arda-image"
        src="images/ardaface.png"
        alt="Arda Berktin"
      />

      <a className="download-resume" href="/ArdaBerktinResume.pdf" download>
        Download My Resume
      </a>

      <p className="about-me-paragraph">
        Hello there! I'm Arda, a dedicated software engineering student
        currently pursuing my Bachelor's degree at the University of Victoria. I
        believe that software systems are not just tools but crucial in serving
        and shaping our society.
        <br />
        <br />
        While my journey in software engineering has been exciting, it's the
        projects that truly define my enthusiasm. Take, for instance, the Money
        on Track application, built from scratch using Swift and SwiftUI. This
        project wasn't just about lines of code; it was about creating an
        experience that empowers users to take control of their finances.
        Integrating Firebase API for seamless data storage and incorporating an
        AI assistant named Budget Buddy, powered by OpenAI's API, was just the
        beginning. <br />
        <br />
        But beyond the projects, what defines me are my values and skills that I
        bring to the table. I thrive in collaborative environments, where
        collective problem-solving is not just a task but a shared passion.
        Whether it's volunteering at 20/20 CAN Victoria, engaging in group
        projects, or mentoring students at PCE Turkey, I've learned the
        invaluable art of leadership, teamwork and adaptability.
        <br />
        <br /> Yet, what truly drives me is the constant pursuit of growth.
        Every challenge is an opportunity to learn, every setback a chance to
        evolve. I'm not just eager to absorb new skills but to apply them to
        real-world problems, to innovate, and to make a meaningful impact
        through software engineering. <br />
        <br />
        In essence, I'm not just a coder; I'm a leader, a team player, a problem
        solver, and an advocate for positive change. I believe in the power of
        collaboration, the value of feedback, and the endless possibilities that
        come with innovation. And as I continue my journey, I'm excited about
        the challenges that lie ahead, the opportunities to learn, and the
        chance to create something truly impactful.
        <br />
        <br /> Let's build a future where technology isn't just about lines of
        code but about making a difference, one line at a time.
      </p>
    </div>
  );
}

export default AboutMeInfo;
