import { Link } from "react-router-dom";
import "./ContactMe.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function ContactMe() {
  return (
    <div className="contact-me-container">
      <h1 className="contact-me-title">Contact Me</h1>
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
              <p>+1 (250) 507 1691</p>
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
        <h2>Connect With Me</h2>
        <div className="contact-social-icons">
          <div className="contact-social-icon-ind">
            <Link
              className="contact-social-icon-link linkedin"
              to="https://linkedin.com/in/arda-berktin-861852253"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon sx={{ fontSize: 80 }} />
            </Link>
            <h4>LinkedIn</h4>
            <p>in/ardaberktin</p>
          </div>
          <div className="contact-social-icon-ind">
            <Link
              className="contact-social-icon-link github"
              to="https://github.com/ardaberktin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <GitHubIcon sx={{ fontSize: 80 }} />
            </Link>
            <h4>Github</h4>
            <p>/ardaberktin</p>
          </div>
          <div className="contact-social-icon-ind">
            <Link
              className="contact-social-icon-link instagram"
              to="https://instagram.com/ardaberktin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon sx={{ fontSize: 80 }} />
            </Link>
            <h4>Instagram</h4>
            <p>@ardaberktin</p>
          </div>
          <div className="contact-social-icon-ind">
            <Link
              className="contact-social-icon-link gmail"
              to="mailto:arberktin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <EmailIcon sx={{ fontSize: 80 }} />
            </Link>
            <h4>E-mail</h4>
            <p>arberktin@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
