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

function AppContent() {
  const location = useLocation();
  
  // --- FIX START ---
  // Define which paths should always open as a modal over the home page
  const modalPaths = ['/login', '/member-register', '/vendor-register'];
  
  // Check if we have state background OR if we are on a modal path directly
  let background = location.state && location.state.background;

  // Agar background null hai (direct url access) AUR hum modal path par hain,
  // toh background ko manually Homepage ('/') set kar do.
  if (!background && modalPaths.includes(location.pathname)) {
    background = { pathname: '/' };
  }
  // --- FIX END ---

  return (
    <>
      <Navbar />
      <MobileNavbar />
      <ChatWidget supportNumber="+966553800550" />

      {/* 
         Main Routes:
         Agar 'background' set hai (chahe link click se ya direct access logic se),
         ye Routes 'Home' page render karenge piche.
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
        
        {/* 
           Ye routes tabhi hit honge jab 'background' null hoga.
           Lekin upar humne logic laga diya hai, to modalPaths ke liye ye kabhi hit nahi honge 
           unless aap logic change karein. 
        */}
        <Route path="/member-register" element={<MemberRegister />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
      </Routes>

      {/* 
         Modal Routes:
         Ye tab render honge jab background exist karega.
      */}
      {background && (
        <Routes>
          <Route path="/login" element={<Modal><LoginPage /></Modal>} />
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