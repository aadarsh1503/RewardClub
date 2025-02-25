import { FaFacebookF, FaInstagram } from "react-icons/fa";
import React from "react";
import { useTranslation } from "react-i18next";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-white text-black py-10 px-6 md:px-20">
      <div className="max-w-7xl relative ml-0 lg:ml-9 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="md:col-span-2">
          <ul className="space-y-2 relative left-0 lg:left-38 lg:right-[256px] text-black font-medium">
            <li><a href="/tiers-benefits">{t("exploreTiers")}</a></li>
            <li><a href="/brands">{t("discoverBrands")}</a></li>
            <li><a href="/offers-rewards">{t("unlockRewards")}</a></li>
            <li><a href="/contact-us">{t("getSupport")}</a></li>
          </ul>
        </div>

        <div className="relative right-0 lg:right-10">
          <h3 className="font-semibold text-center">{t("customerSupport")}</h3>
          <a href="tel:+97145284037">
  <button className="border border-Green text-Green px-0 py-2 mt-2 cursor-pointer rounded-[30px] w-full">
    {t("callSupport")}{" "}
    <span dir="ltr" style={{ unicodeBidi: "plaintext" }}>+971 45284037</span>
  </button>
</a>


          <p className="text-Green text-center mt-2">
            <a href="mailto:support@rewardclub.net">support@rewardclub.net</a>
          </p>
        </div>

        <div className="relative left-0 lg:left-30 lg:right-30">
        <div className="mb-4">
  <h3 className="font-semibold">{t("followUs")}</h3>
  <div className="flex space-x-3 mt-2">
    <a href="https://www.facebook.com/rewardclubloyalty" target="_blank" rel="noopener noreferrer">
      <FaFacebookF className="text-Green text-xl hover:text-black" />
    </a>
    <a href="https://www.instagram.com/reward_club_/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="text-Green text-xl hover:text-black" />
    </a>
    <a href="https://x.com/Reward_Club_" target="_blank" rel="noopener noreferrer">
      <FaXTwitter className="text-Green text-xl hover:text-black" />
    </a>
  </div>
</div>

          {/* <h3 className="font-semibold">{t("downloadApp")}</h3>
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
          </div> */}
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="flex flex-col md:flex-row justify-between text-gray-500 text-sm text-center md:text-left">
        <p>©2025 {t("copyright")}</p>
        <div className="flex lg:ml-0 ml-4 lg:mt-0 mt-2 space-x-4">
        <a href="/about-us">{t("About_us")}</a>
          <a href="/terms-conditions">{t("termsConditions")}</a>
          <a href="/privacy-statement">{t("privacyPolicy")}</a>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
