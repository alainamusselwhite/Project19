import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Tour Comparison App</h1>
        </header>
        <Switch>
          <Route path="/" exact component={Gallery} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
