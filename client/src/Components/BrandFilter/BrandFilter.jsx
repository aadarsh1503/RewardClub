import { useState } from "react";
import React from "react";

const brands = [
 
  { name: "H&M", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/HEN.png", alt: "H&M" },
  { name: "Bath & Body Works", category: "Health & Beauty", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/BAT.png", alt: "Bath & Body Works" },
  { name: "American Eagle", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/AME.png", alt: "American Eagle" },
  { name: "Victoria's Secret", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/VIF.png", alt: "Victoria's Secret" },
  { name: "Claire's", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/CLA.png", alt: "Claire's" },
  { name: "COS", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/COL.png", alt: "COS" },
  { name: "Kurt Geiger", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/KUT.png", alt: "Kurt Geiger" },
  { name: "Milano", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/MIL.png", alt: "Milano" },
  { name: "New Balance(NB)", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/NEW.png", alt: "New Balance(NB)" },
  { name: "Next", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/NEX.png", alt: "Next" },
  { name: "Payless", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/PAY.png", alt: "Payless" },
  { name: "Victoria Secret (Beauty and Accessories)", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/VIF-VSB.png", alt: "Victoria Secret (Beauty and Accessories)" },
  { name: "Pink", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/VIF-VSP.png", alt: "Pink" },
  { name: "Justice", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/LIM.png", alt: "Justice" },
  { name: "JACK WILLS", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-06/JAC.png", alt: "JACK WILLS" },
  { name: "Harvey Nichols", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-06/HAS.png", alt: "Harvey Nichols" },
  { name: "Charlotte Tilbury", category: "Health & Beauty", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/CHA.png", alt: "Charlotte Tilbury" },
  { name: "The Heart of Sneakers", category: "Fashion & Footwear", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/FOO_0.png", alt: "The Heart of Sneakers" },
  


  { name: "Chipotle", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-12/Logo%20July%202024_CHIPOTLE_en.png", alt: "Chipotle Mexican Grill" },
  { name: "Starbucks", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/SBX%20295.png", alt: "Starbucks" },
  { name: "Amiti Noura", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/KUR.png", alt: "Chipotle Mexican Grill" },
  { name: "Ashas", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/ASH.png", alt: "Ashas" },
  { name: "Babel", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/BAB.png", alt: "Babel" },
  { name: "Bebabel", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-04/BBA.png", alt: "Bebabel" },
  { name: "Chipotle", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-12/Logo%20July%202024_CHIPOTLE_en.png", alt: "Chipotle Mexican Grill" },
  { name: "Chipotle", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-12/Logo%20July%202024_CHIPOTLE_en.png", alt: "Chipotle Mexican Grill" },
  { name: "Chipotle", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-12/Logo%20July%202024_CHIPOTLE_en.png", alt: "Chipotle Mexican Grill" },
  { name: "Chipotle", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-12/Logo%20July%202024_CHIPOTLE_en.png", alt: "Chipotle Mexican Grill" },
  { name: "Chipotle", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-12/Logo%20July%202024_CHIPOTLE_en.png", alt: "Chipotle Mexican Grill" },
  { name: "Chipotle", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-12/Logo%20July%202024_CHIPOTLE_en.png", alt: "Chipotle Mexican Grill" },
  { name: "Chipotle", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-12/Logo%20July%202024_CHIPOTLE_en.png", alt: "Chipotle Mexican Grill" },

  { name: "Shake Shack", category: "Food & Restaurants", src: "https://www.aura-mena.com/sites/default/files/brand-logo-web/2024-03/SHA_0.png", alt: "Shake Shack" },

];

const categories = ["All", "Fashion & Footwear", "Food & Restaurants", "Health & Beauty", "Home Furnishings", "Kids", "Leisure & Entertainment"];

export default function BrandFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBrands = brands.filter((brand) =>
    (selectedCategory === "All" || brand.category === selectedCategory) &&
    brand.alt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-5xl mx-auto mt-32">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Discover <span className="text-Green">Brands</span></h2>
      <p className="text-gray-600 mb-6">Explore brands across fashion, beauty, home, dining, and more.</p>
      
      {/* Basic Input and Button */}
      <div className="flex gap-4 mb-6">
        <input 
          type="text"
          placeholder="Search brands..." 
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
            className={`px-4 py-2 rounded-full  border ${selectedCategory === category ? 'bg-Green text-white ' : 'bg-white text-gray-700 cursor-pointer'}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredBrands.map((brand) => (
          <div key={brand.name} className="bg-white shadow-custom rounded-lg p-4 flex items-center justify-center">
            <img src={brand.src} alt={brand.alt} className="h-24 w-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
