import React from "react";
import Slider from "react-slick"; // Import react-slick
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick theme CSS
import "./i.css"; // Import custom CSS file
import i1 from "./i1.png";
import i2 from "./i2.png";
import i3 from "./i3.png";
import i5 from "./i5.png";
import g1 from "./g1.png";
import g2 from "./g2.png";
import g3 from "./g3.png";
import g5 from "./g5.jpeg";
import r1 from "./r1.png"
import r2 from "./r2.png"
import r3 from "./r3.png"
const ImageSlider = () => {
  const { i18n } = useTranslation(); // Access i18n instance
  const isRTL = i18n.dir() === "rtl"; // Check if current language is RTL

  const ltrImages = [r1, r2, r3, i5]; // LTR images
  const rtlImages = [g2, g3, g1, g5]; // RTL images

  const images = isRTL ? rtlImages : ltrImages;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    rtl: isRTL, // Enable RTL mode dynamically
    customPaging: (i) => <div className="custom-dot"></div>,
  };

  return (
    <div className="relative w-full h-[700px] lg:h-[80vh] mt-0 lg:mt-14 overflow-hidden top-0 z-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-[472px] lg:h-[500px] object-fill"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
