import React from "react";
import "./Footer.css";
//import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  const goToStart = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Pages</h2>
            <Link to="/" className="footer-sublink" onClick={goToStart}>
              Home
            </Link>
            <Link
              to="/experiences"
              className="footer-sublink"
              onClick={goToStart}
            >
              Experiences
            </Link>
            <Link to="/projects" className="footer-sublink" onClick={goToStart}>
              Projects
            </Link>
            <Link to="/about-me" className="footer-sublink" onClick={goToStart}>
              About Me
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>Projects</h2>
            <Link
              to="/projects#mobile-apps&mot"
              className="footer-sublink"
              onClick={goToStart}
            >
              Money On Track
            </Link>
            <Link
              to="/projects#desktop-apps&robber"
              className="footer-sublink"
              onClick={goToStart}
            >
              Robber
            </Link>
            <Link
              to="/projects#desktop-apps&jastagram"
              className="footer-sublink"
              onClick={goToStart}
            >
              Jastagram
            </Link>
            <Link
              to="/projects#mobile-apps&mdmi"
              className="footer-sublink"
              onClick={goToStart}
            >
              MountDoug Maps - iOS
            </Link>
            <Link
              to="/projects#mobile-apps&mdma"
              className="footer-sublink"
              onClick={goToStart}
            >
              MountDoug Maps - Android
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link
              to="https://linkedin.com/in/arda-berktin-861852253"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-sublink"
            >
              LinkedIn <i className="fab fa-linkedin" />
            </Link>
            <Link
              to="https://github.com/ardaberktin"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-sublink"
            >
              GitHub <i className="fab fa-github" />
            </Link>
            <Link
              to="https://instagram.com/ardaberktin"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-sublink"
            >
              Instagram <i className="fab fa-instagram" />
            </Link>
            {/* <Link to="/">Email</Link> */}
            <Link
              to="mailto:arberktin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-sublink"
            >
              Email <i className="fa-solid fa-envelope"></i>
            </Link>
          </div>
        </div>
        {/* <div className="footer-link-wrapper"></div> */}
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo" onClick={goToStart}>
              ARDA BERKTIN
            </Link>
          </div>
          {/* <small class="website-rights">TRVL © 2020</small> */}
          <div className="social-icons">
            <Link
              className="social-icon-link linkedin"
              to="https://linkedin.com/in/arda-berktin-861852253"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
            <Link
              className="social-icon-link github"
              to="https://github.com/ardaberktin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <i className="fab fa-github" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="https://instagram.com/ardaberktin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link gmail"
              to="mailto:arberktin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <i className="fa-solid fa-envelope"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
