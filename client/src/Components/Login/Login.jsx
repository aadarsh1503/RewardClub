import { useState } from 'react';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // 1. Import Hooks
import { FaXmark } from "react-icons/fa6"; // 2. Import Icon
import il from "./il.jpg";
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { t, i18n } = useTranslation();

  // 3. Initialize Hooks
  const navigate = useNavigate();
  const location = useLocation();
  
  // 4. Check if this page is open as a modal
  const isModal = location.state?.background;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className=''>
      <div className="inset-0 flex font-sans items-center justify-center z-50">
        <div className="relative w-full max-w-md bg-white rounded-lg p-8">
          
          {/* 5. ADDED CROSS BUTTON WITH mr-32 */}
          {isModal && (
            <button 
              onClick={() => navigate(-1)} 
              className="absolute top-6 right-0 mr-4 z-50 text-gray-500  hover:bg-red-600 hover:text-white transition-colors bg-white/50 rounded-full p-1"
              title="Close"
            >
              <FaXmark size={24} />
            </button>
          )}
          {/* -------------------------------- */}

          <img src={il} alt={t('background')} className="absolute inset-0 w-full h-full object-cover rounded-lg z-0" />

          <h2 className="relative text-3xl font-bold text-center mb-8 z-10">{t('login')}</h2>

          <div className="space-y-6 relative z-10">
            <input
              type="text"
              placeholder={t('enterUsername')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />

            <input
              type="password"
              placeholder={t('enterPassword')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />

            <div className="text-sm text-gray-600 hover:underline cursor-pointer">
              {t('forgotPassword')}
            </div>

            <button className="w-full p-3 hover:bg-white outline hover:outline-Green cursor-pointer bg-Green text-white font-semibold rounded-md">
              {t('loginButton')}
            </button>

            <div className="flex items-center justify-center my-6">
              <div className="border-t w-full"></div>
              <div className="mx-4 text-gray-500">{t('or')}</div>
              <div className="border-t w-full"></div>
            </div>

            {/* Updated to keep user in Modal when clicking Register */}
            <button 
               onClick={() => navigate('/member-register', { state: { background: location.state?.background || location } })}
               className="w-full p-3 bg-gray-800 cursor-pointer text-white hover:bg-white outline hover:outline-black font-semibold rounded-md hover:opacity-90"
            >
                {t('registerNow')}
            </button>
            
          </div>

          {/* Language Switcher */}
          {/* <div className="flex justify-center mt-6 relative z-10">
            <button onClick={() => changeLanguage('en')} className="mx-2">English</button>
            <button onClick={() => changeLanguage('ar')} className="mx-2">العربية</button>
          </div> */}
        </div>
      </div>
     
    </div>
  );
}