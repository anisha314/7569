import React from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <section id="about-page-wrapper">
        <div className="about-content">
          <h1 className="about-heading">About This Project</h1>
          <p className="about-paragraph">
            This project aims to help users easily calculate the calorie count of their meals using a QR code-based scanning system. By scanning a QR code representing a dish, users can instantly get the breakdown of calories from the individual ingredients. The app also allows users to modify the quantity of each item and see real-time updates in the calorie count.
          </p>
          <h2 className="about-subheading">Key Features:</h2>
          <ul className="about-list">
            <li className="about-list-item"><strong>QR Code Scanning:</strong> Quickly scan QR codes to retrieve the calorie breakdown of a dish.</li>
            <li className="about-list-item"><strong>Real-Time Updates:</strong> Modify the quantities of ingredients and see calorie changes instantly.</li>
            <li className="about-list-item"><strong>Inventory Management:</strong> Manage dishes and their constituent items with CRUD functionality.</li>
          </ul>
          <h2 className="about-subheading">Technologies Used:</h2>
          <ul className="about-list">
            <li className="about-list-item"><strong>Frontend:</strong> React.js, CSS, HTML</li>
            <li className="about-list-item"><strong>Backend:</strong> Node.js, Express.js</li>
            <li className="about-list-item"><strong>Database:</strong> MongoDB</li>
            <li className="about-list-item"><strong>QR Code Scanning:</strong> react-qr-reader</li>
          </ul>
          <h2 className="about-subheading">Project Motivation:</h2>
          <p className="about-paragraph">
            The goal of this project is to make it easier for people to track their calorie intake by scanning QR codes on food items. This can help health-conscious individuals maintain a balanced diet and make informed food choices.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
