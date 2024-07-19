//Alaina Musselwhite
//U67724814
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './Gallery';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Tour Comparison App</h1>
        </header>
        <Routes>
          <Route path="/" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;