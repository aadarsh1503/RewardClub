import React from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Purchasepremium from "../Purchasepremium/Purchasepremium";
import { FaHome } from "react-icons/fa";

const ProductCard = ({ imgSrc, brandLogo, title }) => {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <div className="">
      <div className="rounded-xl shadow-lg mt-10 overflow-hidden bg-white">
        <div className="relative">
          <img src={imgSrc} alt="Product" className="w-full h-64 object-cover" />
          <div className="absolute bottom-3 right-3 bg-white p-2 rounded-lg shadow-md">
            <img src={brandLogo} alt="Brand Logo" className="w-10 h-10 object-contain" />
          </div>
        </div>
        <div className="p-4">
          <span className="px-2 py-1 rounded-md whitespace-nowrap flex items-center gap-1">
            <div className="shadow-custom p-2 flex">
              <FaHome className="mr-2 mt-1 ml-2" /> {t('inStore')} {/* Use translation for "In-store" */}
            </div>
          </span>
          <h3 className="mt-2 text-lg font-bold text-gray-900">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  const { t } = useTranslation(); // Use the translation hook

  const products = [
    {
      imgSrc: "https://www.aura-mena.com/sites/default/files/styles/promo_image_medium/public/promotion/2024-12/LL%20Classic%20Collection%201125%20x%20750_11zon%20%284%29.jpg?itok=yBM4UV15",
      brandLogo: "https://www.aura-mena.com/sites/default/files/styles/brand_logo/public/brand-logo/2024-05/LEL.png?itok=nnYs_pkE",
      titleKey: "product1", // Link to the title in the translation file
    },
    {
      imgSrc: "https://www.aura-mena.com/sites/default/files/styles/promo_image_medium/public/promotion/2024-12/Al%20Shaya%20Aura%20App-02_11zon%20%281%29.jpg?itok=udmgf65f",
      brandLogo: "https://www.aura-mena.com/sites/default/files/styles/brand_logo/public/brand-logo/2024-05/MAC.png?itok=JClg16gW",
      titleKey: "product2", // Link to the title in the translation file
    },
    {
      imgSrc: "https://www.aura-mena.com/sites/default/files/styles/promo_image_medium/public/promotion/2024-12/738571AM-JOM-QT-OO2.jpg?itok=MqLkB8dO",
      brandLogo: "https://www.aura-mena.com/sites/default/files/styles/brand_logo/public/brand-logo/2024-04/JOM.png?itok=H3WfslOe",
      titleKey: "product3", // Link to the title in the translation file
    },
  ];

  return (
    <div>
      <h1 className="mt-24 text-4xl font-semibold text-Green ml-7 mr-7 mb-5">{t('neverMiss')}</h1>
      <p className="ml-7 mr-7 text-lg">{t('downloadApp')}<br />{t('offers')}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-xl">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imgSrc={product.imgSrc}
            brandLogo={product.brandLogo}
            title={t(product.titleKey)} // Use translation for the title
          />
        ))}
      </div>
      <Purchasepremium />
    </div>
  );
};

export default ProductSection;
