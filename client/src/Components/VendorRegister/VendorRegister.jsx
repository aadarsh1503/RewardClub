import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import il from "./il.jpg";

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

        <div className="p-4">
          {/* Property Fields */}
          {properties.map((property) => (
            <div key={property.id} className="grid grid-cols-2 gap-4 mb-4 relative pt-6 md:pt-0">
              <input type="text" placeholder={t("select_category")} className="p-3 border rounded-md" />
              <input type="text" placeholder={t("property_name")} className="p-3 border rounded-md" />
              <input type="text" placeholder={t("property_amount")} className="p-3 border rounded-md" />
              <input
                type="text"
                value={pointValue1}
                onChange={handleInputChange1}
                placeholder="00.00%"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              />

              <input
                type="text"
                value={pointValue}
                onChange={handleInputChange}
                placeholder="00.00%"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              />
              <select className="p-3 border rounded-md">
                <option value="" disabled selected>{t("select_status")}</option>
                <option value="active">{t("active")}</option>
                <option value="disable">{t("disable")}</option>
              </select>
              
              <button
                onClick={() => removeProperty(property.id)}
                // Changed 'right-0' to 'end-0' so it flips to the left in Arabic
                className="text-Green cursor-pointer italic absolute end-0 -top-1 md:top-0 text-xs md:text-sm font-bold"
              >
                {t("remove")}
              </button>
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