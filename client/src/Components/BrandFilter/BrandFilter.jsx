import { useState } from "react";
import React from "react";
import { useTranslation } from 'react-i18next';
import Faqactive from "../Faq/Faqactive";
import "./b.css"

const brands = [
 
  // { name: "H&M", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/HEN.png", alt: "H&M" },

  // { name: "American Eagle", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/AME.png", alt: "American Eagle" },
  // { name: "Victoria's Secret", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/VIF.png", alt: "Victoria's Secret" },
  // { name: "Claire's", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/CLA.png", alt: "Claire's" },
  // { name: "COS", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/COL.png", alt: "COS" },
  // { name: "Kurt Geiger", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/KUT.png", alt: "Kurt Geiger" },
  // { name: "Milano", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/MIL.png", alt: "Milano" },
  // { name: "New Balance(NB)", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/NEW.png", alt: "New Balance(NB)" },
  // { name: "Next", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/NEX.png", alt: "Next" },
  // { name: "Payless", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/PAY.png", alt: "Payless" },
  // { name: "Victoria Secret (Beauty and Accessories)", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/VIF-VSB.png", alt: "Victoria Secret (Beauty and Accessories)" },
  // { name: "Pink", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/VIF-VSP.png", alt: "Pink" },
  // { name: "Justice", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/LIM.png", alt: "Justice" },
  // { name: "JACK WILLS", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-06/JAC.png", alt: "JACK WILLS" },
  // { name: "Harvey Nichols", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-06/HAS.png", alt: "Harvey Nichols" },
 
  // { name: "The Heart of Sneakers", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/FOO_0.png", alt: "The Heart of Sneakers" },
  


  // { name: "PinkBerry", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/Pinkberry.png", alt: "PinkBerry" },
  // { name: "Starbucks", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/SBX%20295.png", alt: "Starbucks" },
  // { name: "Ashas", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/ASH.png", alt: "Ashas" },
  // { name: "Pf Changs", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/PFC.png", alt: "Pf Changs" },
  // { name: "The Cheese Cake Factory", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/CHE.png", alt: "The Cheese Cake Factory" },
  // { name: "Texas Roadhouse", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/TEX.png", alt: "Texas Roadhouse" },
  // { name: "Rising Canes", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/RAI_0.png", alt: "Rising Canes" },
  // { name: "Shake Shack", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/SHA_0.png", alt: "Shake Shack" },


  // { name: "Bath & Body Works", category: "Health & Beauty", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/BAT.png", alt: "Bath & Body Works" },
  // { name: "Boots", category: "Health & Beauty", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/BOO.png", alt: "Boots" },
  // { name: "DebanHams", category: "Health & Beauty", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/DCO.png", alt: "DebanHams" },
  // { name: "Jo Malone", category: "Health & Beauty", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/JOM.png", alt: "Jo Malone" },
  // { name: "MAC", category: "Health & Beauty", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/MAC.png", alt: "MAC" },
  // { name: "nyx", category: "Health & Beauty", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/NYX.png", alt: "NYX" },
  // { name: "Solaris", category: "Health & Beauty", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/SOL_2.png", alt: "Solaris" },


  // { name: "Pottery barn Kids", category: "Home Furnishings", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/PBK.png", alt: "Pottery barn Kids" },
  // { name: "West elm", category: "Home Furnishings", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/WES_1.png", alt: "West elm" },

  // { name: "MotherCare", category: "Kids", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/MOT.png", alt: "MotherCare" },
  
  // { name: "aerie", category: "Leisure & Entertainment", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/AME-AER.png", alt: "aerie" },
  // { name: "DebanHams", category: "Leisure & Entertainment", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/DCO.png", alt: "DebanHams" },
  // { name: "River Island", category: "Leisure & Entertainment", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/RIV.png", alt: "River Island" },
  // { name: "The Body Shop", category: "Leisure & Entertainment", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/BOD.png", alt: "The Body Shop" },
  

];




export default function BrandFilter() {
  const { t } = useTranslation(); // Fetch translations
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = t("categories", { returnObjects: true }); 

  const filteredBrands = brands.filter((brand) =>
    (selectedCategory === "All" || brand.category === selectedCategory) &&
    brand.alt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const uniqueBrands = [];
  const displayedBrandNames = new Set();

  const finalBrands = filteredBrands.filter((brand) => {
    if (!displayedBrandNames.has(brand.name)) {
      displayedBrandNames.add(brand.name);
      uniqueBrands.push(brand);
      return true;
    }
    return false;
  });

  return (
    <div className="">
    <div className="">
    <div className="p-6  max-w-5xl mx-auto mt-32">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        {t("discover_brands")} <span className="text-Green"> {t("discover_brands1")}</span>
      </h2>
      <p className="text-gray-600 mb-6">{t("explore_brands")}</p>
      
      {/* Basic Input and Button */}
      <div className="flex gap-4 mb-6">
        <input 
          type="text"
          placeholder={t("search_placeholder")} 
          className="w-full p-3 border rounded-lg"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category} 
            onClick={() => setSelectedCategory(category)} 
            className={`px-4 py-2 rounded-full border ${selectedCategory === category ? 'bg-Green text-white' : 'bg-white text-gray-700 cursor-pointer'}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {finalBrands.map((brand) => (
          <div key={brand.name} className="bg-white shadow-custom rounded-lg p-4 flex items-center justify-center">
            <img src={brand.src} alt={brand.alt} className="h-24 w-auto" />
          </div>
          
        ))}
      </div>
      <div class="flex justify-center items-center ">
    <span class="text-4xl text-Green font-bold ">COMING SOON</span>
</div>


      
    </div>
    <Faqactive />
    </div>
    </div>
  );
}