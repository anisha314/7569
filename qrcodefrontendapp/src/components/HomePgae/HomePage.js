import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../NavBar/NavBar"
import Footer from "../Footer/Footer";
import "./HomePage.css";
import caloriesImage from "./caloriesImage.jpg";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleStartScanning = () => {
    navigate("/QRNutrition"); // Redirect to /QRNutrition page
  };

  return (
    <div>
      <Navbar/>
    <div className="homepage">
      <section className="homepage-hero">
        <h1 className="homepage-heading">Welcome to QR Code-Based Calorie Calculator</h1>
        <button className="homepage-button" onClick={handleStartScanning}>
          Get your QR code
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
              src={caloriesImage}
              alt="Features Overview"
            />
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default HomePage;
