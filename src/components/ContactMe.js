// src/components/ContactMe.js

import { Link } from "react-router-dom";
import "./ContactMe.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactForm from "./ContactForm";

const ContactInfo = ({ title, children }) => (
  <div className="contact-category">
    <h2>{title}</h2>
    <div className="contact-info">{children}</div>
  </div>
);

const PhoneNumber = ({ country, number, link }) => (
  <div className="phone-number">
    <h4 className="phone-country">{country}:</h4>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-phone"
    >
      <p>{number}</p>
    </a>
  </div>
);

const SocialIcon = ({ to, label, IconComponent, subtitle }) => (
  <div className="contact-social-icon-ind">
    <Link
      className={`contact-social-icon-link ${label.toLowerCase()}`}
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <IconComponent sx={{ fontSize: 80 }} />
    </Link>
    <h4>{label}</h4>
    <p>{subtitle}</p>
  </div>
);

function ContactMe() {
  return (
    <div className="contact-me-all">
      <h1 className="contact-me-title">Contact Me</h1>
      <div className="contact-me-container">
        <div className="contact-info-form">
          <div className="contact-wrapper">
            <div className="contact-info-container">
              <ContactInfo title="Phone Number">
                <PhoneNumber
                  country="Canada"
                  number="+1 (250) 507 1691"
                  link="tel:+12505071691"
                />
                <PhoneNumber
                  country="Türkiye"
                  number="+90 531 390 2505"
                  link="tel:+905313902505"
                />
              </ContactInfo>
              <ContactInfo title="Email">
                <p>(Preferred)</p>
                <a
                  href="mailto:arberktin@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-email"
                >
                  <p>arberktin@gmail.com</p>
                </a>
              </ContactInfo>
            </div>
            <div className="connect-with-me-container">
              <h2 className="connect-with-me-title">Connect With Me</h2>
              <div className="contact-social-icons">
                <SocialIcon
                  to="https://linkedin.com/in/arda-berktin-861852253"
                  label="LinkedIn"
                  IconComponent={LinkedInIcon}
                  subtitle="in/ardaberktin"
                />
                <SocialIcon
                  to="https://github.com/ardaberktin"
                  label="Github"
                  IconComponent={GitHubIcon}
                  subtitle="/ardaberktin"
                />
                <SocialIcon
                  to="https://instagram.com/ardaberktin"
                  label="Instagram"
                  IconComponent={InstagramIcon}
                  subtitle="@ardaberktin"
                />
                <SocialIcon
                  to="mailto:arberktin@gmail.com"
                  label="E-mail"
                  IconComponent={EmailIcon}
                  subtitle="arberktin@gmail.com"
                />
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
