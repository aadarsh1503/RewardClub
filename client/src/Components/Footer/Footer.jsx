import { FaFacebookF, FaInstagram } from "react-icons/fa";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 md:px-20">
      <div className="max-w-7xl relative ml-9 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="md:col-span-2">
        <ul className="space-y-2 relative left-38 text-black font-medium">
  <li><a href="/">Explore Tiers</a></li>
  <li><a href="/">Discover Brands</a></li> 
  <li><a href="/">Unlock Rewards</a></li>
  <li><a href="/">Get Support</a></li>
  <li><a href="/">FAQs</a></li>
</ul>

        </div>
        <div className="relative right-10">
          <h3 className="font-semibold text-center">Customer Support</h3>
          <button className="border border-Green text-Green px-0 py-2 mt-2 rounded-[30px] w-full">
            Call 182-12-12
          </button>
          <p className="text-Green text-center mt-2">support@aura-mena.com</p>
        </div>
        
        <div className="relative left-30 ">
        <div className="mb-4">
          <h3 className="font-semibold ">Follow AURA</h3>
          <div className="flex space-x-3 mt-2">
            <FaFacebookF className="text-Green text-xl" />
            <FaInstagram className="text-Green text-xl" />
          </div>
        </div>
          <h3 className="font-semibold">Download App</h3>
          <div className="mt-2">
            <img
              src="https://d10mzz35brm2m8.cloudfront.net/App/ios-app-store_2023-e6cb1744-ade8-483d-9758-a6b706fce7b7.webp?h=40&la=en&w=120"
              alt="App Store"
              className="w-32"
            />
            <img
              src="https://d10mzz35brm2m8.cloudfront.net/App/aos-google-play_2024-aeacdea9-aa97-44da-99e3-9e3142cc17f4.webp?h=40&la=en&w=135"
              alt="Google Play"
              className="w-32 mt-2"
            />
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm text-center md:text-left">
        <p>©2024 Copyright M.H. Alshaya Co. W.L.L.</p>
        <div className="flex space-x-4">
          <a href="/terms-conditions">Terms & Conditions</a>
          <a href="/privacy-statement">Privacy Policy</a>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
