import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink] = useState("Home");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status from localStorage on component mount
  useEffect(() => {
    const userLoginFlag = localStorage.getItem('userloginflag');
    if (userLoginFlag !== 'False' && userLoginFlag !== null) {
      setIsUserLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Clear user data from localStorage
      localStorage.setItem('userloginflag', 'False');
      setIsUserLoggedIn(false);
      alert('You have been signed out!');
      // Redirect to login page
      navigate("/");
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
        <p className={activeLink === "Home" ? "active" : ""} onClick={handleClickHome}>
          Home
        </p>
        <p className={activeLink === "Features" ? "active" : ""} onClick={handleClickFeatures}>
          Features
        </p>
        <p className={activeLink === "About" ? "active" : ""} onClick={handleClickAbout}>
          About
        </p>
        <p className={activeLink === "Contact" ? "active" : ""} onClick={handleClickContact}>
          Contact
        </p>

        {/* Conditional rendering for login/signup buttons based on user login status */}
        {!isUserLoggedIn ? (
          <>
            <a href="./login.html" className="logout-button" id="loginButton">
              Log In
            </a>
            <a
              href="./signup.html"
              className="logout-button"
              id="signUpButton"
            >
              Sign Up
            </a>
          </>
        ) : (
          <>
            <button
              id="signOutButton"
              onClick={handleLogout}
              className="logout-button"
            >
              Sign Out
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
