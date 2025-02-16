import React from "react";
import Slider from "react-slick"; // Import react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme CSS
import './i.css'; // Import custom CSS file
import i1 from "./i1.png"
import i2 from "./i2.png"
import i3 from "./i3.png"
import i5 from "./i5.png"
const ImageSlider = () => {
  const images = [
i1,
i2,
i3,
i5
  ];

  const settings = {
    dots: true,          // Show navigation dots
    infinite: true,      // Infinite loop
    speed: 500,          // Slide transition speed
    slidesToShow: 1,     // Show 1 slide at a time
    slidesToScroll: 1,   // Scroll 1 slide at a time
    autoplay: true,      // Enable autoplay
    autoplaySpeed: 4000, // Change every 4 seconds
    pauseOnHover: false,
    customPaging: (i) => (
      <div className="custom-dot"></div> // Custom dot style class
    ), // Custom dot style
  };

  return (
    <div className="relative w-full h-[700px] lg:h-[70vh] mt-14 overflow-hidden top-0 z-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-[572px] lg:h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
