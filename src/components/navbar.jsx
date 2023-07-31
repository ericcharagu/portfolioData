import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Image, Offcanvas } from "react-bootstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";
import echara from "../img/logoNav.png";
import "./navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 3000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <Navbar fixed="top" id="navBar" expand="sm">
      <div className="container" id="navCont">
        <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
          <Image src={echara} fluid />
        </Link>
        {/*  <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div> */}
        <ul id="navUl">
          <li className="nav-item">
            <Link to="/skills" className="navLinks" onClick={closeMobileMenu}>
              SKILLS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="navLinks" onClick={closeMobileMenu}>
              PROJECTS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/message" className="navLinks" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}

export default NavBar;
