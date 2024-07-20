// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonPage from './pages/PokemonPage';
import SearchPage from './pages/SearchPage';
import './App.css';



const App = () => {
  return (
    <Routes>
      
        <Route path="/" element={<HomePage/>} />
        <Route path="/pokemon/:id" element={<PokemonPage/>} />
        <Route path="/search" element={<SearchPage/>} />
      
    </Routes>
  );
};

export default App;
