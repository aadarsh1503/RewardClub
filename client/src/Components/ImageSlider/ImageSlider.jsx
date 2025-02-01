import React from "react";
import Slider from "react-slick"; // Import react-slick
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme CSS
import './i.css'; // Import custom CSS file

const ImageSlider = () => {
  const images = [
    "https://www.aura-mena.com/sites/default/files/2024-10/Aura%20Mobile%20Desktop%20%281%29.jpg",
    "https://www.aura-mena.com/sites/default/files/2024-12/Hero%20Banner%20-%20Mockup%202%20-%20Desktop%20-%20En.png",
    "https://www.aura-mena.com/sites/default/files/2024-06/Hero-Banner-Mockup1-Desktop-En.png",
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
