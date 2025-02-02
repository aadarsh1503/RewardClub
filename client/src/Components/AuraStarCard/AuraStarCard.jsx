import { FaDiamond } from "react-icons/fa6";
import React from "react";
import PointsCalculator from "./PointsCalculator";

const AuraStarCard = () => {
  return (
    <div>
        <h1 className="text-Green p-2 lg:mt-44 text-left text-3xl  mt-32 lg:text-4xl font-semibold ml-0 lg:ml-32">Explore Tiers</h1>
        <p className="lg:mb-24 p-2   mb-32 mt-0 lg:mt-5 text-lg lg:text-lg ml-0  lg:ml-32">Earn points on every purchase and move up the tiers to unlock more benefits and receive personalized offers.</p>
        <div className="flex flex-wrap justify-center space-x-0 lg:space-x-6 gap-y-6"> {/* Using flex-wrap and gap-y-6 for better spacing */}
  {/* Card 1 */}
  <div className=" sm:w-[400px] w-[900px]  p-6 h-[556px] bg-Green rounded-[30px] shadow-lg border border-gray-200">
    <div className="relative w-full lg:mb-0 mb-20 flex justify-center">
      <div className="absolute -top-16 px-12 lg:px-20 py-6 bg-white rounded-full shadow-md border border-gray-300 text-3xl font-semibold text-Green">
        Classic
      </div>
    </div>
    <div className="mt-8 text-center">
      <h2 className="text-2xl font-bold text-white">
        <hr className="my-4 border-gray-300 " />
        0 <span className="text-lg font-medium text-white">to</span> 5,999{" "}
        <span className="text-sm text-white">points</span>
      </h2>
      <hr className="my-4 border-gray-300" />
      <ul className="space-y-3 text-white text-lg text-left">
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-sm mt-2" /> Earn points on every purchase.
        </li>
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-sm mt-2" /> Redeem points at 70+ brands.
        </li>
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[16px] mt-2" /> Unlock premium exclusives with your points.
        </li>
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[16px] mt-2" /> Access member-only offers on the RewardClub app.
        </li>
      </ul>
    </div>
  </div>

  {/* Card 2 */}
  <div className="w-[600px] sm:w-[400px] p-6 bg-Green lg:mt-0 mt-10 rounded-[30px] shadow-lg border border-gray-200">
    <div className="relative w-full lg:mb-0 mb-20 flex justify-center">
      <div className="absolute -top-16 px-12 lg:px-20 py-6 bg-white rounded-full shadow-md border border-gray-300 text-3xl font-semibold text-Green">
        Silver
      </div>
    </div>
    <div className="mt-8 text-center">
      <h2 className="text-2xl  font-bold text-white">
        <hr className="my-4 border-gray-300" />
        6,000 <span className="text-lg font-medium text-white">to</span> 23,999{" "}
        <span className="text-sm text-white">points</span>
      </h2>
      <hr className="my-4 border-gray-300" />
      <ul className="space-y-3 text-white text-lg text-left">
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[20px] mt-2" /> Earn 1.5 times the points of Silver on every purchase.
        </li>
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[14px] mt-2" /> Redeem points at 70+ brands.
        </li>
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[16px] mt-2" /> Unlock premium exclusives with your points.
        </li>
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[16px] mt-2" /> Access member-only offers on the RewardClub app.
        </li>
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[16px] mt-2" /> Enjoy early access and special event invitations.
        </li>
      </ul>
    </div>
  </div>

  {/* Card 3 */}
  <div className="w-full sm:w-[400px] p-6 bg-Green lg:mt-0 mt-10 rounded-[30px] shadow-lg border border-gray-200">
    <div className="relative w-full lg:mb-0 mb-20  flex justify-center">
      <div className="absolute -top-16 px-12 lg:px-20 py-6 bg-white rounded-full shadow-md border border-gray-300 text-3xl font-semibold text-Green">
        Gold
      </div>
    </div>
    <div className="mt-8 text-center">
      <h2 className="text-2xl  font-bold text-white">
        <hr className="my-4  border-gray-300" />
        <span className="text-lg font-medium text-white">From </span>
        24,000{" "}
        <span className="text-sm text-white">points</span>
      </h2>
      <hr className="my-4 border-gray-300 " />
      <ul className="space-y-5 text-white text-lg text-left">
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[20px] mt-2" /> Earn double the points of Gold on every purchase.
        </li>
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[14px] mt-2" /> Redeem points at 70+ brands.
        </li>
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[18px] mt-2" /> Unlock limited edition exclusives with your points.
        </li>
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[16px] mt-2" /> Access personalised offers on the RewardClub app.
        </li>
        <li className="flex items-start gap-2">
          <FaDiamond className="text-white text-[16px] mt-2" /> Enjoy priority access and VIP event invitations.
        </li>
      </ul>
    </div>
  </div>
</div>

    <PointsCalculator />
    </div>
  );
};

export default AuraStarCard;
