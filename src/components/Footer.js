import React from "react";
import "./Footer.css";
//import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          ---- FOOTER IN PROGRESS ----
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Pages</h2>
            <Link to="/arda-resume/" className="footer-sublink">
              Home
            </Link>
            <Link to="/arda-resume/experiences" className="footer-sublink">
              Experiences
            </Link>
            <Link to="/arda-resume/projects" className="footer-sublink">
              Projects
            </Link>
            <Link to="/arda-resume/about-me" className="footer-sublink">
              About Me
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Projects</h2>
            <Link
              to="/arda-resume/projects#mobile-apps&mot"
              className="footer-sublink"
            >
              Money On Track
            </Link>
            <Link
              to="/arda-resume/projects#desktop-apps&robber"
              className="footer-sublink"
            >
              Robber
            </Link>
            <Link
              to="/arda-resume/projects#desktop-apps&jastagram"
              className="footer-sublink"
            >
              Jastagram
            </Link>
            <Link
              to="/arda-resume/projects#mobile-apps&mdmi"
              className="footer-sublink"
            >
              MountDoug Maps - iOS
            </Link>
            <Link
              to="/arda-resume/projects#mobile-apps&mdma"
              className="footer-sublink"
            >
              MountDoug Maps - Android
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link
              to="https://linkedin.com/in/arda-berktin-861852253"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-sublink"
            >
              LinkedIn <i class="fab fa-linkedin" />
            </Link>
            <Link
              to="https://github.com/ardaberktin"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-sublink"
            >
              GitHub <i class="fab fa-github" />
            </Link>
            <Link
              to="https://instagram.com/ardaberktin"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-sublink"
            >
              Instagram <i class="fab fa-instagram" />
            </Link>
            {/* <Link to="/">Email</Link> */}
            <Link
              to="mailto:arberktin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-sublink"
            >
              Email <i class="fa-solid fa-envelope"></i>
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/arda-resume/" className="social-logo">
              ARDA BERKTIN
            </Link>
          </div>
          {/* <small class="website-rights">TRVL © 2020</small> */}
          <div class="social-icons">
            <Link
              class="social-icon-link linkedin"
              to="https://linkedin.com/in/arda-berktin-861852253"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
            <Link
              class="social-icon-link github"
              to="https://github.com/ardaberktin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="https://instagram.com/ardaberktin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link gmail"
              to="mailto:arberktin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <i class="fa-solid fa-envelope"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
