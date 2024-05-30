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
        Hello! I'm Arda, a dedicated software engineering student pursuing my
        Bachelor's degree at the University of Victoria. I believe that software
        systems are not just tools but crucial in serving and shaping our
        society.
        <br />
        <br />
        Throughout my academic journey, I have built a strong foundation in
        programming languages such as C, C#, Java, JavaScript, and Python. I
        have showcased my programming skills through various projects and
        internships, including my portfolio website, video game Robber, and
        internship at ARD Group. My experiences span from back-end, C# .Net, and
        Java to front-end React, Angular and JavaScript. This diverse range of
        knowledge and experience sets me apart.
        <br />
        <br />
        Beyond the technical skills, what defines me are my values and skills. I
        thrive in collaborative environments, where collective problem-solving
        is not just a task but a shared passion. Whether volunteering at 20/20
        CAN Victoria, working on a collaborative team at ARD GROUP, or mentoring
        students at PCE Turkey, I've learned the invaluable art of leadership,
        teamwork, and adaptability.
        <br />
        <br /> What truly drives me is the constant pursuit of growth. Every
        challenge is an opportunity to learn, and every setback is a chance to
        evolve. I'm eager to absorb new skills and apply them to real-world
        problems, innovate, and make a meaningful impact through software
        engineering. <br />
        <br />
        In essence, I'm not just a coder; I'm a leader, a team player, a problem
        solver, and an advocate for positive change. I believe in the power of
        collaboration, the value of feedback, and the endless possibilities of
        innovation. As I continue my journey, I'm excited about the challenges
        of developing scalable software solutions, opportunities to learn new
        programming languages or frameworks, and the chance to create something
        genuinely impactful by leveraging emerging technologies.
        <br />
        <br /> I believe a future where technology isn't just about lines of
        code but about making a real difference.
      </p>
    </div>
  );
}

export default AboutMeInfo;
