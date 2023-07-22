import React from 'react';
import Home from '../pages/Home';
import SearchPage from '../pages/SearchPage';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Changed to HashRouter
import ImagePage from '../pages/ImagePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/images" element={<ImagePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

