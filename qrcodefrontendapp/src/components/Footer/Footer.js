import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="homepage-footer" className="footer">
      <p>&copy; 2025 QR Code-Based Calorie Calculator. All rights reserved.</p>
      <div>
        <a href="#" id="homepage-footer-privacy" className="homepage-footer-link">Privacy Policy</a> 

        | 
        
        <a href="#" id="homepage-footer-terms" className="homepage-footer-link">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
