import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink] = useState("Home");
  const navigate = useNavigate(); 

  const handleLogout = (event) => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      window.location.href = "./login.html";
    } else {
      event.preventDefault();
    }
  };

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickAbout = () => {
    navigate("/AboutPage"); 
  };

  const handleClickFeatures = () => {
    navigate("/QRNutrition"); 
  };

  const handleClickContact = () => {
    navigate("/AboutPage");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">CalorieCalc</div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`navbar ${isMobileMenuOpen ? "mobile show" : ""}`}>
        <p className={activeLink === "Home" ? "active" : ""} onClick={() => handleClickHome("Home")}>
          Home
        </p>
        <p className={activeLink === "Features" ? "active" : ""} onClick={() => handleClickFeatures("Features")}>
          Features
        </p>
        <p className={activeLink === "About" ? "active" : ""} onClick={() => handleClickAbout("About")}>
          About
        </p>
        <p
          className={activeLink === "Contact" ? "active" : ""}
          onClick={() => handleClickContact("Contact")}
        >
          Contact
        </p>
        <p
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </p>
      </nav>
    </header>
  );
};

export default Navbar;
