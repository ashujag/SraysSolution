// import React, { useEffect, useRef, useState } from 'react';
// import { Menu } from 'lucide-react';
// import logoheader from '../assets/logoheader.png'; // Import the logo image
// import heroBackgroundImage from '../assets/6847119f22b5391772dbf625_684efaff0f6e64c09d96d807_freepik__animate-this-with-8k-loop__54302-poster-00001.jpg';

// // Add Google Fonts
// const fontLink = document.createElement('link');
// fontLink.href = 'https://fonts.googleapis.com/css2?family=Sacramento&family=Anton&display=swap';
// fontLink.rel = 'stylesheet';
// document.head.appendChild(fontLink);

// const HeroSection: React.FC = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const subtitleRef = useRef<HTMLDivElement>(null);
//   const ctaRef = useRef<HTMLButtonElement>(null);
//   const welcomeRef = useRef<HTMLDivElement>(null);
//   const bgRef = useRef<HTMLDivElement>(null);
//   const sectionTwoRef = useRef<HTMLDivElement>(null);
//   const section2TextRef = useRef<HTMLDivElement>(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const [rotatingTextIndex, setRotatingTextIndex] = useState(0);
//   const rotatingTexts = ['HR Solutions', 'IT Services', 'Designing'];

//   const menuItems = [
//     { label: 'Home', href: '#home' },
//     { label: 'About', href: '#about' },
//     { label: 'Services', href: '#services' },
//     { label: 'Portfolio', href: '#portfolio' },
//     { label: 'Blog', href: '#blog' },
//     { label: 'Knowledge Spot', href: '#knowledgespot' },
//     { label: 'Clients', href: '#clients' },
//     { label: 'Contact', href: '#contact' },
    
//   ];

//   useEffect(() => {
//     // Hero section animations
//     const timeline = [
//       { element: bgRef.current, delay: 0 },
//       { element: welcomeRef.current, delay: 300 },
//       { element: subtitleRef.current, delay: 500 },
//       { element: titleRef.current, delay: 700 },
//       { element: ctaRef.current, delay: 1000 }
//     ];

//     timeline.forEach(({ element, delay }) => {
//       if (element) {
//         setTimeout(() => {
//           element.style.opacity = '1';
//           element.style.transform = 'translateY(0)';
//         }, delay);
//       }
//     });

//     // Section 2 scroll animation
//     const observerOptions = {
//       threshold: 0.2,
//       rootMargin: '0px'
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           if (section2TextRef.current) {
//             section2TextRef.current.style.opacity = '1';
//             section2TextRef.current.style.transform = 'translateY(0)';
//           }
//         }
//       });
//     }, observerOptions);

//     if (sectionTwoRef.current) {
//       observer.observe(sectionTwoRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const rotatingInterval = setInterval(() => {
//       setRotatingTextIndex((prev) => (prev + 1) % rotatingTexts.length);
//     }, 2000);
    
//     return () => clearInterval(rotatingInterval);
//   }, [rotatingTexts.length]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setIsMenuOpen(false);
//       }
//     };

//     if (isMenuOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//       return () => document.removeEventListener('mousedown', handleClickOutside);
//     }
//   }, [isMenuOpen]);

//   return (
//     <div id='home' className="w-full bg-black">
//       {/* Hero Section */}
//       <div
//         ref={heroRef}
//         className="relative w-full h-screen bg-black overflow-hidden"
//       >
//         {/* Video Background */}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//           style={{
//             backgroundImage: `url('${heroBackgroundImage}')`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <source
//             src="https://cdn.prod.website-files.com/6847119f22b5391772dbf625%2F684efaff0f6e64c09d96d807_freepik__animate-this-with-8k-loop__54302-transcode.mp4"
//             type="video/mp4"
//           />
//           <source
//             src="https://cdn.prod.website-files.com/6847119f22b5391772dbf625%2F684efaff0f6e64c09d96d807_freepik__animate-this-with-8k-loop__54302-transcode.webm"
//             type="video/webm"
//           />
//         </video>

//         {/* Animated Overlay */}
//         <div
//           ref={bgRef}
//           className="absolute inset-0 transition-all duration-1000 ease-out"
//           style={{
//             opacity: 0,
//             background:
//               "radial-gradient(ellipse at 50% 60%, rgba(16, 185, 129, 0.3) 0%, rgba(6, 78, 59, 0.2) 30%, rgba(0, 0, 0, 0.6) 70%)",
//           }}
//         >
//           <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
//           <div
//             className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl"
//             style={{ animationDelay: "1s" }}
//           ></div>
//         </div>

//         {/* Yellow circle decoration */}
//         <div
//           className="absolute bottom-32 right-40 w-16 h-16 bg-lime-400 rounded-full z-10 animate-bounce"
//           style={{ animationDuration: "3s" }}
//         ></div>

//         {/* Navigation */}
//         <nav className="relative z-20 flex items-center justify-between px-8 py-6 text-white">
//           <div className="flex items-center">
//             <img src={logoheader} alt="GREEKON Logo" className="h-10" />{" "}
//             {/* Adjust height as needed */}
//           </div>

//           <div className="flex items-center gap-8 text-sm">
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
//               <span>TORONTO, CANADA</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
//               <span>HELLO@srayssolutions.com</span>
//             </div>
//           </div>

//           {/* Bubble Menu */}
//           <div ref={menuRef} className="relative">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="w-12 h-12 bg-lime-400 text-black rounded-full flex items-center justify-center hover:bg-lime-300 transition-all duration-300 hover:scale-110"
//             >
//               <Menu size={24} />
//             </button>

//             {/* Menu Dropdown */}
//             {isMenuOpen && (
//               <div className="absolute top-16 right-0 bg-black/95 backdrop-blur-md rounded-3xl p-6 min-w-max border border-lime-400/30 shadow-2xl z-50">
//                 <div className="grid grid-cols-2 gap-4">
//                   {menuItems.map((item, index) => (
//                     <a
//                       key={index}
//                       // href={item.href}
//                       onClick={() => {
//                         setIsMenuOpen(false);
//                         const target = document.querySelector(item.href);
//                         if (target) {
//                           target.scrollIntoView({ behavior: "smooth" });
//                         }
//                       }}
//                       className="px-4 py-2 text-white hover:text-lime-400 transition-colors duration-200 text-sm uppercase tracking-wider hover:bg-lime-400/10 rounded-lg"
//                     >
//                       {item.label}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Hero Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-8 -mt-20">
//           <div
//             ref={welcomeRef}
//             className="text-left w-full max-w-6xl mb-8 transition-all duration-700 ease-out"
//             style={{ opacity: 0, transform: "translateY(20px)" }}
//           >
//             {/* <div className="text-sm uppercase tracking-wider">
//               <div>- WELCOME TO</div>
//               <div className="mt-1">GREEKON, WHERE</div>
//               <div className="mt-1">TOO CREATIVITY.</div>
//             </div> */}
//           </div>

//           <div className="text-center max-w-5xl">
//             <div
//               ref={subtitleRef}
//               className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 transition-all duration-700 ease-out"
//               style={{
//                 opacity: 0,
//                 transform: "translateY(30px)",
//                 fontFamily: "Sacramento, cursive",
//               }}
//             >
//               <span className="text-lime-300">
//                 Design an optimal business model to reach Your{" "}
//                 <span
//                   className="inline-block transition-all duration-500 ease-in-out"
//                   key={rotatingTextIndex}
//                   style={{
//                     animation: "fadeSlideIn 0.5s ease-in-out",
//                   }}
//                 >
//                   {rotatingTexts[rotatingTextIndex]}
//                 </span>
//               </span>
//             </div>

//             <h1
//               ref={titleRef}
//               className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-8 transition-all duration-1000 ease-out"
//               style={{
//                 opacity: 0,
//                 transform: "translateY(40px)",
//                 letterSpacing: "-0.02em",
//                 fontFamily: "Anton, sans-serif",
//               }}
//             >
//               The process of business model construction and modification is
//               also called business model innovation.
//             </h1>

//             <button
//               ref={ctaRef}
//               className="bg-lime-400 text-black px-12 py-4 rounded-full text-lg font-bold uppercase hover:bg-lime-300 transition-all duration-300 hover:scale-105"
//               style={{
//                 opacity: 0,
//                 transform: "translateY(20px)",
//                 fontFamily: "Anton, sans-serif",
//               }}
//             >
//               Learn More
//             </button>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-32">
//           <svg
//             viewBox="0 0 1200 100"
//             className="w-full h-full"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M0,50 Q300,80 600,50 T1200,50 L1200,100 L0,100 Z"
//               fill="rgba(16, 185, 129, 0.1)"
//             />
//           </svg>
//         </div>
//       </div>

//       <style>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         @keyframes fadeSlideIn {
//           0% {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }

//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useEffect, useRef, useState, type UIEvent, type ReactNode, type MouseEventHandler } from 'react';
import { Menu, X } from 'lucide-react';
import logoheader from '../assets/logoheader.png';
import heroBackgroundImage from '../assets/6847119f22b5391772dbf625_684efaff0f6e64c09d96d807_freepik__animate-this-with-8k-loop__54302-poster-00001.jpg';

// Animated Item Component
interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`cursor-pointer transition-all duration-300 ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-75'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Animated Menu List Component
interface AnimatedMenuListProps {
  items: string[];
  onItemSelect: (item: string, index: number) => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

const AnimatedMenuList: React.FC<AnimatedMenuListProps> = ({
  items,
  onItemSelect,
  selectedIndex,
  setSelectedIndex
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target as HTMLDivElement;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  };

  return (
    <div className="relative w-56 md:w-72">
      <style>{`
        @keyframes menuSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .menu-list-animate {
          animation: menuSlideIn 0.3s ease-out forwards;
        }
      `}</style>

      <div
        ref={listRef}
        className="max-h-96 overflow-y-auto p-3 md:p-4 menu-list-animate [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-black/50 [&::-webkit-scrollbar-thumb]:bg-lime-400/50 [&::-webkit-scrollbar-thumb]:rounded-[4px]"
        onScroll={handleScroll}
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#a3e635 rgba(0,0,0,0.5)'
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="mb-2 md:mb-3">
            <AnimatedItem
              delay={index * 50}
              index={index}
              onMouseEnter={() => setSelectedIndex(index)}
              onClick={() => {
                setSelectedIndex(index);
                onItemSelect(item, index);
              }}
            >
              <div
                className={`p-2 md:p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                  selectedIndex === index
                    ? 'bg-lime-400 text-black shadow-lg shadow-lime-400/50'
                    : 'bg-black/60 text-white hover:bg-black/80'
                }`}
              >
                <p className="text-xs md:text-sm font-bold uppercase tracking-wider m-0" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {item}
                </p>
              </div>
            </AnimatedItem>
          </div>
        ))}
      </div>
      
      {/* Top Gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-black to-transparent pointer-events-none transition-opacity duration-300"
        style={{ opacity: topGradientOpacity }}
      ></div>
      
      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black to-transparent pointer-events-none transition-opacity duration-300"
        style={{ opacity: bottomGradientOpacity }}
      ></div>
    </div>
  );
};

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Sacramento&family=Anton&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const section2TextRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [rotatingTextIndex, setRotatingTextIndex] = useState(0);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState<number>(-1);
  
  const rotatingTexts = [
    { text: 'HR Solutions', color: 'text-cyan-400' },
    { text: 'IT Services', color: 'text-purple-400' },
    { text: 'Designing', color: 'text-pink-400' }
  ];

  const menuItems = [
    'HOME',
    'ABOUT',
    'SERVICE',
    'PORTFOLIO',
    'BLOG',
    'KNOWLEDGE SPOT',
    'CLIENTS',
    'CONTACT'
  ];

  useEffect(() => {
    // Hero section animations
    const timeline = [
      { element: bgRef.current, delay: 0 },
      { element: welcomeRef.current, delay: 300 },
      { element: subtitleRef.current, delay: 500 },
      { element: titleRef.current, delay: 700 },
      { element: ctaRef.current, delay: 1000 }
    ];

    timeline.forEach(({ element, delay }) => {
      if (element) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, delay);
      }
    });

    // Section 2 scroll animation
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (section2TextRef.current) {
            section2TextRef.current.style.opacity = '1';
            section2TextRef.current.style.transform = 'translateY(0)';
          }
        }
      });
    }, observerOptions);

    if (sectionTwoRef.current) {
      observer.observe(sectionTwoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const rotatingInterval = setInterval(() => {
      setRotatingTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);
    
    return () => clearInterval(rotatingInterval);
  }, [rotatingTexts.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  const handleMenuItemSelect = (item: string, index: number) => {
    setIsMenuOpen(false);
    setSelectedMenuIndex(index);

    // Map menu items to section ids
    const sectionMap: { [key: string]: string } = {
      HOME: "home",
      ABOUT: "about",
      SERVICE: "services",
      PORTFOLIO: "portfolio",
      BLOG: "blog",
      "KNOWLEDGE SPOT": "knowledgespot",
      CLIENTS: "clients",
      CONTACT: "contact",
    };

    const sectionId = sectionMap[item];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };


  return (
    <div id="home" className="w-full bg-black">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonScale {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        @keyframes buttonTap {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(0.95);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .menu-button {
          transition: all 0.3s duration;
        }

        .menu-button:hover {
          animation: buttonScale 0.3s ease-out forwards;
        }

        .menu-button:active {
          animation: buttonTap 0.1s ease-out forwards;
        }
      `}</style>

      {/* Fixed Animated Menu */}
      <div ref={menuRef} className="fixed top-4 md:top-6 right-4 md:right-6 z-50">
        {/* Menu List - Animated Dropdown */}
        {isMenuOpen && (
          <div className="mb-4">
            <AnimatedMenuList
              items={menuItems}
              onItemSelect={handleMenuItemSelect}
              selectedIndex={selectedMenuIndex}
              setSelectedIndex={setSelectedMenuIndex}
            />
          </div>
        )}

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-button w-10 h-10 md:w-12 md:h-12 bg-lime-400 text-black rounded-full flex items-center justify-center hover:bg-lime-300 transition-all duration-300 shadow-lg flex-shrink-0"
        >
          {isMenuOpen ? <X size={20} className="md:w-6 md:h-6" /> : <Menu size={20} className="md:w-6 md:h-6" />}
        </button>
      </div>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full min-h-screen md:h-screen bg-black overflow-hidden flex flex-col justify-center"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            backgroundImage: `url('${heroBackgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <source
            src="https://cdn.prod.website-files.com/6847119f22b5391772dbf625%2F684efaff0f6e64c09d96d807_freepik__animate-this-with-8k-loop__54302-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/6847119f22b5391772dbf625%2F684efaff0f6e64c09d96d807_freepik__animate-this-with-8k-loop__54302-transcode.webm"
            type="video/webm"
          />
        </video>

        {/* Animated Overlay */}
        <div
          ref={bgRef}
          className="absolute inset-0 transition-all duration-1000 ease-out"
          style={{
            opacity: 0,
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(16, 185, 129, 0.3) 0%, rgba(6, 78, 59, 0.2) 30%, rgba(0, 0, 0, 0.6) 70%)",
          }}
        >
          <div className="absolute top-1/2 left-1/4 w-32 md:w-96 h-32 md:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/4 w-32 md:w-80 h-32 md:h-80 bg-teal-600/10 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Yellow circle decoration - Hidden on mobile */}
        <div
          className="absolute bottom-32 right-20 md:right-40 w-12 md:w-16 h-12 md:h-16 bg-lime-400 rounded-full z-10 animate-bounce hidden sm:block"
          style={{ animationDuration: "3s" }}
        ></div>

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 text-white">
          <div className="flex items-center">
            <img src={logoheader} alt="Srays Logo" className="h-8 md:h-10" />
          </div>
        </nav>

        {/* Center Navigation Info - Responsive */}
        <div className="absolute inset-x-0 top-14 md:top-6 flex items-center justify-center z-15">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 text-xs md:text-sm text-white px-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full flex-shrink-0"></span>
              <span className="whitespace-nowrap">INDIA, HONGKONG</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-lime-400 rounded-full flex-shrink-0"></span>
              <span className="whitespace-nowrap">HELLO@srayssolutions.com</span>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-white px-4 md:px-8 py-16 md:-mt-20">
          <div
            ref={welcomeRef}
            className="text-left w-full max-w-6xl mb-6 md:mb-8 transition-all duration-700 ease-out"
            style={{ opacity: 0, transform: "translateY(20px)" }}
          ></div>

          <div className="text-center max-w-4xl md:max-w-5xl">
            <div
              ref={subtitleRef}
              className="text-xl md:text-2xl lg:text-4xl font-light mb-4 md:mb-6 transition-all duration-700 ease-out"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                fontFamily: "Sacramento, cursive",
              }}
            >
              <span className="text-lime-300 block md:inline">
                Design an optimal business model to <br /> reach Your{" "}
              </span>
              <span
                className={`inline-block transition-all duration-500 ease-in-out ${rotatingTexts[rotatingTextIndex].color}`}
                key={rotatingTextIndex}
                style={{
                  animation: "fadeSlideIn 0.5s ease-in-out",
                  fontFamily: "Sacramento, cursive",
                }}
              >
                {rotatingTexts[rotatingTextIndex].text}
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-2xl md:text-3xl lg:text-6xl font-black uppercase leading-tight mb-6 md:mb-8 transition-all duration-1000 ease-out px-2 md:px-0"
              style={{
                opacity: 0,
                transform: "translateY(40px)",
                letterSpacing: "-0.02em",
                fontFamily: "Anton, sans-serif",
              }}
            >
              The process of business model construction and modification is
              also called business model innovation.
            </h1>

            <button
              ref={ctaRef}
              onClick={() => {
                const homeSection = document.getElementById("home");
                if (homeSection) {
                  homeSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-lime-400 text-black px-8 md:px-12 py-3 md:py-4 rounded-full text-sm md:text-lg font-bold uppercase hover:bg-lime-300 transition-all duration-300 hover:scale-105"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                fontFamily: "Anton, sans-serif",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32">
          <svg
            viewBox="0 0 1200 100"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q300,80 600,50 T1200,50 L1200,100 L0,100 Z"
              fill="rgba(16, 185, 129, 0.1)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
