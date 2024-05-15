import { Link } from "react-router-dom";
import "./ContactMe.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactForm from "./ContactForm";

function ContactMe() {
  return (
    <div className="contact-me-all">
      <h1 className="contact-me-title">Contact Me</h1>
      <div className="contact-me-container">
        <div className="contact-info-form">
          <div className="contact-wrapper">
            {/* Frontend Skills */}
            <div className="contact-info-container">
              <div className="contact-category">
                <h2>Phone Number</h2>
                <div className="contact-info">
                  <div className="phone-number">
                    <h4 className="phone-country">Canada:</h4>
                    <a
                      href="tel:+12505071691"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-phone"
                    >
                      <p>+1 (250) 507 1691</p>
                    </a>
                  </div>
                  <div className="phone-number">
                    <h4 className="phone-country">Turkey:</h4>
                    <a
                      href="tel:+905313902505"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-phone"
                    >
                      <p>+90 531 390 2505</p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Backend Skills */}
              <div className="contact-category">
                <h2>Email</h2>
                <div className="contact-info">
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
            </div>
            <div className="connect-with-me-container">
              <h2 className="connect-with-me-title">Connect With Me</h2>
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
        </div>
        <ContactForm className="contact-info-form" />
      </div>
    </div>
  );
}

export default ContactMe;
