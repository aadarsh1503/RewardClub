import React from 'react';
import "../../App.css";  // Relative path up two levels

const LifestyleRewards = () => {
  return (
    <div className="bg-white py-16 px-8 md:px-16  lg:px-24">
    <div className="flex flex-col max-w-5xl mx-auto lg:flex-row items-center justify-between">
      
      {/* Left Section (Text) */}
      <div className="lg:w-1/2 text-left mb-12 lg:mb-0">
        <h2 className="text-4xl font-bold text-Green">Discover Lifestyle Rewards Tailored To You</h2>
        <p className="mt-4 text-lg text-gray-600">
          Aura amplifies your every day, making sure the extraordinary is always within reach.
          Embrace a rewards programme that makes it rewarding to be you!
        </p>
        <div className="mt-8">
      <button className="bg-Green text-white hover:bg-white  hover:text-[#827127] hover:outline-black outline py-2 px-6 rounded-lg font-semibold  focus:outline-none">
        Unlock Rewards
      </button>
    </div>
      </div>
  
      {/* Right Section (Stats in 2x2 Grid) */}
      <div className="lg:w-[500px] lg:h-[400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
      <div class="p-6 bg-white  rounded-[40px] lg:w-64 lg:h-72  text-black flex shadow-custom flex-col justify-between items-center h-48">
      <img src="https://www.aura-mena.com/sites/default/files/aura-statistic-logo/2024-05/brand%20%281%29%201.png" alt="Icon" class="w-20 h-20 mb-4" />
  <div class="w-full">
    <div class="w-full h-0.5 bg-black rounded-full mb-8"></div>
    <div class="text-center">
      <h3 class="text-6xl font-bold">70+</h3>
      <p class="text-lg">Brands</p>
    </div>
  </div>
</div>
  
        <div class="p-6 bg-white relative -top-14 lg:w-64 lg:h-72 rounded-[40px] shadow-custom text-black flex flex-col justify-between items-center h-48">
        <img src="https://www.aura-mena.com/sites/default/files/aura-statistic-logo/2024-05/location-pin%201_0.png" alt="Icon" class="w-20 h-20 mb-4" />
  <div class="w-full">
    <div class="w-full h-0.5 bg-black rounded-full mb-8"></div>
    <div class="text-center">
      <h3 class="text-6xl font-bold">5</h3>
      <p class="text-lg">Countries</p>
    </div>
  </div>
</div>


  
<div class="p-6 bg-white lg:w-64 lg:h-72 rounded-[40px] shadow-custom text-black flex flex-col justify-between items-center h-48">
<img src="https://www.aura-mena.com/sites/default/files/aura-statistic-logo/2024-05/premium%20%281%29%201.png" alt="Icon" class="w-20 h-20 mb-4" />
  <div class="w-full">
    <div class="w-full h-0.5 bg-black rounded-full mb-8"></div>
    <div class="text-center">
      <h3 class="text-6xl font-bold">3</h3>
      <p class="text-lg">Tiers</p>
    </div>
  </div>
</div>
  
<div class="p-6 bg-white lg:w-64 lg:h-72 relative -top-14 rounded-[40px] shadow-custom text-black flex flex-col justify-between items-center h-48">
<img src="https://www.aura-mena.com/sites/default/files/aura-statistic-logo/2024-05/favorite%201_0.png" alt="Icon" class="w-20 h-20 mb-4" />
  <div class="w-full">
  <div class="w-full h-0.5 bg-black rounded-full mb-8"></div>

    <div class="text-center">
      <h3 class="text-6xl font-bold">50</h3>
      <p class="text-lg">Rewards</p>
    </div>
  </div>
</div>
      </div>
    </div>
  
    {/* Button Centered Below */}
  
  </div>
  );
};

export default LifestyleRewards;
