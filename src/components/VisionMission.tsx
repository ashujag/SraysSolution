import React, { useEffect, useRef } from 'react';

const VisionMission: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  // const textRef = useRef<HTMLDivElement>(null);
  // const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       setIsVisible(true);
    //     }
    //   });
    // }, observerOptions);

    // if (sectionRef.current) {
    //   observer.observe(sectionRef.current);
    // }

    // return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="relative w-full py-10 px-8"
        style={{
          background:
            "linear-gradient(180deg, rgba(6, 78, 59, 0.8) 0%, rgba(5, 46, 38, 0.9) 50%, rgba(4, 28, 24, 1) 100%)",
        }}
      >
        {/* Decorative gradient blur at top */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-b from-white/10 to-transparent blur-2xl"></div> */}

        {/* Main Content */}
        {/* <div
          ref={textRef}
          className="relative z-10 max-w-6xl mx-auto text-center text-white py-16"
        >
          
          <div className="mb-16 overflow-hidden">
            <h2
              className={`text-5xl md:text-7xl font-black uppercase mb-6 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              <span className="bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
                VISION
              </span>
            </h2>

            <p
              className={`text-lg md:text-2xl leading-relaxed mb-8 transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              We wish to be the HR front-runners in setting up customized
              virtual HR & HRMS systems at a most viable price.
            </p>
          </div>

        
          <div className="flex items-center justify-center gap-4 my-12">
            <div
              className={`h-1 bg-gradient-to-r from-transparent to-lime-400 transition-all duration-1000 ease-out ${
                isVisible ? "w-32" : "w-0"
              }`}
            ></div>
            <span
              className={`text-lime-400 text-2xl transition-all duration-1000 ease-out delay-200 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              &
            </span>
            <div
              className={`h-1 bg-gradient-to-l from-transparent to-lime-400 transition-all duration-1000 ease-out ${
                isVisible ? "w-32" : "w-0"
              }`}
            ></div>
          </div>

          <div className="mb-12 overflow-hidden">
            <h2
              className={`text-5xl md:text-7xl font-black uppercase mb-6 transition-all duration-1000 ease-out delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              <span className="bg-gradient-to-r from-lime-300 to-lime-400 bg-clip-text text-transparent">
                MISSION
              </span>
            </h2>

            <p
              className={`text-lg md:text-2xl leading-relaxed transition-all duration-1000 ease-out delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              We aspire to innovate more and more state of the art solutions in
              the HR and technological domains in the years to come.
            </p>
          </div>

          {/* CTA Button */}
          {/* <button 
            className={`bg-lime-400 text-black px-12 py-4 rounded-full text-lg font-bold uppercase hover:bg-lime-300 transition-all duration-300 hover:scale-105 mt-8 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{ 
              fontFamily: "'Bebas Neue', sans-serif",
              transitionDelay: isVisible ? '0.8s' : '0s',
              letterSpacing: '0.05em'
            }}
          >
            LEARN MORE ABOUT US
          </button> 
        </div> */}

        {/* Scrolling Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of logos */}
            <div className="flex items-center gap-20 px-10">
              <div className="text-white text-4xl font-bold">Srays</div>
              <div
                className="text-white text-3xl font-bold"
                style={{ fontFamily: "cursive" }}
              >
                SRays Solutions
              </div>
              <div className="text-white text-4xl font-bold tracking-wider"></div>
              <div className="text-white text-2xl font-semibold flex items-center gap-2">
                <div className="w-8 h-8 border-2 border-white rounded"></div>
                <span>Srays Solution</span>
                <span className="text-xs">hr@srayssolutions.in</span>
              </div>
              <div className="text-white text-4xl font-bold">SRAYSSOLUTION</div>
              <div className="text-white text-3xl font-bold flex items-center gap-2">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
                <span>Srays</span>
              </div>
              <div className="text-white text-3xl font-bold flex items-center gap-2">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span>Srays</span>
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-20 px-10">
              <div className="text-white text-4xl font-bold">Srays</div>
              <div
                className="text-white text-3xl font-bold"
                style={{ fontFamily: "cursive" }}
              >
                Srayssolution
              </div>
              <div className="text-white text-4xl font-bold tracking-wider">
                SRAYS
              </div>
              <div className="text-white text-2xl font-semibold flex items-center gap-2">
                <div className="w-8 h-8 border-2 border-white rounded"></div>
                <span>Srayssolution</span>
                <span className="text-xs">hr@srayssolutions.in</span>
              </div>
              <div className="text-white text-4xl font-bold">SRAYS</div>
              <div className="text-white text-3xl font-bold flex items-center gap-2">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
                <span>Srays</span>
              </div>
              <div className="text-white text-3xl font-bold flex items-center gap-2">
                <div className="w-8 h-8">
                  <svg viewBox="0 0 24 24" fill="white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span>Srays</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default VisionMission;
