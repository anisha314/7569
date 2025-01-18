import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleStartScanning = () => {
    navigate("/Scan"); // Redirect to /QRNutrition page
  };

  return (
    <div className="homepage">
      <section className="homepage-hero">
        <h1 className="homepage-heading">Welcome to QR Code-Based Calorie Calculator</h1>
        <p className="homepage-description">Scan a dish to find its calorie count effortlessly!</p>
        <button className="homepage-button" onClick={handleStartScanning}>
          Start Scanning
        </button>
      </section>

      <section id="features" className="homepage-features">
        <h2 className="homepage-features-heading">Features</h2>
        <div className="homepage-feature-container">
          <div className="homepage-feature-list">
            <div className="homepage-feature-item">
              <h3 className="homepage-feature-title">QR Code Scanning</h3>
              <p className="homepage-feature-text">
                Scan QR codes for quick dish calorie analysis.
              </p>
            </div>
            <div className="homepage-feature-item">
              <h3 className="homepage-feature-title">Real-Time Updates</h3>
              <p className="homepage-feature-text">
                See calorie changes instantly as you modify quantities.
              </p>
            </div>
            <div className="homepage-feature-item">
              <h3 className="homepage-feature-title">Inventory Management</h3>
              <p className="homepage-feature-text">
                Easily add, update, or delete dish information.
              </p>
            </div>
          </div>
          <div className="homepage-feature-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxpb9hcBkgH45jXURdlceqLR4ZJ8lnifxAuQ&s"
              alt="Features Overview"
            />
          </div>
        </div>
      </section>

      <footer id="footer" className="homepage-footer">
        <p>&copy; 2025 QR Code-Based Calorie Calculator. All rights reserved.</p>
        <div>
          <a href="#" className="homepage-footer-link">Privacy Policy</a> | 
          <a href="#" className="homepage-footer-link">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
