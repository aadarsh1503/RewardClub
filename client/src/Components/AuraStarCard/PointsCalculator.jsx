import React, { useState } from "react";

const countryRates = {
  Kuwait: { hello: 10, star: 15, vip: 20, currency: "KWD" },
  Qatar: { hello: 1, star: 1.5, vip: 2, currency: "QAR" },
  Bahrain: { hello: 10, star: 15, vip: 20, currency: "BHD" },
  UAE: { hello: 1, star: 1.5, vip: 2, currency: "AED" },
  KSA: { hello: 1, star: 1.5, vip: 2, currency: "SAR" },
};

const PointsCalculator = () => {
  const [selectedCountry, setSelectedCountry] = useState("Bahrain");
  const [amount, setAmount] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
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
    <div className="flex flex-col mt-20 items-center py-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900">
        <span className="text-Green">Points</span> Calculator
      </h2>
      <p className="text-gray-600 mt-2">
        Discover how your Aura points can get you more.
      </p>

      <div className="mt-6 w-80">
        <label className="block text-gray-700">Country</label>
        <select
          className="w-full p-2 border rounded-lg"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          {Object.keys(countryRates).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 w-80">
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

      <div className="mt-6 w-80">
        <h3 className="text-gray-700 mt-4">Your Earning Potential</h3>
        <div className="mt-3">
          {Object.entries(countryRates[selectedCountry]).map(([tier, rate]) =>
            tier !== "currency" ? (
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
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default PointsCalculator;
