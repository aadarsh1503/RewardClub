import React, { useState, useEffect, useRef, useMemo } from 'react';
import "../../App.css";
import ImageSlider from '../ImageSlider/ImageSlider';
import TierCard from '../TierCard/TierCard';
import MostLovedBrands from '../MostLovedBrands/MostLovedBrands';
import Slide from '../Slide/Slide';
import { useTranslation } from 'react-i18next';
import Faqactive from '../Faq/Faqactive';
import "./b.css"
import i1 from "./i1.webp"
import i2 from "./i2.webp"
import i3 from "./i3.webp"
import i4 from "./i4.png"

const LifestyleRewards = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');
  const [activeId, setActiveId] = useState(1);
  const [isPaused, setIsPaused] = useState(false); 
  const [isInView, setIsInView] = useState(false);
  
  // --- NEW STATE: To track if user is currently scrolling ---
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null); // Ref to store the timer ID

  const sectionRef = useRef(null);

  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const stats = useMemo(() => [
    { id: 1, val: "70+", label: t("brands"), img: i2, note: "ACTIVE SOON" },
    { id: 2, val: "5", label: t("countries"), img: i3, note: null },
    { id: 3, val: "3", label: t("tiers"), img: i1, note: null },
    { id: 4, val: "50", label: t("rewards"), img: i4, note: null },
  ], [t]); 

  // --- NEW LOGIC: Detect Scroll Start & Stop ---
  useEffect(() => {
    const handleScroll = () => {
      // 1. User started scrolling, pause animation immediately
      setIsScrolling(true);

      // 2. Clear the existing timer (if any) so we don't set it to false yet
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // 3. Set a timer. If no scroll events happen for 150ms, we assume scrolling stopped.
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // --- INTERSECTION OBSERVER ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // --- UPDATED INTERVAL LOGIC ---
  useEffect(() => {
    // PAUSE IF: 
    // 1. Mouse is hovering (isPaused)
    // 2. Section is NOT on screen (!isInView)
    // 3. User is actively Scrolling (isScrolling) -> NEW
    if (isPaused || !isInView || isScrolling) return;

    const interval = setInterval(() => {
      setActiveId((currentId) => {
        return currentId === stats.length ? 1 : currentId + 1;
      });
    }, 2000); 

    return () => clearInterval(interval);
  }, [isPaused, isInView, isScrolling, stats.length]); // Added isScrolling to dependency array

  return (
    <div className="bg-white overflow-hidden">
      <ImageSlider />

      <section ref={sectionRef} className="relative w-full lg:h-[600px] flex flex-col lg:flex-row font-roboto bg-gray-50">
        
        {/* LEFT PANEL */}
        <div className="lg:w-[35%] w-full relative z-20 flex flex-col justify-center px-8 md:px-16 py-16 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
           <div className="absolute top-8 left-8 text-9xl font-black text-gray-50 opacity-80 pointer-events-none select-none -z-10">
            01
          </div>

          <div className="space-y-8">
            <div className="w-16 h-1 bg-Green mb-8"></div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-black leading-[0.95] tracking-tighter">
              {t("discover_lifestyle").split(' ')[0]} <br/>
              <span className="text-Green">{t("discover_lifestyle").split(' ').slice(1).join(' ')}</span>
            </h2>
            
            <p className="text-gray-500 text-lg leading-relaxed font-light max-w-sm">
              {t("description")}
            </p>

            <a href='/offers-rewards' className="inline-block pt-4">
              <button className="relative px-8 py-3 overflow-hidden font-bold text-black border-2 border-black group rounded-lg">
                <span className="absolute top-0 left-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative group-hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm">
                  {t("unlock_rewards")}
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div 
          className="lg:w-[65%] w-full h-[600px] lg:h-full flex flex-col lg:flex-row bg-gray-100"
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
          {stats.map((item) => (
            <div 
              key={item.id}
              onMouseEnter={() => setActiveId(item.id)}
              className={`
                relative h-full border-b lg:border-b-0 lg:border-l border-white/50 
                transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-crosshair group will-change-auto
                ${activeId === item.id ? 'flex-[3] bg-white' : 'flex-1 bg-gray-100 hover:bg-gray-50'}
              `}
              style={{ willChange: 'flex-grow' }} 
            >
              <img 
                src={item.img} 
                alt="bg" 
                className={`
                  absolute -bottom-20 -right-20 w-72 h-72 object-contain opacity-5 grayscale transition-transform duration-700
                  ${activeId === item.id ? 'rotate-0 scale-100' : 'rotate-45 scale-75'}
                `} 
              />

              <div className="absolute inset-0 flex flex-col p-8 lg:p-12 justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className={`
                     flex items-center justify-center rounded-full transition-all duration-500
                    ${activeId === item.id ? 'bg-Green text-white shadow-lg shadow-Green/30 w-32 h-32' : 'bg-gray-200 h-12 w-12 text-gray-400'}
                  `}>
                    <img src={item.img} className={` object-contain ${activeId === item.id ? 'brightness-0 invert w-24 h-24' : 'grayscale w-6 h-6 opacity-50'}`} alt="icon" />
                  </div>
                  
                  <div className={`w-2 h-2 rounded-full ${activeId === item.id ? 'bg-Green ' : 'bg-Green animate-pulse'}`}></div>
                </div>

                {activeId !== item.id && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                    <span className="block -rotate-90 text-gray-400 font-bold tracking-widest uppercase whitespace-nowrap text-xl">
                      {item.label}
                    </span>
                  </div>
                )}

                <div className={`transition-all duration-500 ${activeId === item.id ? 'opacity-100 translate-y-0' : 'opacity-100 lg:opacity-0 lg:translate-y-10'}`}>
                   {item.note && (
                    <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold tracking-wider text-Green border border-Green rounded uppercase blinking-text">
                      {item.note}
                    </span>
                  )}
                  <h3 className="text-6xl lg:text-8xl font-black text-black tracking-tighter">
                    {item.val}
                  </h3>
                  <p className={`text-xl text-gray-500 font-medium uppercase tracking-wide mt-2 ${activeId === item.id ? 'block' : 'lg:hidden'}`}>
                    {item.label}
                  </p>
                </div>
              </div>

              <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 bg-gradient-to-t from-white via-transparent to-transparent ${activeId === item.id ? 'opacity-0' : 'opacity-20'}`}></div>
            </div>
          ))}
        </div>
      </section>

      <Slide />
      <TierCard />
      <MostLovedBrands />
      <Faqactive />
    </div>
  );
};

export default LifestyleRewards;