import React, { useState, useEffect, useCallback } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scroll, setScroll] = useState(true);
  const location = useLocation();

  const closeMobileMenu = () => setClick(false);

  const handleClick = () => {
    setClick(!click);
    setScroll(!scroll);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changeBackground = useCallback(() => {
    if (
      location.pathname === "/arda-resume/" &&
      location.pathname.length === 13
    ) {
      if (window.scrollY >= 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    } else {
      setScroll(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    showButton();

    if (
      location.pathname === "/arda-resume/" &&
      location.pathname.length === 13
    ) {
      setScroll(false);
    } else {
      setScroll(true);
    }
    const handleScroll = () => {
      changeBackground();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, changeBackground]);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className={scroll ? "navbar" : "navbar trans"}>
        <div className="navbar-container">
          <Link
            to="/arda-resume/"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            <img className="arda-icon" src="images/ardaface.png" alt="Arda" />
            ARDA BERKTIN
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/arda-resume/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/arda-resume/experiences"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/arda-resume/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                to="/arda-resume/about-me"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                About Me
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" to={"/arda-resume/about-me"}>
              About Me
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
