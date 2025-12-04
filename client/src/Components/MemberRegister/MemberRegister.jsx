import React, { useEffect, useState } from "react";
import il from "./il.jpg";
import { useTranslation } from "react-i18next";
import { 
  FaUser, FaEnvelope, FaLock, FaCalendarAlt, FaVenusMars, FaPhone, 
  FaBuilding, FaRoad, FaGlobe, FaMapMarkerAlt, FaCity, FaHashtag, 
  FaUniversity, FaCreditCard, FaTags, FaCheck 
} from "react-icons/fa";
const MemberRegister = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const countryStateData = {
    Bahrain: {
      states: ["Capital Governorate", "Northern Governorate", "Muharraq Governorate","Southern Governorate"],
      cities: {
        "Capital Governorate": ["Manama", "Juffair", "Adliya"],
        "Muharraq Governorate": ["Muharraq", "Amwaj", "Arad"],
        "Northern Governorate": ["Muharraq", "Amwaj", "Arad"],
        "Southern Governorate": ["Muharraq", "Amwaj", "Arad"],
      },
    },
    Qatar: {
      states: ["Doha", "Al Rayyan", "Umm Salal"],
      cities: {
        Doha: ["West Bay", "Al Sadd", "Msheireb"],
        "Al Rayyan": ["Education City", "Al Wajba"],
        "Umm Salal": ["Umm Salal Ali", "Umm Salal Mohammed"],
      },
    },
    UAE: {
      states: ["Dubai", "Abu Dhabi", "Sharjah"],
      cities: {
        Dubai: ["Downtown", "JLT", "Deira"],
        "Abu Dhabi": ["Al Khalidiya", "Mussafah"],
        Sharjah: ["Al Nahda", "Muweilah"],
      },
    },
    Kuwait: {
      states: ["Al Asimah", "Hawalli", "Farwaniya"],
      cities: {
        "Al Asimah": ["Kuwait City", "Sharq"],
        Hawalli: ["Salmiya", "Jabriya"],
        Farwaniya: ["Khaitan", "Fintas"],
      },
    },
    Oman: {
      states: ["Muscat", "Dhofar", "Batinah"],
      cities: {
        Muscat: ["Muttrah", "Seeb", "Ruwi"],
        Dhofar: ["Salalah", "Mirbat"],
        Batinah: ["Sohar", "Barka"],
      },
    },
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setStates(countryStateData[country]?.states || []);
    setSelectedState(""); // Reset state selection
    setCities([]); // Reset cities
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(countryStateData[selectedCountry]?.cities[state] || []);
  };

  return (
    <div className=" font-sans ">
      <div className="min-h-screen flex items-center  justify-center">
        <div
          className="lg:max-w-4xl max-w-7xl w-full mx-auto p-6 -mt-4 bg-white bg-opacity-90 shadow-md rounded-md relative"
          style={{
            backgroundImage: `url(${il})`,
            backgroundSize: "auto",
            backgroundPosition: "top right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-center text-3xl font-bold mt-4 lg:mt-10 mb-8">
            {t("member_register")}
          </h2>
          <form className="space-y-8 animate-fade-in">

{/* --- SECTION 1: PERSONAL IDENTITY --- */}
<div className="space-y-4">
  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4">
    {t("personal_details")}
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {/* First Name */}
    <div className="relative group">
      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="text" placeholder={t("first_name")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>

    {/* Last Name */}
    <div className="relative group">
      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="text" placeholder={t("last_name")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>

    {/* Date of Birth */}
    <div className="relative group">
      <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input 
        type="date" 
        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all text-gray-500 rtl:pr-10 rtl:pl-4 appearance-none" 
      />
    </div>

    {/* Gender Selection (Styled as Cards) */}
    <div className="flex items-center gap-4">
      <label className="flex-1 cursor-pointer">
        <input type="radio" name="gender" className="peer sr-only" />
        <div className="flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100 peer-checked:bg-[#827127] peer-checked:text-white peer-checked:border-[#827127] transition-all">
           <FaVenusMars />
           <span className="text-sm font-semibold">{t("male")}</span>
        </div>
      </label>
      <label className="flex-1 cursor-pointer">
        <input type="radio" name="gender" className="peer sr-only" />
        <div className="flex items-center justify-center gap-2 p-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 hover:bg-gray-100 peer-checked:bg-[#827127] peer-checked:text-white peer-checked:border-[#827127] transition-all">
           <FaVenusMars />
           <span className="text-sm font-semibold">{t("female")}</span>
        </div>
      </label>
    </div>
  </div>
</div>

{/* --- SECTION 2: SECURITY & CONTACT --- */}
<div className="space-y-4">
  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4">
    {t("security_contact")}
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
     {/* Email */}
     <div className="relative group">
      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="email" placeholder={t("email")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>

    {/* Secondary Email */}
    <div className="relative group">
      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="email" placeholder={t("secondary_email")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>

    {/* Password */}
    <div className="relative group">
      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="password" placeholder={t("password")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>

    {/* Confirm Password */}
    <div className="relative group">
      <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="password" placeholder={t("confirm_password")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>

    {/* Primary Phone */}
    <div className="relative group">
      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="text" placeholder={t("primary_phone")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>

    {/* Secondary Phone */}
    <div className="relative group">
      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="text" placeholder={t("secondary_phone")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>
  </div>
</div>

{/* --- SECTION 3: ADDRESS --- */}
<div className="space-y-4">
  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4">
    {t("location_details")}
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {/* Country */}
    <div className="relative group">
      <FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all appearance-none cursor-pointer rtl:pr-10 rtl:pl-4" onChange={handleCountryChange}>
        <option value="">{t("select_country")}</option>
        {Object.keys(countryStateData).map((country) => (
          <option key={country} value={country}>{t(country)}</option>
        ))}
      </select>
    </div>

    {/* State */}
    <div className="relative group">
      <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <select
        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all appearance-none cursor-pointer rtl:pr-10 rtl:pl-4 ${!selectedCountry ? "opacity-50 cursor-not-allowed" : ""}`}
        onChange={handleStateChange}
        disabled={!selectedCountry}
      >
        <option value="">{t("select_state")}</option>
        {states.map((state) => (
          <option key={state} value={state}>{t(state)}</option>
        ))}
      </select>
    </div>

    {/* City */}
    <div className="relative group">
      <FaCity className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <select
        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all appearance-none cursor-pointer rtl:pr-10 rtl:pl-4 ${!selectedState ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={!selectedState}
      >
        <option value="">{t("select_city")}</option>
        {cities.map((city) => (
          <option key={city} value={city}>{t(city)}</option>
        ))}
      </select>
    </div>

    {/* Building No */}
    <div className="relative group">
      <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="text" placeholder={t("building_no")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>

    {/* Street Name */}
    <div className="relative group">
      <FaRoad className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="text" placeholder={t("street_name")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>

    {/* Postal Code */}
    <div className="relative group">
      <FaHashtag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="text" placeholder={t("postal_code")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>
  </div>
</div>

{/* --- SECTION 4: FINANCIAL & OTHER --- */}
<div className="space-y-4">
  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4">
    {t("financial_referral")}
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {/* Bank Name */}
    <div className="relative group">
      <FaUniversity className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="text" placeholder={t("bank_name")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>

    {/* Account Number */}
    <div className="relative group">
      <FaCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <input type="text" placeholder={t("account_number")} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all rtl:pr-10 rtl:pl-4" />
    </div>

    {/* Referral Type */}
    <div className="relative group md:col-span-2">
      <FaTags className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#827127] transition-colors rtl:right-4 rtl:left-auto" />
      <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#827127]/50 transition-all appearance-none cursor-pointer rtl:pr-10 rtl:pl-4">
        <option>{t("select_referral_type")}</option>
        <option>{t("test_referral")}</option>
        <option>{t("print_media")}</option>
        <option>{t("online_ads")}</option>
        <option>{t("social_media")}</option>
        <option>{t("friends")}</option>
      </select>
    </div>
  </div>
</div>

{/* --- SECTION 5: FOOTER & SUBMIT --- */}
<div className="pt-4 border-t border-gray-100">
  <label className="flex items-center space-x-3 cursor-pointer group rtl:space-x-reverse mb-6">
    <div className="relative">
      <input type="checkbox" className="peer sr-only" onChange={() => setIsTermsAccepted(!isTermsAccepted)} />
      <div className="w-6 h-6 border-2 border-gray-300 rounded-md peer-checked:bg-[#827127] peer-checked:border-[#827127] transition-all"></div>
      <FaCheck className="absolute top-1 left-1 text-white opacity-0 peer-checked:opacity-100 text-xs transition-opacity" />
    </div>
    <p className="text-sm text-gray-500 group-hover:text-gray-800 transition-colors select-none">
      {t("terms_and_conditions")}
    </p>
  </label>

  <button
  type="submit"
  disabled={!isTermsAccepted}
  className={`
    relative w-full py-4 px-6 rounded-xl group overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
    ${isTermsAccepted 
      ? "cursor-pointer shadow-[0_10px_40px_-10px_rgba(130,113,39,0.5)] transform hover:scale-[1.02]" 
      : "cursor-not-allowed opacity-60 bg-gray-200"
    }
  `}
>
  {/* --- LAYER 1: THE CORE BACKGROUND --- */}
  {/* This transitions from Gray Stone to Liquid Gold Gradient */}
  <div className={`absolute inset-0 transition-all duration-500 ${isTermsAccepted ? "opacity-100" : "opacity-0"}`}>
    <div className="absolute inset-0 bg-gradient-to-r from-[#827127] via-[#9e8b36] to-[#827127]"></div>
    
    {/* Animated Pulse Ring behind (Glowing Aura) */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[500%] bg-white/10 rotate-45 group-hover:rotate-90 transition-transform duration-700 blur-xl"></div>
  </div>

  {/* --- LAYER 2: THE "LASER SHEEN" (High Speed Swipe) --- */}
  {isTermsAccepted && (
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-700 ease-in-out group-hover:left-[200%]"></div>
    </div>
  )}

  {/* --- LAYER 3: TECHNICAL BRACKETS (The Futuristic HUD feel) --- */}
  {/* Left Bracket */}
  <div className={`absolute top-1/2 left-6 -translate-y-1/2 h-1/2 w-[2px] bg-white/50 transition-all duration-500 ${isTermsAccepted ? "group-hover:h-3/4 group-hover:left-8 group-hover:bg-white" : "opacity-0"}`}></div>
  <div className={`absolute top-1/2 left-6 -translate-y-1/2 h-[2px] w-0 bg-white/50 transition-all duration-500 ${isTermsAccepted ? "group-hover:w-3 group-hover:left-8" : "opacity-0"}`}></div>

  {/* Right Bracket */}
  <div className={`absolute top-1/2 right-6 -translate-y-1/2 h-1/2 w-[2px] bg-white/50 transition-all duration-500 ${isTermsAccepted ? "group-hover:h-3/4 group-hover:right-8 group-hover:bg-white" : "opacity-0"}`}></div>
  <div className={`absolute top-1/2 right-6 -translate-y-1/2 h-[2px] w-0 bg-white/50 transition-all duration-500 ${isTermsAccepted ? "group-hover:w-3 group-hover:right-8" : "opacity-0"}`}></div>


  {/* --- LAYER 4: TEXT CONTENT --- */}
  <span className="relative z-10 flex items-center justify-center gap-3">
    
    {/* Text Label */}
    <span 
      className={`
        font-black uppercase tracking-[0.2em] text-sm transition-all duration-500
        ${isTermsAccepted 
          ? "text-white group-hover:tracking-[0.35em] drop-shadow-md" 
          : "text-gray-400 tracking-widest"
        }
      `}
    >
      {t("register")}
    </span>

    {/* Status Indicator Dot */}
    {isTermsAccepted && (
      <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white] animate-pulse"></span>
    )}
  </span>

</button>
</div>

</form>
        </div>
      </div>
 
    </div>
  );
};

export default MemberRegister;
