import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NutritionPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nutritionalData = JSON.parse(decodeURIComponent(queryParams.get('data')));

  const [nutritionalValue, setNutritionalValue] = useState(nutritionalData || {});
  const [quantity, setQuantity] = useState(1); // Default to 1
  const [errorMessage, setErrorMessage] = useState(''); // Error message state

  // Handle change in quantity input
  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;

    // Check if the input is empty or invalid
    if (newQuantity === '') {
      setErrorMessage('Please enter a quantity');
      setQuantity(1); // Set back to 1 if the input is empty
    } else {
      // If valid number, reset the error message and update quantity
      const parsedQuantity = parseFloat(newQuantity);
      if (isNaN(parsedQuantity) || parsedQuantity < 1) {
        setErrorMessage('Quantity must be a valid number greater than or equal to 1');
        setQuantity(1); // Reset to 1 if invalid input
      } else {
        setErrorMessage('');
        setQuantity(parsedQuantity);
      }

      // Recalculate calories based on updated quantity
      if (nutritionalValue) {
        const updatedCalories = {
          fat: (nutritionalValue.fat_total_g * 9 * parsedQuantity).toFixed(2),
          carbs: (nutritionalValue.carbohydrates_total_g * 4 * parsedQuantity).toFixed(2),
          protein: (nutritionalValue.protein_g * 4 * parsedQuantity).toFixed(2),
        };

        setNutritionalValue({
          ...nutritionalValue,
          quantity: parsedQuantity,
          calories: (
            parseFloat(updatedCalories.fat) +
            parseFloat(updatedCalories.carbs) +
            parseFloat(updatedCalories.protein)
          ).toFixed(2),
          caloriesBreakdown: updatedCalories,
        });
      }
    }
  };

  useEffect(() => {
    // Recalculate the calories whenever nutritional data or quantity changes
    if (nutritionalValue) {
      const totalCalories = calculateCalories(nutritionalValue, quantity);
      setNutritionalValue((prevData) => ({
        ...prevData,
        calories: totalCalories.toFixed(2),
      }));
    }
  }, [nutritionalValue, quantity]);

  const calculateCalories = (data, quantity) => {
    const fatCalories = data.fat_total_g * 9;
    const carbsCalories = data.carbohydrates_total_g * 4;
    const proteinCalories = data.protein_g * 4;

    const totalCalories = fatCalories + carbsCalories + proteinCalories;
    return totalCalories * quantity;
  };

  return (
    <div className="nutrition-page">
      <h1>Nutrition Information</h1>

      {/* Display nutritional data */}
      {nutritionalValue && (
        <div className="nutritional-info">
          <h2>{nutritionalValue.name}</h2>
          <p><strong>Total Calories:</strong> {nutritionalValue.calories} kcal</p>
          <div>
            <h3>Calorie Breakdown:</h3>
            <p><strong>Fat:</strong> {nutritionalValue.caloriesBreakdown?.fat || '0'} kcal</p>
            <p><strong>Carbs:</strong> {nutritionalValue.caloriesBreakdown?.carbs || '0'} kcal</p>
            <p><strong>Protein:</strong> {nutritionalValue.caloriesBreakdown?.protein || '0'} kcal</p>
          </div>

          {/* Display error message if any */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* Quantity Input */}
          <div className="quantity-input">
            <label>Quantity: </label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              placeholder="Enter quantity"
            />
            <p>Quantity: {quantity} servings</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionPage;
