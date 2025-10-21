import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && !animationComplete) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, animationComplete]);

  interface NumberRollerProps {
    digits: number[];
    suffix?: string;
    prefix?: string;
  }

  const NumberRoller: React.FC<NumberRollerProps> = ({ digits, suffix = '', prefix = '' }) => {
    return (
      <div className="flex items-baseline flex-shrink-0" style={{ fontFamily: 'Anton, sans-serif', fontSize: 'inherit' }}>
        {prefix && <span className="font-black text-[#2c3e50]">{prefix}</span>}
        {digits.map((digit, index) => (
          <div key={index} className="relative inline-block overflow-hidden" style={{ width: '0.6em', height: '1.1em', verticalAlign: 'baseline' }}>
            <div
              className="absolute top-0 left-0 w-full transition-transform ease-out"
              style={{
                transform: animationComplete ? `translateY(-${digit * 10}%)` : 'translateY(0%)',
                transitionDuration: '2000ms'
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div 
                  key={num} 
                  className="font-black text-[#2c3e50] text-center"
                  style={{ 
                    height: '1.1em',
                    lineHeight: '1.1em',
                    fontSize: 'inherit'
                  }}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        ))}
        {suffix && <span className="font-black text-[#2c3e50]">{suffix}</span>}
      </div>
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sacramento&family=Anton&display=swap');
        
        .slide-up {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
          transform: translateY(50px);
        }
        
        .slide-up-delay-1 {
          animation-delay: 0.2s;
        }
        
        .slide-up-delay-2 {
          animation-delay: 0.4s;
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <div ref={sectionRef} className="min-h-screen bg-[#c8e868] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <div className="mb-2">
                <h2 
                  className={`text-6xl sm:text-7xl md:text-8xl text-[#ff4444] inline-block ${isVisible ? 'slide-up' : ''}`}
                  style={{ 
                    fontFamily: 'Sacramento, cursive',
                    fontWeight: 400
                  }}
                >
                  States
                </h2>
              </div>
              <h3 
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-tight mb-6 text-[#2c3e50] ${isVisible ? 'slide-up slide-up-delay-1' : ''}`}
                style={{ 
                  fontFamily: 'Anton, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.02em'
                }}
              >
                Our All Years<br />Of numbers
              </h3>
              <p className={`text-base sm:text-lg text-black max-w-md font-semibold ${isVisible ? 'slide-up slide-up-delay-2' : ''}`}>
                Workplace productivity relates to the amount of work that<br className="hidden sm:block" />
                certain period. a productivity work place
              </p>
            </div>

            {/* Right Side - Stats Cards */}
            <div className="flex flex-col gap-6">
              {/* Card 1 - 230+ */}
              <div className="bg-white rounded-[2rem] px-6 sm:px-8 py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-lg">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 flex-1">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    <NumberRoller digits={[2, 3, 0]} suffix="+" />
                  </div>
                  <span 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase leading-tight text-[#2c3e50]"
                    style={{ 
                      fontFamily: 'Anton, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.02em'
                    }}
                  >
                    Clients Across the world
                  </span>
                </div>
              </div>

              {/* Card 2 - $1.4B+ */}
              <div className="bg-white rounded-[2rem] px-6 sm:px-8 py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-lg">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop" 
                      alt="Revenue" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 flex-1">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl flex items-baseline" style={{ fontFamily: 'Anton, sans-serif' }}>
                    <span className="font-black text-[#2c3e50]">$</span>
                    <NumberRoller digits={[1]} />
                    <span className="font-black text-[#2c3e50]">.</span>
                    <NumberRoller digits={[4]} />
                    <span className="font-black text-[#2c3e50]">B+</span>
                  </div>
                  <span 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase leading-tight text-[#2c3e50]"
                    style={{ 
                      fontFamily: 'Anton, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.02em'
                    }}
                  >
                    Global Clientele
                  </span>
                </div>
              </div>

              {/* Card 3 - 856+ */}
              <div className="bg-white rounded-[2rem] px-6 sm:px-8 py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-lg">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop" 
                      alt="Network" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 flex-1">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    <NumberRoller digits={[8, 5, 6]} suffix="+" />
                  </div>
                  <span 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase leading-tight text-[#2c3e50]"
                    style={{ 
                      fontFamily: 'Anton, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.02em'
                    }}
                  >
                    Worldwide Client Network
                  </span>
                </div>
              </div>

              {/* Card 4 - 28% */}
              <div className="bg-white rounded-[2rem] px-6 sm:px-8 py-6 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-lg">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1552581234-26160f608093?w=200&h=200&fit=crop" 
                      alt="International" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 flex-1">
                  <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                    <NumberRoller digits={[2, 8]} suffix="%" />
                  </div>
                  <span 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase leading-tight text-[#2c3e50]"
                    style={{ 
                      fontFamily: 'Anton, sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.02em'
                    }}
                  >
                    International Client Base
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsSection;
