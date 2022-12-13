import './App.css';
import React from 'react';
import LaunchPad from './pages/LaunchPad.js';
import Home from './pages/Home';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Cart from './pages/Cart';
import Products from './pages/Products';
import AllComicProducts from './components/ComicProducts';
import ComicPage from './components/ComicPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LaunchPad />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/comics" element={<AllComicProducts />} />
        <Route path="/comics/:id" element={<ComicPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
