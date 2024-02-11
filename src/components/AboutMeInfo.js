import React from "react";
//import { Link } from "react-router-dom";
import "./AboutMeInfo.css";

function AboutMeInfo() {
  return (
    <div className="about-me-container">
      <h1 className="about-me-title">About Me</h1>

      <img
        className="arda-image"
        src="images/Ardamoji.png"
        alt="Arda Berktin"
      />

      <p className="about-me-paragraph">
        Arda is a software engineering student at the University of Victoria,
        pursuing a Bachelor of Software Engineering degree. He is passionate
        about seeing innovative ideas that affect everyone's lives in a
        meaningful way come to life through technology. <br />
        <br /> One of the key projects in Arda's experience is the Money on
        Track application, built from scratch with Swift and SwiftUI. It
        includes sign-up/sign-in options and utilizes Firebase API to store data
        on the Cloud via Cloud Firestore. The app also features an AI assistant
        called Budget Buddy, utilizing Open AI's API to help users improve their
        finances. Despite facing several challenges during development, Arda
        used problem-solving and time-management skills to deliver the product
        on time.
        <br />
        <br /> In terms of my qualifications, Arda brings enthusiasm,
        responsibility, and strong organizational skills to the table.
        Collaborative problem-solving is a passion of his, and his experiences,
        such as volunteering at 20/20 CAN Victoria, engaging in group projects,
        and working as a Mentor at PCE Turkey, chaperoning students, have honed
        his teamwork abilities. From managing tasks and time effectively to
        adapting to fast-paced learning environments, he is committed to
        continuous improvement and exceptional performance. <br />
        <br /> Arda is eager to learn new skills and apply his knowledge to
        real-world problems. He is a team player who values collaboration,
        feedback, and innovation. He is motivated by challenges and
        opportunities to make a positive impact through software engineering.
      </p>
    </div>
  );
}

export default AboutMeInfo;
