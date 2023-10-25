import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'; // You might have other CSS files to import
import Navbar from './components/navbar/Navbar'; // Import the Navbar component
import Home from './components/home/Home';
import StockDetail from './components/stockDetail/StockDetail';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add logic to switch between dark and light modes here
  };


  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/stock/:symbol" element={<StockDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
