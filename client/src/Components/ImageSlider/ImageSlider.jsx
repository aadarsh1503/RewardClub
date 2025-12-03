import React from "react";
import Slider from "react-slick"; 
import { useTranslation } from "react-i18next"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./i.css"; 

const ImageSlider = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const ltrVideos = [
    "https://www.pexels.com/download/video/3249674/"
  ]; 

  const rtlVideos = [
    "https://www.pexels.com/download/video/2675511/"
  ];

  const videos = isRTL ? rtlVideos : ltrVideos;
 
  const hasMultipleVideos = videos.length > 1;

  const settings = {
    dots: hasMultipleVideos,      
    infinite: hasMultipleVideos,  
    autoplay: hasMultipleVideos,  
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    rtl: isRTL,
    arrows: hasMultipleVideos,  
    customPaging: (i) => <div className="custom-dot"></div>,
  };

  return (
    <div className="relative w-full h-[700px] lg:h-[100vh] mt-0 lg:mt-14 overflow-hidden top-0 z-10">
      <Slider {...settings}>
        {videos.map((videoSrc, index) => (
          <div key={index} className="relative outline-none">
            
            {/* 1. The Video */}
            <video
              src={videoSrc}
              className="w-full h-[472px] lg:h-[700px] object-fill" 
              autoPlay
              loop
              muted
              playsInline
            />

            {/* 2. Dark Overlay Layer */}
            {/* 'bg-black/40' adds the black tint. Change to 30 or 50 to adjust intensity. */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#827127]/20 z-10 pointer-events-none"></div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;