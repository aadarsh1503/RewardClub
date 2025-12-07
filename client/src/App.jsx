import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import all your components
import LifestyleRewards from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import AuraStarCard from './Components/AuraStarCard/AuraStarCard';
import BrandFilter from './Components/BrandFilter/BrandFilter';
import ProductSection from './Components/ProductSection/ProductSection';
import SupportSection from './Components/SupportSection/SupportSection';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import MobileNavbar from './Components/MobileNavbar/MobileNavbar';
import { DirectionProvider } from './Components/DirectionContext';
import FAQ from './Components/Faq/Faq';
import About from './Components/About/About';
import MemberRegister from './Components/MemberRegister/MemberRegister';
import ChatWidget from './Components/ChatWidget/ChatWidget';
import LoginPage from './Components/Login/Login';
import VendorRegister from './Components/VendorRegister/VendorRegister';

// Import the Modal component
import Modal from './Components/Modal/Modal';
import VerifyEmail from './Components/Login/VerifyEmail';

function AppContent() {
  const location = useLocation();

  const modalPaths = ['/login', '/member-register', '/vendor-register', '/verify-email'];
 
  let background = location.state && location.state.background;

  // If we reload the page on a modal route, treat it as a direct visit (no background)
  if (!background && modalPaths.includes(location.pathname)) {
    background = { pathname: '/' };
}

  return (
    <>
      <Navbar />
      <MobileNavbar />
      <ChatWidget supportNumber="+966553800550" />

      {/* 
         MAIN ROUTES (Direct Links)
         Added /verify-email here so it works when clicked from email
      */}
      <Routes location={background || location}>
        <Route path="/" element={<LifestyleRewards />} />
        <Route path="/tiers-benefits" element={<AuraStarCard />} />
        <Route path="/brands" element={<BrandFilter />} />
        <Route path="/offers-rewards" element={<ProductSection />} />
        <Route path="/contact-us" element={<SupportSection />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-statement" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-us" element={<About />} />
        
        {/* Direct Page Access */}
        <Route path="/member-register" element={<MemberRegister />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
        
        {/* 🔥 IMPORTANT: Add this here for Email Links to work! */}
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>

      {/* MODAL ROUTES (Overlays) */}
      {background && (
        <Routes>
          <Route path="/login" element={<Modal><LoginPage /></Modal>} />
          <Route path="/verify-email" element={<Modal><VerifyEmail /></Modal>} />
          <Route path="/member-register" element={<Modal><MemberRegister /></Modal>} />
          <Route path="/vendor-register" element={<Modal><VendorRegister /></Modal>} />
        </Routes>
      )}

      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <DirectionProvider />
      <AppContent />
    </Router>
  );
}

export default App;