import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState({
    text: null,
    isError: false,
  });

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage({ text: "Message sent!", isError: false });
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage({ text: null, isError: false });
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage({
            text: "Something went wrong, please try again later",
            isError: true,
          });
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage({ text: null, isError: false });
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      <form className="email-form" onSubmit={sendEmail}>
        <h2>Feel free to contact me right now!</h2>
        <label className="form-label">Name *</label>
        <input className="form-input" type="text" name="from_name" required />
        <label className="form-label">Email *</label>
        <input className="form-input" type="email" name="from_email" required />
        <label className="form-label">Message *</label>
        <textarea className="form-textarea" name="message" required />
        <input
          className="form-input-send"
          type="submit"
          value="Send"
          disabled={isSubmitting}
        />
        {stateMessage.text && (
          <p className={stateMessage.isError ? "form-error" : "form-message"}>
            {stateMessage.text}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
