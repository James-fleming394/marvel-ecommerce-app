import './App.css';
import React from 'react';
import LaunchPad from './pages/LaunchPad.js';
import Home from './pages/Home';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<LaunchPad />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
