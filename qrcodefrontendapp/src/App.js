import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QRNutrition from './components/QRNutrition';
import HomePage from './components/HomePgae/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import Login from './components/LoginPage/login';
import NutritionPage from './components/NutritionPage';
import Navbar from './components/NavBar/NavBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/NavBar" element={<Navbar />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/QRNutrition" element={<QRNutrition />} />
        <Route path="/nutrition" element={<NutritionPage />} />
      </Routes>
    </Router>
  );
};

export default App;