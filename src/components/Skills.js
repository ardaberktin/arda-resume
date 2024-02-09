import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skill-container">
      <h1 className="h1">Skills</h1>
      <div className="skill-wrapper">
        {/* Frontend Skills */}
        <div className="skill-category">
          <h2>Languages</h2>
          <div className="skill-list">
            {/* <p>
              Java, JavaScript, C, PHP, CSS, HTML, Swift, Swift UI, ROBOTC,
              React, Python
            </p> */}
            <p>
              Java, Swift, SwiftUI, Python, React, JavaScript, C, HTML, PHP,
              CSS, ROBOTC, Python
            </p>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skill-category">
          <h2>Operating Systems</h2>
          <div className="skill-list">
            <p>Windows 7/8/10/11, MacOS, iOS, Android</p>
          </div>
        </div>

        {/* Database Skills */}
        <div className="skill-category">
          <h2>Software</h2>
          <div className="skill-list">
            <p>
              Git, MS Visual Studio Code, Eclipse, XCode, Android Studio, Adobe
              Photoshop, MS Office (Word, Excel, PowerPoint)
            </p>
          </div>
        </div>

        {/* Version Control */}
        <div className="skill-category">
          <h2>Hardware</h2>
          <div className="skill-list">
            <p>PCs, ARM Processors, VEX Kit</p>
          </div>
        </div>

        {/* Other Skills */}
        <div className="skill-category">
          <h2>Other</h2>
          <div className="skill-list">
            <p>Leadership, Teamwork, Communication, Creative Problem Solving</p>
          </div>
        </div>
      </div>

      <div className="icons" align="center">
        <a href="https://reactjs.org/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
            alt="React"
            height="50"
          />
        </a>
        <a href="https://www.w3schools.com/css/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
            alt="CSS3"
            height="50"
          />
        </a>
        <a href="https://en.wikipedia.org/wiki/HTML5" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
            alt="HTML5"
            height="50"
          />
        </a>
        <a href="https://www.javascript.com/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
            alt="JavaScript"
            height="50"
          />
        </a>
        <a href="https://www.php.net/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/php-original.svg"
            alt="PHP"
            height="50"
          />
        </a>
        <a href="https://www.python.org/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/python-original.svg"
            alt="Python"
            height="50"
          />
        </a>
        <a href="https://www.gnu.org/software/bash/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg"
            alt="Bash"
            height="50"
          />
        </a>
        <a href="https://www.linux.org/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/linux-original.svg"
            alt="Linux"
            height="50"
          />
        </a>
        <a href="https://github.com/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
            alt="Git"
            height="50"
          />
        </a>
        <a href="https://www.cprogramming.com/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/c-original.svg"
            alt="C"
            height="50"
          />
        </a>
        <a href="https://www.java.com/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
            alt="Java"
            height="50"
          />
        </a>
        <a href="https://developer.apple.com/swift/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/swift-original-wordmark.svg"
            alt="Swift"
            height="50"
          />
        </a>
        <a href="https://www.android.com/intl/en_in/" target="__self">
          <img
            src="https://profilinator.rishav.dev/skills-assets/android-original-wordmark.svg"
            alt="Android"
            height="50"
          />
        </a>
      </div>
    </div>
  );
}

export default Skills;
