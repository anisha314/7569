import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate(); 

  const handleLogout = (event) => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/login");
    } else {
      event.preventDefault();
    }
  };

  const handleClick = (section) => {
    setActiveLink(section);
  };

  return (
    <header className="header">
      <div className="logo">CalorieCalc</div>
      <nav className="navbar">
        <a
          href="#"
          className={activeLink === "Home" ? "active" : ""}
          onClick={() => handleClick("Home")}
        >
          Home
        </a>
        <a
          href="#features"
          className={activeLink === "Features" ? "active" : ""}
          onClick={() => handleClick("Features")}
        >
          Features
        </a>
        <a
          href="#"
          className={activeLink === "About" ? "active" : ""}
          onClick={() => handleClick("About")}
        >
          About
        </a>
        <a
          href="#footer"
          className={activeLink === "Contact" ? "active" : ""}
          onClick={() => handleClick("Contact")}
        >
          Contact
        </a>
        <a
          href="#"
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
