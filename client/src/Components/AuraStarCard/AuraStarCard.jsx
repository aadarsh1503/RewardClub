import { FaDiamond } from "react-icons/fa6";
import React from "react";
import PointsCalculator from "./PointsCalculator";

const AuraStarCard = () => {
  return (
    <div>
        <h1 className="text-Green lg:mt-44 mt-0 lg:text-4xl font-semibold ml-32">Explore Tiers</h1>
        <p className="lg:mb-24 mb-0 mt-5 text-lg ml-32">Earn points on every purchase and move up the tiers to unlock more benefits and receive personalized offers.</p>
    <div className="flex justify-center space-x-6 ">
      {/* Card 1 */}
      <div className="w-[400px]  p-6 h-[556px] bg-Green rounded-[30px]  shadow-lg border border-gray-200">
        <div className="relative w-full flex justify-center">
          <div className="absolute -top-16 px-20 py-6 bg-white rounded-full shadow-md border border-gray-300 text-3xl font-semibold text-Green">
            Aura Hello
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
              <FaDiamond className="text-white text-[16px] mt-2" /> Access member-only offers on the Aura app.
            </li>
           
          </ul>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full max-w-sm p-6 bg-Green rounded-[30px] shadow-lg border border-gray-200">
  <div className="relative w-full flex justify-center">
    <div className="absolute -top-16 px-20 py-6 bg-white rounded-full shadow-md border border-gray-300 text-3xl font-semibold text-Green">
      Aura Star
    </div>
  </div>
  <div className="mt-8 text-center">
    <h2 className="text-2xl font-bold text-white">
      <hr className="my-4 border-gray-300" />
      6,000 <span className="text-lg font-medium text-white">to</span> 23,999{" "}
      <span className="text-sm text-white">points</span>
    </h2>
    <hr className="my-4 border-gray-300" />
    <ul className="space-y-3 text-white text-lg text-left">
      <li className="flex items-start gap-2">
        <FaDiamond className="text-white text-[20px] mt-2" /> Earn 1.5 times the points of Aura Hello on every purchase.
      </li>
      <li className="flex items-start gap-2">
        <FaDiamond className="text-white text-[14px] mt-2" /> Redeem points at 70+ brands.
      </li>
      <li className="flex items-start gap-2">
        <FaDiamond className="text-white text-[16px] mt-2" /> Unlock premium exclusives with your points.
      </li>
      <li className="flex items-start gap-2">
        <FaDiamond className="text-white text-[16px] mt-2" /> Access member-only offers on the Aura app.
      </li>
      <li className="flex items-start gap-2">
        <FaDiamond className="text-white text-[16px] mt-2" /> Enjoy early access and special event invitations.
      </li>
    </ul>
  </div>
</div>


      {/* Card 3 */}
      <div className="w-full max-w-sm p-6 bg-Green rounded-[30px] shadow-lg border border-gray-200">
        <div className="relative w-full flex justify-center">
          <div className="absolute -top-16 px-20 py-6 bg-white rounded-full shadow-md border border-gray-300 text-3xl font-semibold text-Green">
            Aura VIP
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-white">
          <hr className="my-4 border-gray-300" />
            <span className="text-lg font-medium text-white">From </span> 
24,000
{" "}
            <span className="text-sm text-white">points</span>
          </h2>
          <hr className="my-4 border-gray-300 " />
          <ul className="space-y-5 text-white text-lg text-left">
            <li className="flex items-start gap-2">
              <FaDiamond className="text-white  text-[20px] mt-2" /> Earn double the points of Aura Hello on every purchase.
            </li>
            <li className="flex items-start gap-2">
              <FaDiamond className="text-white text-[14px] mt-2" /> Redeem points at 70+ brands.
            </li>
            <li className="flex items-start gap-2">
              <FaDiamond className="text-white text-[18px] mt-2" /> Unlock limited edition exclusives with your points.
            </li>
            <li className="flex items-start gap-2">
              <FaDiamond className="text-white text-[16px] mt-2" /> Access personalised offers on the Aura app.
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
