import React from 'react';

const TierCard = () => {
  return (
    <div>
      <div className="lg:ml-48 ml-0 lg:mt-20 mt-0 text-center lg:text-left">
        <h2 className="text-3xl font-bold mt-0 lg:mt-56 text-gray-900">
          <span className="text-black">Explore</span> <span className="text-Green">Tiers</span>
        </h2>
        <p className="text-gray-600 p-4 mt-2">
          Earn points on every purchase and move up the tiers for personalized offers.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-6 space-y-6 lg:space-y-0 mt-6">
        {/* First Card */}
        <div className="flex flex-col items-center p-6 bg-white">
          <div className="w-72 rounded-[40px] shadow-custom overflow-hidden">
            <div className="bg-Green to-orange-400 h-32">
              <h3 className="text-white left-6 relative top-12 text-3xl font-semibold">Aura Hello</h3>
            </div>
            <div className="bg-white h-32 p-4">
              <p className="text-gray-800 font-semibold">
                <span className="text-Green">0 to </span>
                <span className="text-Green">5,999 pts</span>
              </p>
              <p className="text-gray-600 mt-2">
                Earn points on every purchase and contribute points towards Aura Star tier.
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="flex flex-col items-center p-6 bg-white">
          <div className="w-72 rounded-[40px] shadow-custom overflow-hidden">
            <div className="bg-Green to-orange-400 h-32">
              <h3 className="text-white left-6 relative top-12 text-3xl font-semibold">Aura Star</h3>
            </div>
            <div className="bg-white h-32 p-4">
              <p className="text-gray-800 font-semibold">
                <span className="text-Green">6,000 to 23,999 pts</span>
              </p>
              <p className="text-gray-600 mt-2">Earn 1.5 times more points than Aura Hello.</p>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="flex flex-col items-center p-6 bg-white">
          <div className="w-72 rounded-[40px] shadow-custom overflow-hidden">
            <div className="bg-Green to-orange-400 h-32">
              <h3 className="text-white left-6 relative top-12 text-3xl font-semibold">Aura VIP</h3>
            </div>
            <div className="bg-white h-32 p-4">
              <p className="text-gray-800 font-semibold">
                <span className="text-Green">From 24,000 pts</span>
              </p>
              <p className="text-gray-600 mt-2">
                Earn double the points of Aura Hello and access prioritized VIP experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button below the cards */}
      <div className="flex justify-center mt-8 mb-8">
        <button className="px-5 py-2 bg-Green cursor-pointer hover:text-[#827127] outline outline-black text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-white transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TierCard;
