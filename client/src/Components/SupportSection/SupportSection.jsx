import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const SupportSection = () => {
  const { t, i18n } = useTranslation(); // Initialize translation
  const [country, setCountry] = useState("Bahrain");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const supportInfo = {
    Bahrain: { phone: "+971 45284037", email: "support@rewardclub.net", address: t("bahrain_address"), flag: "https://flagcdn.com/w40/bh.png" },
    UAE: { phone: "+971 45284037", email: "support@rewardclub.net", address: t("uae_address"), flag: "https://flagcdn.com/w40/ae.png" },
    Oman: { phone: "+971 45284037", email: "support@rewardclub.net", address: t("oman_address"), flag: "https://flagcdn.com/w40/om.png" },
    Kuwait: { phone: "+971 45284037", email: "support@rewardclub.net", address: t("kuwait_address"), flag: "https://flagcdn.com/w40/kw.png" },
    Qatar: { phone: "+971 45284037", email: "support@rewardclub.net", address: t("qatar_address"), flag: "https://flagcdn.com/w40/qa.png" },
    KSA: { phone: "+971 45284037", email: "support@rewardclub.net", address: t("ksa_address"), flag: "https://flagcdn.com/w40/sa.png" }
  };

  return (
    <div className="flex flex-col items-center mt-20 text-center py-10 px-4 bg-white">
      <h2 className="text-3xl font-semibold text-Green">{t("support")}</h2>
      <p className="mt-2 text-gray-600 max-w-lg">
        {t("select_country")} {/* Translated message for selecting country */}
      </p>
      <h3 className="mt-6 font-semibold text-black">{t("support_in_your_country")}</h3>

      {/* Custom Dropdown */}
      <div className="mt-4 relative inline-block w-48">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-between w-full border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm cursor-pointer"
        >
          <div className="flex items-center">
            <img src={supportInfo[country].flag} alt={`${country} Flag`} className="w-5 h-5 mr-4" />
            <span className="mr-2">{t(country)}</span> {/* Dynamically change country names */}
          </div>
          <IoIosArrowDown className="text-gray-500" />
        </button>

        {/* Dropdown List */}
        {dropdownOpen && (
  <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
    {Object.keys(supportInfo).map((ctry) => (
      <div
        key={ctry}
        onClick={() => {
          setCountry(ctry);
          setDropdownOpen(false);
        }}
        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        <img src={supportInfo[ctry].flag} alt={`${ctry} Flag`} className="w-5 h-5  mr-6" />
        <span className="mr-4">{t(ctry)}</span> {/* Dynamically change country names based on the selected language */}
      </div>
    ))}
  </div>
)}

      </div>

      {/* Support Info Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <div className="w-72 h-32 bg-white rounded-[30px] p-4 shadow-md flex flex-col items-center justify-center border border-gray-200">
          <FaPhoneAlt className="text-5xl text-Green" />
          <hr className="w-56 border-t-2 border-gray-300 mt-4" />
          <p className="mt-2 font-bold text-lg" dir="ltr">
  {supportInfo[country].phone}
</p>

        </div>
        <div className="w-72 h-32 bg-white rounded-[30px] p-2 shadow-md flex flex-col items-center justify-center border border-gray-200">
          <MdEmail className="text-6xl text-Green" />
          <hr className="w-56 border-t-2 border-gray-300 mt-" />
          <p className="mt-2 font-bold text-lg">{supportInfo[country].email}</p>
        </div>
      </div>

      {/* Support Hours & Address */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700">
        <div>
          <h4 className="font-bold">{t("support_hours")}</h4>
          <p>09 am - 10 pm {t("sat")} - {t("thurs")}</p>
          <p>01 pm - 10 pm {t("fri")}</p>
        </div>
        <div>
          <h4 className="font-bold">{t("office_address")}</h4>
          <p>{supportInfo[country].address}</p>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
