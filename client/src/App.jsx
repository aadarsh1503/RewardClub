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

// Import the new Modal component
import Modal from './Components/Modal/Modal';

function AppContent() {
  const location = useLocation();
  
  // This logic determines if we should show a modal.
  // We check if location.state has a 'background' property.
  const background = location.state && location.state.background;

  return (
    <>
      <Navbar />
      <MobileNavbar />
      <ChatWidget supportNumber="+966553800550" />

      {/* 
         The Routes that show the main content.
         If 'background' exists, we force these routes to render the BACKGROUND location,
         so the page behind the modal stays visible.
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
        
        {/* These routes allow the pages to be accessed directly (e.g. refresh) without a modal */}
        <Route path="/member-register" element={<MemberRegister />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vendor-register" element={<VendorRegister />} />
      </Routes>

      {/* 
         The Modal Routes.
         These only render if 'background' exists (meaning we clicked a link to open them).
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