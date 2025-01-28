import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true); // Navbar visibility state
  const [lastScrollY, setLastScrollY] = useState(0); // To track the previous scroll position

  // Function to handle scroll events
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // If scrolling down, hide the navbar
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } 
    // If scrolling up, show the navbar
    else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY); // Update the last scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-Green shadow-md py-4 px-6 flex flex-col md:flex-row justify-between items-start md:items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full z-50`} // Use translate-y for smooth hiding/showing
    >
      {/* Left Side: Logo */}
      <div className="text-xl font-bold text-white mb-4 md:mb-0">LOGO</div>

      {/* Center: Menu Items (Left-Aligned) */}
      <ul className="flex flex-col md:flex-row ml-20 md:flex-1 md:justify-start space-y-2 md:space-y-0 md:space-x-6 text-white font-medium">
        <li className="cursor-pointer hover:text-gray-900">Explore Tiers</li>
        <li className="cursor-pointer hover:text-gray-900">Discover Brands</li>
        <li className="cursor-pointer hover:text-gray-900">Unlock Rewards</li>
        <li className="cursor-pointer hover:text-gray-900">Get Support</li>
      </ul>

      {/* Right Side: Language Switch */}
      <div className="text-white font-medium mt-4 md:mt-0">English | عربی</div>
    </nav>
  );
};

export default Navbar;
