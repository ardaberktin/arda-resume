import React, { useState, useEffect, useCallback } from "react";
import { Button } from "./Button";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [scroll, setScroll] = useState(false); // Initialize as false

  const location = useLocation();

  const closeMobileMenu = () => {
    setClick(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => setClick(!click);

  const showButton = useCallback(() => setButton(window.innerWidth > 800), []);

  const handleScroll = useCallback(() => {
    if (
      location.pathname === "/arda-resume/" &&
      location.pathname.length === 13 &&
      !click
    ) {
      setScroll(window.scrollY > 200); // Set scroll state based on scroll position
    } else {
      setScroll(true);
    }
  }, [click, location.pathname]);

  useEffect(() => {
    showButton();
    handleScroll(); // Initialize scroll state

    const handleResize = () => {
      showButton();
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, showButton]);

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
            <Button
              buttonStyle="btn--outline"
              to={"/arda-resume/about-me"}
              onClick={closeMobileMenu}
            >
              About Me
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
