import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';
import './App.css'; // Make sure to import the CSS file

const QRNutrition = () => {
  const [foodItem, setFoodItem] = useState('');
  const [nutritionalData, setNutritionalData] = useState(null);
  const [qrCodeData, setQrCodeData] = useState('');

  const fetchNutritionalInfo = async () => {
    if (!foodItem) {
      alert('Please enter a food item.');
      return;
    }

    try {
      const response = await await axios.get(
        `https://api.api-ninjas.com/v1/nutrition?query=${foodItem}&X-Api-Key=HpUJ3PJ3Up6YmYk6mpxKpA==Jaq8BRGisdeMMZvC`
      );

      if (response.data.length > 0) {
        const nutritionData = response.data[0];

        // Initial calorie calculation
        const caloriesFromFat = parseFloat(nutritionData.fat_total_g) * 9;
        const caloriesFromCarbs = parseFloat(nutritionData.carbohydrates_total_g) * 4;
        const protein = nutritionData.protein_g !== "Only available for premium subscribers."
          ? parseFloat(nutritionData.protein_g) || 0
          : 0;
        const caloriesFromProtein = protein * 4;

        const totalCalories = caloriesFromFat + caloriesFromCarbs + caloriesFromProtein;

        setNutritionalData({
          name: nutritionData.name,
          calories: totalCalories.toFixed(2),
          caloriesBreakdown: {
            fat: caloriesFromFat.toFixed(2),
            carbs: caloriesFromCarbs.toFixed(2),
            protein: caloriesFromProtein.toFixed(2),
          },
          quantity: 1, // Initial quantity
          fat: nutritionData.fat_total_g,
          carbs: nutritionData.carbohydrates_total_g,
          protein: protein,
        });

        // Generate QR code
        const nutritionalString = `Food=${nutritionData.name}&Calories=${totalCalories.toFixed(
          2
        )}&Fat=${nutritionData.fat_total_g}&Carbs=${nutritionData.carbohydrates_total_g}&Protein=${protein}`;
        setQrCodeData(`http://192.168.0.105:3000/nutrition?${nutritionalString}`);
      } else {
        alert('No nutritional data found for this item.');
      }
    } catch (error) {
      console.error('Error fetching nutritional data:', error);
      alert('Failed to fetch nutritional information.');
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseFloat(e.target.value) || 1;

    if (nutritionalData) {
      const updatedCalories = {
        fat: (nutritionalData.fat * 9 * newQuantity).toFixed(2),
        carbs: (nutritionalData.carbs * 4 * newQuantity).toFixed(2),
        protein: (nutritionalData.protein * 4 * newQuantity).toFixed(2),
      };

      setNutritionalData({
        ...nutritionalData,
        quantity: newQuantity,
        calories: (
          parseFloat(updatedCalories.fat) +
          parseFloat(updatedCalories.carbs) +
          parseFloat(updatedCalories.protein)
        ).toFixed(2),
        caloriesBreakdown: updatedCalories,
      });
    }
  };

  return (
    <div className="container">
      <h1>Generate QR Code for Food Nutrition</h1>
      <input
        type="text"
        placeholder="Enter food item"
        value={foodItem}
        onChange={(e) => setFoodItem(e.target.value)}
      />
      <button onClick={fetchNutritionalInfo}>Get Nutrition & Generate QR Code</button>

      {nutritionalData && (
        <div className="nutritional-info">
          <h2>Nutritional Information:</h2>
          <p><strong>Food:</strong> {nutritionalData.name}</p>
          <p className="calories"><strong>Total Calories:</strong> {nutritionalData.calories} kcal</p>
          <div>
            <h3>Calorie Breakdown:</h3>
            <p><strong>Fat:</strong> {nutritionalData.caloriesBreakdown.fat} kcal</p>
            <p><strong>Carbs:</strong> {nutritionalData.caloriesBreakdown.carbs} kcal</p>
            <p><strong>Protein:</strong> {nutritionalData.caloriesBreakdown.protein} kcal</p>
          </div>
          <div className="quantity-input">
            <input
              type="number"
              value={nutritionalData.quantity}
              onChange={handleQuantityChange}
              min="1"
              step="0.1"
            />
            <p>Quantity: {nutritionalData.quantity} servings</p>
          </div>
        </div>
      )}

      {qrCodeData && (
        <div className="qr-code">
          <QRCode value={qrCodeData} />
        </div>
      )}
    </div>
  );
};

export default QRNutrition;