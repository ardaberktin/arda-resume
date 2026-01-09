import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "./AboutMeInfo.css";

function AboutMeInfo() {
  const [isPdfVisible, setIsPdfVisible] = useState(false);

  return (
    <div className="about-me-container">
      <h1 className="about-me-title">About Me</h1>

      <img
        className="arda-image"
        src="images/ardaface.jpeg"
        alt="Arda Berktin"
      />

      <div className="resume-options">
        {/* <a
          className="download-resume"
          href="/images/ArdaBerktinResume.pdf"
          download
        >
          Download My Resume
        </a> */}
        <button
          className="download-resume view-resume-btn"
          onClick={() => setIsPdfVisible(!isPdfVisible)}
        >
          {isPdfVisible ? "Hide Resume" : "View My Resume"}
        </button>
      </div>

      {isPdfVisible && (
        <div className="pdf-viewer-container">
          <iframe
            src="/images/ArdaBerktinResume.pdf"
            title="Resume PDF"
            className="pdf-iframe"
          />
        </div>
      )}

      <p className="about-me-paragraph">
        Hello! I'm Arda. I believe that technology isn't just about lines of
        code—it's about shaping the future. Currently pursuing my Bachelor's in
        Software Engineering at UVic, I am passionate about building systems
        that serve real human needs. I have built a diverse technical
        foundation, fluent in languages like C, C#, Java, and Python, and tools
        ranging from Docker to RabbitMQ. My journey has taken me from building
        full-stack learning platforms at INSPIRE UVic to analyzing Write
        Amplification Factors on SSDs at Dell Technologies. This
        versatility—spanning from front-end React interfaces to low-level
        memory-mapped arrays—sets me apart.
        <br />
        <br />
        However, my true strength lies in how I work. I believe in the power of
        shared passion. At ARD Technologies, I learned the invaluable art of
        leadership by managing staged deployments and ensuring code quality for
        my team. At Bankamatics, I learned resilience by pitching products to
        stakeholders and managing the full product lifecycle.
        <br />
        <br />
        What drives me is the constant pursuit of growth. Every challenge,
        whether it’s reducing code redundancy by 35% or securing user data with
        JWT, is an opportunity to evolve. I am ready to bring this energy to a
        team that values innovation, adaptability, and meaningful impact.
      </p>
    </div>
  );
}

export default AboutMeInfo;
