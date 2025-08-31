import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="skill-container">
      <h1 className="h1">Skills</h1>
      <div className="skill-wrapper">
        {/* Programming Languages */}
        <div className="skill-category">
          <h2> Programming Languages</h2>
          <div className="list-and-icons">
            <div className="skill-list">
              <ul className="unordered-list">
                <li>
                  <h3>Front End</h3>
                  <p>
                    React • Angular • React Native • JavaScript • HTML • CSS •
                    SwiftUI
                  </p>
                </li>
                <li>
                  <h3>Back End</h3>
                  <p>Java • Python • C • C# • Swift • PHP • ROBOTC</p>
                </li>
              </ul>
            </div>
            <div className="language-icons">
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
              <a href="https://www.python.org/" target="__self">
                <img
                  src="https://profilinator.rishav.dev/skills-assets/python-original.svg"
                  alt="Python"
                  height="50"
                />
              </a>
              <a href="https://reactjs.org/" target="__self">
                <img
                  src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
                  alt="React"
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
              <a href="https://www.cprogramming.com/" target="__self">
                <img
                  src="https://profilinator.rishav.dev/skills-assets/c-original.svg"
                  alt="C"
                  height="50"
                />
              </a>
              <a href="https://www.w3schools.com/cs/" target="__self">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/c--4.svg"
                  alt="C#"
                  height="50"
                />
              </a>
              <a href="https://angular.io/" target="__self">
                <img
                  src="https://angular.io/assets/images/logos/angular/angular.svg"
                  alt="Angular"
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
              <a href="https://www.php.net/" target="__self">
                <img
                  src="https://profilinator.rishav.dev/skills-assets/php-original.svg"
                  alt="PHP"
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
              <a href="https://www.android.com/intl/en_in/" target="__self">
                <img
                  src="https://profilinator.rishav.dev/skills-assets/android-original-wordmark.svg"
                  alt="Android"
                  height="50"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div className="skill-category">
          <h2>Frameworks</h2>
          <div className="skill-list">
            <p>.NET • Angular • React • React Native • Node.js</p>
          </div>
        </div>

        {/* Data/Infrastructure */}
        <div className="skill-category">
          <h2>Data/Infrastructure</h2>
          <div className="skill-list">
            <p>PostgreSQL • Docker • NumPy • Redis • RabbitMQ</p>
          </div>
        </div>

        {/* Cloud/Services */}
        <div className="skill-category">
          <h2>Cloud/Services</h2>
          <div className="skill-list">
            <p>AWS • Firebase • Google Analytics • Plaid</p>
          </div>
        </div>

        {/* Practices */}
        <div className="skill-category">
          <h2>Practices</h2>
          <div className="skill-list">
            <p>
              REST APIs • JWT (refresh rotation) • CI/CD • Agile/Scrum • Linux
            </p>
          </div>
        </div>

        {/* Software Tools */}
        <div className="skill-category">
          <h2>Software Tools</h2>
          <div className="skill-list">
            {/* <p>
              Figma, Miro, Git, MS Visual Studio Code, Eclipse, XCode, Android
              Studio, Adobe Photoshop, MS Office (Word, Excel, PowerPoint)
            </p> */}
          </div>
          <div className="skill-list">
            <ul className="unordered-list">
              <li>
                <h3>Version Control</h3>
                <p>Git • GitHub • GitLab • BitBucket </p>
              </li>
              <li>
                <h3>IDE</h3>
                <p>
                  MS Visual Studio Code • MS Visual Studio • Eclipse • XCode •
                  Jupyter • Android Studio
                </p>
              </li>
              <li>
                <h3>Design</h3>
                <p>Figma • Miro • Adobe Photoshop</p>
              </li>
              <li>
                <h3>Office Suites</h3>
                <p>
                  MS Office • Word • Excel • PowerPoint • Google Docs • Google
                  Sheets • Google Slides
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Hardware */}
        <div className="skill-category">
          <h2>Hardware</h2>
          <div className="skill-list">
            <p>PCs • ARM Processors • VEX Kit</p>
          </div>
        </div>

        {/* Operating Systems */}
        <div className="skill-category">
          <h2>Operating Systems</h2>
          <div className="skill-list">
            <p>Windows 7/8/10/11 • MacOS • Linux • iOS • Android</p>
          </div>
        </div>

        {/* Languages */}
        <div className="skill-category">
          <h2>Languages</h2>
          <div className="skill-list">
            <ul className="unordered-list">
              <li>
                <h3>English</h3>
                <p>Bilingual proficiency</p>
              </li>
              <li>
                <h3>Turkish</h3>
                <p>Bilingual proficiency</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Other Skills */}
        <div className="skill-category">
          <h2>My Strengths</h2>
          <div className="skill-list">
            <p>
              Growth Mindset, Leadership, Teamwork, Communication, Creative
              Problem Solving
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
