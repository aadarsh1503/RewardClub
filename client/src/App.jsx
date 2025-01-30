import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import LifestyleRewards from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AuraStarCard from './Components/AuraStarCard/AuraStarCard';
import BrandFilter from './Components/BrandFilter/BrandFilter';
import ProductSection from './Components/ProductSection/ProductSection';
import SupportSection from './Components/SupportSection/SupportSection';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LifestyleRewards />} />
        <Route path="/tiers-benefits" element={<AuraStarCard />} />
        <Route path="/brands" element={<BrandFilter />} />
        <Route path="/offers-rewards" element={<ProductSection />} />
        <Route path="/contact-us" element={<SupportSection />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-statement" element={<PrivacyPolicy />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
