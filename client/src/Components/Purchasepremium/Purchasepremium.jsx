import React from "react";
import { FaHome } from "react-icons/fa";
const ProductCard = ({ imgSrc, brandLogo, title, points }) => {
  return (
    <div className="h-[384px]">
      <div className="rounded-xl shadow-lg mt-10 overflow-hidden bg-white flex flex-col h-full">
        <div className="relative">
          <img src={imgSrc} alt="Product" className="w-full h-64 object-cover" />
          <div className="absolute bottom-3 right-3 bg-white p-2 rounded-lg shadow-md">
            <img src={brandLogo} alt="Brand Logo" className="w-10 h-10 object-contain" />
          </div>
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <span className="flex items-center gap-2 text-gray-700 text-sm font-semibold">
            <span className="px-2 py-1 bg-Green text-white shadow-custom rounded-md whitespace-nowrap">
              {points} Points
            </span>
            <span className="px-2 py-1  p-4 shadow-custom rounded-md whitespace-nowrap flex items-center gap-1">
      <FaHome className=""/> In-store
    </span>
          </span>
          <h3 className="mt-2 text-lg font-bold text-gray-900 min-h-[7px] flex items-center">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const Purchasepremium = () => {
  const products = [
    {
      imgSrc: "https://www.aura-mena.com/sites/default/files/styles/promo_image_medium/public/promotion/2024-12/TBS%20Kuwait%20%26%20Qatar%20-%20KWT_1125x750%20%284%29.jpg?itok=wLLDVcH2",
      brandLogo: "https://www.aura-mena.com/sites/default/files/styles/brand_logo/public/brand-logo/2024-04/BOD.png?itok=-C4DKiAK",
      title: "Get a pouch filled with The Body Shop's best-sellers for 1000 points.",
      points: 1000,
    },
    {
      imgSrc: "https://www.aura-mena.com/sites/default/files/styles/promo_image_medium/public/promotion/2024-12/kwt%202_11zon.png?itok=z6u8v3sS",
      brandLogo: "https://www.aura-mena.com/sites/default/files/styles/brand_logo/public/brand-logo/2024-05/ALY.png?itok=kJCP8sBc",
      title: "Alo Yoga socks for 500 points",
      points: 500,
    },
    {
      imgSrc: "https://www.aura-mena.com/sites/default/files/styles/promo_image_medium/public/promotion/2025-01/451628RR-BOO-QT-OO2.jpg?itok=kwnWAT_l",
      brandLogo: "https://www.aura-mena.com/sites/default/files/styles/brand_logo/public/brand-logo/2024-06/Boots%20Aura%202.0-01.jpg?itok=Vlvxy0JX",
      title: "Get a Lip Balm for 1500 points",
      points: 1500,
    },
  ];

  return (
    <div>
      <h1 className="mt-24 text-5xl font-semibold text-Green ml-7 mb-5">
        Purchase premium exclusives with points
      </h1>
      <p className="ml-7 text-lg">
        Enjoy VIP treatment on the Aura app. Earn points and get access to exclusive, limited-edition
        <br /> products, experiences, and events from the 70+ brands you love.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 mb-10 gap-6 p-6  rounded-xl">
        {products.map((product, index) => (
          <div key={index} className="h-full">
            <ProductCard
              imgSrc={product.imgSrc}
              brandLogo={product.brandLogo}
              title={product.title}
              points={product.points}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchasepremium;
