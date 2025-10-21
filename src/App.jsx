// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Component Imports
import Navbar from './components/Navbar';

// Page Imports
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  );
}

export default App;
