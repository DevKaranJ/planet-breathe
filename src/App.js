import React, { useState } from 'react';
import './App.scss'; // You might have other CSS files to import
import Navbar from './components/navbar/Navbar'; // Import the Navbar component
import Home from './components/home/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add logic to switch between dark and light modes here
  };

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
    </div>
  );
}

export default App;
