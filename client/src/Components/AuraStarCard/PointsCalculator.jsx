import React, { useState } from "react";

const countryRates = {
  Kuwait: { CLASSIC: 10, SILVER: 15, GOLD: 20, currency: "KWD", flag: "https://flagcdn.com/w40/kw.png" },
  Qatar: { CLASSIC: 1, SILVER: 1.5, GOLD: 2, currency: "QAR", flag: "https://flagcdn.com/w40/qa.png" },
  Bahrain: { CLASSIC: 10, SILVER: 15, GOLD: 20, currency: "BHD", flag: "https://flagcdn.com/w40/bh.png" },
  UAE: { CLASSIC: 1, SILVER: 1.5, GOLD: 2, currency: "AED", flag: "https://flagcdn.com/w40/ae.png" },
  KSA: { CLASSIC: 1, SILVER: 1.5, GOLD: 2, currency: "SAR", flag: "https://flagcdn.com/w40/sa.png" },
  Oman: { CLASSIC: 1, SILVER: 1.5, GOLD: 2, currency: "OMR", flag: "https://flagcdn.com/w40/om.png" }, // Added Oman
};


const PointsCalculator = () => {
  const [selectedCountry, setSelectedCountry] = useState("Bahrain");
  const [amount, setAmount] = useState("1");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const handleAmountChange = (e) => {
    let value = e.target.value;
    value = value.replace(/^0+/, ""); // Remove leading zeros

    if (value === "" || isNaN(value)) {
      setAmount("");
    } else {
      let numericValue = Math.max(1, Math.min(99999, Number(value)));
      setAmount(numericValue.toString());
    }
  };

  return (
    <div className="flex flex-col mt-20 p-4 items-center py-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900">
        <span className="text-Green">Points</span> Calculator
      </h2>
      <p className="text-gray-600 mt-2">
        Discover how your Aura points can get you more.
      </p>

      <div className="mt-6 w-80 p-4 lg:p-0 relative">
        <label className="block text-gray-700">Country</label>
        <div
          className="w-full p-2  border rounded-lg cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="flex  items-center">
            <img
              src={countryRates[selectedCountry].flag}
              alt={selectedCountry}
              className="inline-block w-6 h-4 mr-2"
            />
            <span>{selectedCountry}</span>
          </div>
        </div>
        {isDropdownOpen && (
          <div className="absolute w-full mt-2 bg-white shadow-lg rounded-lg z-10">
            {Object.keys(countryRates).map((country) => (
              <div
                key={country}
                className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleCountryChange(country)}
              >
                <img
                  src={countryRates[country].flag}
                  alt={country}
                  className="inline-block w-6 h-4 mr-2"
                />
                <span>{country}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 p-4 lg:p-0 w-80">
        <label className="block text-gray-700">Purchase Amount</label>
        <input
          type="number"
          min="1"
          max="99999"
          className="w-full p-2 border rounded-lg"
          value={amount}
          onChange={handleAmountChange}
        />
        <p className="text-xs text-gray-500">Minimum 1 and maximum 99999</p>
      </div>

      <div className="mt-6 p-4 lg:p-0 w-80">
        <h3 className="text-gray-700 mt-4">Your Earning Potential</h3>
        <div className="mt-3">
          {Object.entries(countryRates[selectedCountry])
            .filter(([tier]) => tier !== "currency" && tier !== "flag") // Exclude flag and currency from calculation
            .map(([tier, rate]) => (
              <div
                key={tier}
                className="flex justify-between items-center p-4 rounded-lg mt-2 text-white font-semibold shadow-md bg-Green"
              >
                <span>
                  {amount} {countryRates[selectedCountry].currency} ={" "}
                  <strong>{Math.floor(amount * rate)}</strong> Pts
                </span>
                <span className="uppercase">{tier}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PointsCalculator;
