import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      {/* Changed 'mt-4' / 'mt-3' to 'pt-2' for minimal top padding */}
      <div className="container pt-2 pb-4">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;