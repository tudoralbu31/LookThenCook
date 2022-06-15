import React, { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Router } from './router/Router';


function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
