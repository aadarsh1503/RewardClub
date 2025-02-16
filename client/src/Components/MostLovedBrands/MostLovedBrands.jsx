import React from "react";
import { useTranslation } from "react-i18next";

const MostLovedBrands = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl"; // Check if the language is right-to-left

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div className={`md:w-1/3 ${isRTL ? 'lg:ml-32 ml-0' : 'text-left'} text-center md:text-left`}>
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="text-black">{t('most')}</span> <span className="text-Green">{t('loved_brands')}</span>
          </h2>
          <p className="text-gray-600 mt-4">
            {t('personalized_offers')}
          </p>
          <a href="/brands">
            <button className="mt-6 px-6 py-3 bg-Green hover:bg-white outline hover:outline-black hover:text-[#827127] cursor-pointer text-white font-semibold rounded-lg">
              {t('discover_brands12')}
            </button>
          </a>
        </div>
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 md:mt-0">
          <div className="bg-white p-6 rounded-xl shadow-custom flex items-center justify-center">
            <img
              src="https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-12/Logo%20July%202024_CHIPOTLE_en.png"
              alt="chipotle"
              className="max-w-full h-20"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-custom flex items-center justify-center">
            <img
              src="https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/HEN.png"
              alt="hm"
              className="max-w-full h-16"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-custom flex items-center justify-center">
            <img
              src="https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/BAT.png"
              alt="bath_body_works"
              className="max-w-full h-16"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-custom flex items-center justify-center">
            <img
              src="https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/AME.png"
              alt="american_eagle"
              className="max-w-full h-20"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-custom flex items-center justify-center">
            <img
              src="https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/VIF.png"
              alt="victorias_secret"
              className="max-w-full h-16"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-custom flex items-center justify-center">
            <img
              src="https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/CHA.png"
              alt="charlotte_tilbury"
              className="max-w-full h-20"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-custom flex items-center justify-center">
            <img
              src="https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/FOO_0.png"
              alt="heart_of_sneakers"
              className="max-w-full h-16"
            />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-custom flex items-center justify-center">
            <img
              src="https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/SHA_0.png"
              alt="shake_shack"
              className="max-w-full h-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostLovedBrands;
