import './App.css';
import React from 'react';
import LaunchPad from './pages/LaunchPad.js';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LaunchPad />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
