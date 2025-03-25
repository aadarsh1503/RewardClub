import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import LanguageToggle from "../../LanguageToggle";
import { useTranslation } from "react-i18next"; // Import useTranslation
import i22 from "./i22.png"; // Default LTR logo
import i24 from "./i24.png"; // RTL logo

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Access translation function and i18n instance
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

  // Determine the logo based on the language direction
  const logo = i18n.dir() === "rtl" ? i24 : i22;

  return (
    <nav
    className={`bg-Green shadow-md py-4 px-6 lg:flex hidden lg:flex-row justify-between items-start md:items-center transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    } fixed top-0 left-0 w-full z-50`}
  >
      {/* Left Side: Logo */}
      <a href="/" className="text-xl font-bold text-white mb-4 md:mb-0">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </a>

      {/* Center: Menu Items */}
      <ul className="flex flex-col md:flex-row ml-20 mr-20 md:flex-1 md:justify-start space-y-2 md:space-y-0 md:space-x-6 text-white font-medium">
        {[
          { href: "/tiers-benefits", label: t("Explore Tiers") },
          { href: "/brands", label: t("Discover Brands") },
          { href: "/offers-rewards", label: t("Unlock Rewards") },
          { href: "/contact-us", label: t("Get Support") },
        ].map((item, index) => (
          <li key={index} className="relative group">
            <a
              href={item.href}
              className={`cursor-pointer relative transition-all duration-300 ${
                location.pathname === item.href
                  ? "text-gray-400"
                  : "hover:text-gray-900"
              }`}
            >
              {item.label}
              <span className="absolute left-0 top-6 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      <div>
        <a href="https://rewardclub.space/login" target="_blank">
        <button className="px-4 py-2  rounded-md font-semibold outline cursor-pointer text-white outline-white hover:bg-white hover:text-black">
          {t("Login")}
        </button>
        </a>
        <a href="/member-register" target="_blank">
        <button className="px-4 py-2 mr-4 ml-4 rounded-md font-semibold outline cursor-pointer text-white outline-white hover:bg-white hover:text-black">
          {t("Signup")}
        </button>
        </a>
      </div>

      <div className="text-white relative z-120 cursor-pointer">
        {/* Right Side: Language Switch */}
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default Navbar;