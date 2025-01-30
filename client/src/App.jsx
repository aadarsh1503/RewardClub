import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import LifestyleRewards from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AuraStarCard from './Components/AuraStarCard/AuraStarCard';
import BrandFilter from './Components/BrandFilter/BrandFilter';
import ProductSection from './Components/ProductSection/ProductSection';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LifestyleRewards />} />
        <Route path="/explore" element={<AuraStarCard />} />
        <Route path="/brand" element={<BrandFilter />} />
        <Route path="/product" element={<ProductSection />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
