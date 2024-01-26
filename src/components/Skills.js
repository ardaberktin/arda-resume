import React from "react";

function Skills() {
  return (
    <div className="skill-container">
      <h1>Skills</h1>

      {/* Frontend Skills */}
      <div className="skill-category">
        <h2>Frontend</h2>
        <ul className="skill-list">
          <li>React.js</li>
          <li>HTML5, CSS3, JavaScript</li>
          <li>Responsive Web Design</li>
        </ul>
      </div>

      {/* Backend Skills */}
      <div className="skill-category">
        <h2>Backend</h2>
        <ul className="skill-list">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>RESTful API Design</li>
        </ul>
      </div>

      {/* Database Skills */}
      <div className="skill-category">
        <h2>Databases</h2>
        <ul className="skill-list">
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

      {/* Version Control */}
      <div className="skill-category">
        <h2>Version Control</h2>
        <ul className="skill-list">
          <li>Git</li>
          <li>GitHub</li>
        </ul>
      </div>

      {/* Other Skills */}
      <div className="skill-category">
        <h2>Other</h2>
        <ul className="skill-list">
          <li>Software Architecture</li>
          <li>Testing (Unit, Integration)</li>
          <li>Agile Development</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
