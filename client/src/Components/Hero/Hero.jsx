import React, { useState, useEffect } from 'react';
import "../../App.css";
import ImageSlider from '../ImageSlider/ImageSlider';
import TierCard from '../TierCard/TierCard';
import MostLovedBrands from '../MostLovedBrands/MostLovedBrands';
import Slide from '../Slide/Slide';
import { useTranslation } from 'react-i18next';
import Faqactive from '../Faq/Faqactive';

const LifestyleRewards = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  // Language Change Detect Karne ke liye
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'; // RTL Handling
  }, [i18n.language]);

  return (
    <div>
      <ImageSlider />
      <div className="bg-white py-16 font-roboto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col max-w-5xl mx-auto lg:flex-row items-center justify-between">
          {/* Left Section (Text) */}
          <div className={`lg:w-1/2 ${isRTL ? 'text-right' : 'text-left'} mb-12 lg:mb-0`}>
            <h2 className="text-4xl font-bold text-Green">{t("discover_lifestyle")}</h2>
            <p className="mt-4 text-lg text-gray-600">{t("description")}</p>
            <a href='/offers-rewards'>
              <button className="bg-Green mt-8 text-white cursor-pointer hover:bg-white hover:text-[#827127] hover:outline-black outline py-2 px-6 rounded-lg font-semibold focus:outline-none">
                {t("unlock_rewards")}
              </button>
            </a>
          </div>

          {/* Right Section (Stats in 2x2 Grid) */}
          <div className="lg:w-[500px] lg:h-[400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {/* Brands */}
            <div className="p-6 bg-white rounded-[40px] lg:w-64 lg:h-72 text-black flex shadow-custom flex-col justify-between items-center h-48">
              <img src="https://www.aura-mena.com/sites/default/files/aura-statistic-logo/2024-05/brand%20%281%29%201.png" alt="Icon" className="w-20 h-20 mb-4" />
              <div className="w-full">
                <div className="w-full h-0.5 bg-black rounded-full mb-0 lg:mb-8"></div>
                <div className="text-center">
                  <h3 className="lg:text-6xl text-2xl font-bold">70+</h3>
                  <p className="text-lg">{t("brands")}</p>
                </div>
              </div>
            </div>

            {/* Countries */}
            <div className="p-6 bg-white relative top-0 lg:-top-14 lg:w-64 lg:h-72 rounded-[40px] shadow-custom text-black flex flex-col justify-between items-center h-48">
              <img src="https://www.aura-mena.com/sites/default/files/aura-statistic-logo/2024-05/location-pin%201_0.png" alt="Icon" className="w-20 h-20 mb-4" />
              <div className="w-full">
                <div className="w-full h-0.5 bg-black rounded-full mb-0 lg:mb-8"></div>
                <div className="text-center">
                  <h3 className="lg:text-6xl text-2xl font-bold">5</h3>
                  <p className="text-lg">{t("countries")}</p>
                </div>
              </div>
            </div>

            {/* Tiers */}
            <div className="p-6 bg-white lg:w-64 lg:h-72 rounded-[40px] shadow-custom text-black flex flex-col justify-between items-center h-48">
              <img src="https://www.aura-mena.com/sites/default/files/aura-statistic-logo/2024-05/premium%20%281%29%201.png" alt="Icon" className="w-20 h-20 mb-4" />
              <div className="w-full">
                <div className="w-full h-0.5 bg-black rounded-full mb-0 lg:mb-8"></div>
                <div className="text-center">
                  <h3 className="lg:text-6xl text-2xl font-bold">3</h3>
                  <p className="text-lg">{t("tiers")}</p>
                </div>
              </div>
            </div>

            {/* Rewards */}
            <div className="p-6 bg-white lg:w-64 lg:h-72 relative top-0 lg:-top-14 rounded-[40px] shadow-custom text-black flex flex-col justify-between items-center h-48">
              <img src="https://www.aura-mena.com/sites/default/files/aura-statistic-logo/2024-05/favorite%201_0.png" alt="Icon" className="w-20 h-20 mb-4" />
              <div className="w-full">
                <div className="w-full h-0.5 bg-black rounded-full mb-0 lg:mb-8"></div>
                <div className="text-center">
                  <h3 className="lg:text-6xl text-2xl font-bold">50</h3>
                  <p className="text-lg">{t("rewards")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slide />
      <TierCard />
      <MostLovedBrands />
      <Faqactive />
    </div>
  );
};

export default LifestyleRewards;
