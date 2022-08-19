import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Header from './pages/Header';
import BrowsePage from './pages/Browse';
import OverviewPage from './pages/Overview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="browse" element={<BrowsePage />} />
        <Route path="overview/:id" element={<OverviewPage />} />


      </Routes>
    </div>
  );
}

export default App;
