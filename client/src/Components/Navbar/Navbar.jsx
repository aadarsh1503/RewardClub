import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation(); // Get current route

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-Green shadow-md py-4 px-6 flex flex-col md:flex-row justify-between items-start md:items-center transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full z-50`}
    >
      {/* Left Side: Logo */}
      <div className="text-xl font-bold text-white mb-4 md:mb-0">LOGO</div>

      {/* Center: Menu Items */}
      <ul className="flex flex-col md:flex-row ml-20 md:flex-1 md:justify-start space-y-2 md:space-y-0 md:space-x-6 text-white font-medium">
        {[
          { href: "/tiers-benefits", label: "Explore Tiers" },
          { href: "/brands", label: "Discover Brands" },
          { href: "/offers-rewards", label: "Unlock Rewards" },
          { href: "/contact-us", label: "Get Support" },
        ].map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.href}
              className={`cursor-pointer relative transition-all duration-300 ${
                location.pathname === item.href ? "text-gray-400" : "hover:text-gray-900"
              }`}
            >
              {item.label}
              <span className="absolute left-0 top-6 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Right Side: Language Switch */}
      <div className="text-white font-medium mt-4 md:mt-0">English | عربی</div>
    </nav>
  );
};

export default Navbar;
