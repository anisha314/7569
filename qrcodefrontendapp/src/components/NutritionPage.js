import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './NutritionPage.css'; // Import CSS file for styling
import './NavBar/NavBar'

const NutritionPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nutritionalData = JSON.parse(decodeURIComponent(queryParams.get('data')));

  const [nutritionalValue, setNutritionalValue] = useState(nutritionalData || {});
  const [quantity, setQuantity] = useState(1); // Default to 1
  const [errorMessage, setErrorMessage] = useState(''); // Error message state

  // Handle quantity increase
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      recalculateNutritionalValues(newQuantity);
      return newQuantity;
    });
  };

  // Handle quantity decrease
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        const newQuantity = prevQuantity - 1;
        recalculateNutritionalValues(newQuantity);
        return newQuantity;
      } else {
        setErrorMessage('Quantity cannot be less than 1');
        return prevQuantity;
      }
    });
  };
  

  // Recalculate nutritional values
  const recalculateNutritionalValues = (newQuantity) => {
    if (nutritionalValue) {
      const updatedCalories = {
        fat: (nutritionalValue.fat_total_g * 9 * newQuantity).toFixed(2),
        carbs: (nutritionalValue.carbohydrates_total_g * 4 * newQuantity).toFixed(2),
        protein: (nutritionalValue.protein_g * 4 * newQuantity).toFixed(2),
      };

      setNutritionalValue({
        ...nutritionalValue,
        quantity: newQuantity,
        calories: (
          parseFloat(updatedCalories.fat) +
          parseFloat(updatedCalories.carbs)
        ).toFixed(2),
        caloriesBreakdown: updatedCalories,
      });
    }
    setErrorMessage('');
  };

  useEffect(() => {
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

    const totalCalories = fatCalories + carbsCalories;
    return totalCalories * quantity;
  };

  return (
    <div className="nutrition-page">
      <h1>Nutrition Information</h1>

      {nutritionalValue && (
        <div className="nutritional-info">
          <h2>{nutritionalValue.name}</h2>
          <p>
            <strong>Total Calories:</strong> {nutritionalValue.calories} kcal
          </p>
          <div className="calorie-breakdown">
            <h3>Calorie Breakdown:</h3>
            <p>
              <strong>Fat:</strong> {nutritionalValue.caloriesBreakdown?.fat || '0'} kcal
            </p>
            <p>
              <strong>Carbs:</strong> {nutritionalValue.caloriesBreakdown?.carbs || '0'} kcal
            </p>
            {/* <p>
              <strong>Protein:</strong> {nutritionalValue.caloriesBreakdown?.protein || '0'} kcal
            </p> */}
          </div>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="quantity-control">
            <label>Quantity: </label>
            <div className="quantity-buttons">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <p>Quantity: {quantity} servings</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionPage;
