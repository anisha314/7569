import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRNutrition from './components/QRNutrition';
import NutritionPage from './components/NutritionPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRNutrition />} />
        <Route path="/nutrition" element={<NutritionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
