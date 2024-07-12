import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--medium", "btn--large"];
const NAMES = [
  "",
  "projectsBigButton",
  "experiencesBigButton",
  "aboutMeBigButton",
];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonName,
  to, // Add the to prop to make the path dynamic
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonName = NAMES.includes(buttonName) ? buttonName : NAMES[0];

  return (
    <Link to={to || "/"} className="btn-mobile">
      {/* Use the 'to' prop or a default path if not provided */}
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonName}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
