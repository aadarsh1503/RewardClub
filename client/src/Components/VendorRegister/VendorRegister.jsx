import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import il from "./il.jpg";
import { FaTrash, FaTag, FaFileSignature, FaMoneyBillWave, FaPercent, FaToggleOn } from "react-icons/fa";
const VendorRegister = () => {
  const { t, i18n } = useTranslation();
  
  // RTL Logic
  const isRTL = i18n.dir() === "rtl";
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  const [isChecked, setIsChecked] = useState(false);
  const [properties, setProperties] = useState([]);
  const [attachment, setAttachment] = useState(null);

  // Note: ideally these should be inside the properties object to be unique per row, 
  // but keeping your structure for now.
  const [pointValue, setPointValue] = useState("");
  const [pointValue1, setPointValue1] = useState("");

  const handleInputChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9.]/g, "");
    const parts = value.split(".");
    if (parts.length > 2) value = parts[0] + "." + parts[1];
    if (parts[0].length > 2) parts[0] = parts[0].slice(0, 2);
    if (parts[1]?.length > 2) parts[1] = parts[1].slice(0, 2);
    value = parts.join(".");
    setPointValue(value);
  };

  const handleInputChange1 = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9.]/g, "");
    const parts = value.split(".");
    if (parts.length > 2) value = parts[0] + "." + parts[1];
    if (parts[0].length > 2) parts[0] = parts[0].slice(0, 2);
    if (parts[1]?.length > 2) parts[1] = parts[1].slice(0, 2);
    value = parts.join(".");
    setPointValue1(value);
  };

  const handleAttachmentClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setAttachment(file);
  };

  const removeAttachment = () => {
    setAttachment(null);
  };

  const addProperty = () => {
    setProperties([...properties, { id: Date.now() }]);
  };

  const removeProperty = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (
    <div className="max-w-4xl -mt-4 rounded-md font-sans bg-white mx-auto">
      <div  className="w-full shadow-lg rounded-lg relative overflow-hidden">
        {/* Image Background */}
        <img
        dir="ltr"
          src={il}
          alt="Decorative"
          // Changed 'right-1' to 'end-1' for RTL support
          className="absolute end-1 w-[600px] h-full z-0 opacity-80 pointer-events-none"
        />

        <h2 className="text-3xl top-12 font-bold text-center mb-6 relative z-10">
          {t("vendor_register")}
        </h2>

        <div className="p-4">
          <div className="bg-yellow-300 top-8 p-4 text-center font-semibold mb-8 relative z-10">
            RETAIL00-8848
          </div>
        </div>

        {/* Basic Info Fields */}
        <div className="grid p-4 grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative z-10">
          <input type="text" placeholder={t("vendor_name")} className="p-3 border rounded-md" />
          <input type="text" placeholder={t("vendor_phone")} className="p-3 border rounded-md" />
          <input type="text" placeholder={t("company_name")} className="p-3 border rounded-md" />
          <input type="text" placeholder={t("company_reg_number")} className="p-3 border rounded-md" />
          <input type="email" placeholder={t("vendor_email")} className="p-3 border rounded-md" />
          <input type="text" placeholder={t("select_country")} className="p-3 border rounded-md" />
          <input type="text" placeholder={t("select_state")} className="p-3 border rounded-md" />
          <input type="text" placeholder={t("select_city")} className="p-3 border rounded-md" />
        </div>

        <div className="p-4">
          <textarea 
            placeholder={t("address")} 
            className="p-3 border rounded-md w-full mb-4 relative z-10"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6 p-4 relative z-10">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            onClick={handleAttachmentClick}
            className="bg-Green text-white cursor-pointer px-4 py-2 mr-4 rounded-md whitespace-nowrap"
          >
            {t("add_attachment")}
          </button>

          <button
            onClick={addProperty}
            className="bg-Green text-white cursor-pointer px-4 py-2 mr-4 rounded-md whitespace-nowrap"
          >
            {t("add_property")}
          </button>
        </div>

        {/* Attachment Display */}
        {attachment && (
          <div className="flex items-center relative z-10 bg-gray-100 p-3 rounded-md mb-4 mx-4">
            <p className="text-sm text-gray-600 flex-grow">{attachment.name}</p>
            <button
              onClick={removeAttachment}
              // Changed 'ml-4' to 'ms-4' (margin-start) for RTL support
              className="text-red-500 font-bold ms-4"
            >
              ✕
            </button>
          </div>
        )}

<div className="space-y-6 p-4">
  {properties.map((property, index) => (
    <div 
      key={property.id} 
      className="group relative flex flex-col md:flex-row bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#827127]/30 transition-all duration-300 overflow-hidden"
    >
      
      {/* LEFT SIDE: INPUT FORM GRID */}
      <div className="flex-1 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        
        {/* 1. Category */}
        <div className="lg:col-span-2 space-y-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider ml-1">{t("select_category")}</label>
            <div className="relative">
                <FaTag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 rtl:right-3 rtl:left-auto" />
                <input 
                  type="text" 
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border-0 rounded-lg text-sm font-medium text-gray-700 focus:bg-white focus:ring-2 focus:ring-[#827127] transition-all outline-none rtl:pr-9 rtl:pl-4"
                  placeholder={t("select_category")}
                />
            </div>
        </div>

        {/* 2. Property Name */}
        <div className="lg:col-span-2 space-y-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider ml-1">{t("property_name")}</label>
            <div className="relative">
                <FaFileSignature className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 rtl:right-3 rtl:left-auto" />
                <input 
                  type="text" 
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border-0 rounded-lg text-sm font-medium text-gray-700 focus:bg-white focus:ring-2 focus:ring-[#827127] transition-all outline-none rtl:pr-9 rtl:pl-4"
                  placeholder={t("property_name")}
                />
            </div>
        </div>

        {/* 3. Amount */}
        <div className="lg:col-span-1 space-y-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider ml-1">{t("property_amount")}</label>
            <div className="relative">
                <FaMoneyBillWave className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 rtl:right-3 rtl:left-auto" />
                <input 
                  type="text" 
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border-0 rounded-lg text-sm font-medium text-gray-700 focus:bg-white focus:ring-2 focus:ring-[#827127] transition-all outline-none rtl:pr-9 rtl:pl-4"
                  placeholder="0.00"
                />
            </div>
        </div>

        {/* 4. Status */}
        <div className="lg:col-span-1 space-y-1">
            <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider ml-1">{t("select_status")}</label>
            <div className="relative">
                <select className="w-full px-4 py-2.5 bg-gray-50 border-0 rounded-lg text-sm font-medium text-gray-700 focus:bg-white focus:ring-2 focus:ring-[#827127] transition-all outline-none appearance-none cursor-pointer">
                  <option value="" disabled selected>{t("select_status")}</option>
                  <option value="active">{t("active")}</option>
                  <option value="disable">{t("disable")}</option>
                </select>
                <FaToggleOn className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none rtl:left-3 rtl:right-auto" />
            </div>
        </div>

        {/* 5. Points Inputs (Full Row on Mobile, Split on Desktop) */}
        <div className="lg:col-span-3 space-y-1">
             <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider ml-1">{t("Point_A")} %</label>
             <div className="relative">
                <FaPercent className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-300 rtl:right-3 rtl:left-auto" />
                <input
                  type="text"
                  value={pointValue1}
                  onChange={handleInputChange1}
                  placeholder="00.00%"
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border-0 rounded-lg text-sm font-medium text-gray-700 focus:bg-white focus:ring-2 focus:ring-[#827127] transition-all outline-none text-center rtl:pr-9 rtl:pl-4"
                />
             </div>
        </div>

        <div className="lg:col-span-3 space-y-1">
             <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider ml-1">{t("Point_B")} %</label>
             <div className="relative">
                <FaPercent className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-300 rtl:right-3 rtl:left-auto" />
                <input
                  type="text"
                  value={pointValue}
                  onChange={handleInputChange}
                  placeholder="00.00%"
                  className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border-0 rounded-lg text-sm font-medium text-gray-700 focus:bg-white focus:ring-2 focus:ring-[#827127] transition-all outline-none text-center rtl:pr-9 rtl:pl-4"
                />
             </div>
        </div>

      </div>

      {/* RIGHT SIDE: SEPARATE ACTION SECTION */}
      {/* Displays a divider and a nice big delete button */}
      <div className="md:w-16 flex flex-col border-t md:border-t-0 md:border-l border-gray-100 rtl:border-r rtl:border-l-0">
        <button
          onClick={() => removeProperty(property.id)}
          className="flex-1 w-full flex items-center justify-center p-4 bg-gray-50 text-gray-400 hover:bg-red-50 cursor-pointer hover:text-red-500 transition-colors duration-200 group-hover:bg-red-500 group-hover:text-white"
          title={t("remove")}
        >
          <FaTrash className="text-lg transition-transform duration-200 group-hover:scale-110" />
        </button>
      </div>

    </div>
  ))}
</div>

        {/* Terms and Conditions */}
        <div className="flex items-start relative z-10 mb-6 p-4">
          <input
            type="checkbox"
            id="terms"
            // Changed 'mr-2' to 'me-2'
            className="mt-1 me-2"
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="terms" className="text-sm">
            {t("terms_vendor")}
          </label>
        </div>

        <div className="p-4">
          {/* Register Button */}
          <button
            className={`px-6 py-3 rounded-md relative z-10 w-full font-semibold transition-colors ${
              isChecked
                ? "bg-Green hover:bg-white hover:outline-Green outline cursor-pointer text-white hover:text-green-500"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }`}
            disabled={!isChecked}
          >
            {t("register")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;