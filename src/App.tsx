import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Overview} from './pages/Overview';
import { Home }from './pages/Home';
import { About } from './pages/About';
import { Browse } from './pages/Browse';
import { Header } from './pages/Header';
import { AddItems } from './pages/AddItems';






function App() {
  return (
    <div>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="browse" element={<Browse />} />
          <Route path="add-items" element={<AddItems />} />
          <Route path="overview/:id" element={<Overview />} />
          
        </Routes>
    </div>
  );
}

export default App;
