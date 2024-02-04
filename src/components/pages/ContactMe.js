import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import { Link } from "react-router-dom";

function ContactMe() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [location.pathname]);
  return (
    <div className="skill-container">
      <h1 className="h1">Contact Me</h1>
      <div className="skill-wrapper">
        {/* Frontend Skills */}
        <div className="skill-category">
          <h2>Phone Number</h2>
          <div className="skill-list">
            <a
              href="tel:+12505071691"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-email"
            >
              <p>+1 (250) 507 1601</p>
            </a>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skill-category">
          <h2>Email</h2>
          <div className="skill-list">
            <a
              href="mailto:arberktin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-email"
            >
              <p>arberktin@gmail.com</p>
            </a>
          </div>
        </div>

        <div class="contact-social-icons">
          <Link
            class="contact-social-icon-link linkedin"
            to="https://linkedin.com/in/arda-berktin-861852253"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin" />
          </Link>
          <Link
            class="contact-social-icon-link github"
            to="https://github.com/ardaberktin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <i class="fab fa-github" />
          </Link>
          <Link
            class="contact-social-icon-link instagram"
            to="https://instagram.com/ardaberktin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram" />
          </Link>
          <Link
            class="contact-social-icon-link gmail"
            to="mailto:arberktin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <i class="fa-solid fa-envelope"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
