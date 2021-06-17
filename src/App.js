import './App.css';
import Home from './components/home/Home';
import React from 'react';
import { Reset } from 'styled-reset';

const App = () => {
  return (
    <div className="app">
      <Reset />
      <Home />
    </div>
  );
};

export default App;
