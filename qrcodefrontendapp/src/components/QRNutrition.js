import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';
import { useNavigate } from 'react-router-dom';
import "./App.css";

const QRNutrition = () => {
  const [foodItem, setFoodItem] = useState(''); // Store food name
  const [,setNutritionalData] = useState(null); // Store nutritional info
  const [qrCodeData, setQrCodeData] = useState(''); // Store data for QR code

  const fetchNutritionalInfo = async () => {
    if (!foodItem) return;

    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/nutrition?query=${foodItem}&X-Api-Key=HpUJ3PJ3Up6YmYk6mpxKpA==Jaq8BRGisdeMMZvC`
      );

      if (response.data.length > 0) {
        const nutritionData = response.data[0];

        // Assuming the first result is the correct one
        setNutritionalData(nutritionData); // Correctly setting the nutritional data

        const nutritionalString = JSON.stringify(nutritionData);

        setQrCodeData(`http://192.168.0.105:3000/nutrition?data=${encodeURIComponent(nutritionalString)}`);
      } else {
        alert('No nutritional information found.');
      }
    } catch (error) {
      console.error('Error fetching nutritional info:', error);
    }

  };
  const navigate = useNavigate(); // Initialize navigate function
  const handleClickHome = () => {
    navigate("/"); // Redirect to /QRNutrition page
  };

  return (
    <div className="container">
      <h1>Generate QR Code for Food Nutrition</h1>
      <input
        type="text"
        value={foodItem}
        onChange={(e) => setFoodItem(e.target.value)}
        placeholder="Enter food item"
      />
      <button onClick={fetchNutritionalInfo}>Get Nutritional Info</button>
      <button onClick={handleClickHome}>Home</button>

      {qrCodeData && (
        <div className="qr-code">
          <QRCode value={qrCodeData} />
        </div>
      )}
    </div>
  );
};

export default QRNutrition;
