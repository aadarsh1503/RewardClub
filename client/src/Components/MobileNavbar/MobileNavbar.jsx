import React, { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { Helmet } from "react-helmet";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md font-Poppins border-b-2  ">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Mobile Menu Button (Visible Only on Mobile) */}
      <button
        className="absolute top-2 right-4 z-50 bg-white  p-2 rounded-md text-Green outline-Green outline-2 shadow-md md:hidden  transition duration-300 ease-in-out"
        onClick={() => setIsOpen(true)}
      >
        ☰ {/* Hamburger Icon */}
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-Green text-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-40 flex flex-col p-6  `}
      >
        {/* Close Button */}
        <button
          className="self-end mb-4 text-white text-2xl bg-transparent hover:text-green-200 transition duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes /> {/* Cross Icon */}
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col space-y-6 text-xl ">
          <a
            href="/tiers-benefits"
            className="px-4 py-2 border-b-2 border-white hover:text-black text-white  hover:border-green-200 transition duration-300 ease-in-out"
          >
            Explore Tiers
          </a>
          <a
            href="/brands"
            className="px-4 py-2 border-b-2 border-white text-white hover:text-green-200 hover:border-green-200 transition duration-300 ease-in-out"
          >
            Discover Brands
          </a>
          <a
            href="/offers-rewards"
            className="px-4 py-2 border-b-2 border-white text-white hover:text-green-200 hover:border-green-200 transition duration-300 ease-in-out"
          >
            Unlock Rewards
          </a>
          <a
            href="/contact-us"
            className="px-4 py-2 border-b-2 border-white text-white hover:text-green-200 hover:border-green-200 transition duration-300 ease-in-out"
          >
            Get Support
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;