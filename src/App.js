import './App.css';
import Home from './components/home/Home';
import React from 'react';
import { Reset } from 'styled-reset';

function App() {
  return (
    <div className="App">
      <Reset />
      <Home />
    </div>
  );
}

export default App;
