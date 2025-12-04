import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import { FaXmark } from "react-icons/fa6";

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const isLoginPage = location.pathname === '/login';

  // --- SCROLL LOCK LOGIC START ---
  useEffect(() => {
   
    document.body.style.overflow = 'hidden';

  
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  // --- SCROLL LOCK LOGIC END ---

  const closeModal = (e) => {
 
    if (e.target === e.currentTarget) {
      navigate(-1);
    }
  };

  return (
    <div 
      onClick={closeModal}
      // Added 'z-[9999]' to ensure it's on top of everything
      // Added 'overscroll-none' to prevent scroll chaining
      className="fixed inset-0 z-[900] flex items-start justify-center bg-black/60 backdrop-blur-md overflow-y-auto overscroll-none pt-32 pb-10 px-4"
    >
      {/* 
         "my-auto" helps center vertically if content is small, 
         but allows scrolling if content is tall 
      */}
      <div className="relative w-full max-w-4xl bg-transparent my-auto">
        
        {/* Global Cross Button */}
        {!isLoginPage && (
          <button 
            onClick={() => navigate(-1)} 
            className="absolute top-0 right-0 lg:right-4 lg:top-0 z-50 p-2 bg-white text-gray-600 rounded-full hover:bg-red-500 hover:text-white transition-all shadow-md mb-2"
            title="Close"
          >
            <FaXmark size={20} />
          </button>
        )}

        {/* Render the specific page content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;