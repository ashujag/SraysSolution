import { useState, useEffect } from 'react';
import ksreiImage from '../assets/ksrei_v1.jpg';
import sairamgroupImage from '../assets/sairamgroup_v1.png';
import backgroundImage from '../assets/6847119f22b5391772dbf625_684efaff0f6e64c09d96d807_freepik__animate-this-with-8k-loop__54302-poster-00001.jpg';

export default function ClientsShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clients = [
    {
      number: '01',
      name: 'KSR Educational Institutions',
      image: ksreiImage,
      color: 'blue'
    },
    {
      number: '02',
      name: 'Sairam Group of Institutions',
      image: sairamgroupImage,
      color: 'purple'
    }
  ];

  return (
    <div
      id="clients" 
      className="min-h-screen text-white overflow-hidden relative"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 lg:py-0">
        
        {/* Clients Header */}
        <div className="text-center mb-3 sm:mb-4">
          <h2
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              color: '#ff0000',
              animation: isVisible ? 'slideInDown 0.8s ease-out' : 'none',
              opacity: isVisible ? 1 : 0,
              textShadow: '0 4px 20px rgba(255, 0, 0, 0.3)'
            }}
          >
            Clients
          </h2>
        </div>

        {/* Subheader */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h3
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-widest text-blue-400"
            style={{
              animation: isVisible ? 'slideInUp 0.8s ease-out 0.2s both' : 'none'
            }}
          >
            hello! Let's Talk
          </h3>
        </div>

        {/* Desktop Layout - Central Section with 3D Cube and Cards */}
        <div className="hidden lg:flex relative w-full max-w-7xl h-screen items-center justify-center">
          
          {/* Floating 3D Cube */}
          <div
            className="absolute"
            style={{
              perspective: '1200px',
              animation: 'floatingJump 3s ease-in-out infinite',
              zIndex: 1
            }}
          >
            {/* Cube Container */}
            <img 
              src="https://cdn.prod.website-files.com/6847119f22b5391772dbf625/6847119f22b5391772dbf6bf_about%20box.webp" 
              loading="lazy" 
              alt="3D Cube" 
              className="success-main-image w-48 h-48 object-contain" 
              style={{ 
                transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', 
                transformStyle: 'preserve-3d', 
                willChange: 'transform' 
              }} 
            />
          </div>

          {/* Client 1 Card - Top Right */}
          <div
            className="absolute top-12 right-12 w-96"
            style={{
              animation: isVisible ? 'slideInRight 1s ease-out 0.4s both' : 'none',
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          >
            <div className="bg-white/95 backdrop-blur-md text-black p-8 rounded-2xl shadow-2xl border border-gray-200 client-card-hover-effect">
              <div className="mb-4">
                <span className="text-sm font-bold text-teal-600">Client 01</span>
              </div>
              <h3 className="text-2xl font-black tracking-wide mb-4">
                {clients[0].name}
              </h3>
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-gray-200">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('${ksreiImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Leading educational institution dedicated to delivering excellence in academics and digital transformation.
              </p>
            </div>
          </div>

          {/* Client 2 Card - Bottom Left */}
          <div
            className="absolute bottom-12 left-12 w-96"
            style={{
              animation: isVisible ? 'slideInLeft 1s ease-out 0.6s both' : 'none',
              transform: `translateY(${scrollY * 0.2}px)`
            }}
          >
            <div className="bg-white/95 backdrop-blur-md text-black p-8 rounded-2xl shadow-2xl border border-gray-200 client-card-hover-effect">
              <div className="mb-4">
                <span className="text-sm font-bold text-purple-600">Client 02</span>
              </div>
              <h3 className="text-2xl font-black tracking-wide mb-4">
                {clients[1].name}
              </h3>
              <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-gray-200">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url('${sairamgroupImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Premier educational group fostering innovation and excellence in higher education globally.
              </p>
            </div>
          </div>

          {/* Connecting Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.4 }}
          >
            <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
            <line x1="80%" y1="20%" x2="20%" y2="80%" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
          </svg>
        </div>

        {/* Mobile & Tablet Layout - Stacked Cards */}
        <div className="lg:hidden w-full max-w-2xl space-y-6 sm:space-y-8 pb-12">
          
          {/* Floating 3D Cube - Mobile */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div
              style={{
                perspective: '1200px',
                animation: 'floatingJumpMobile 3s ease-in-out infinite'
              }}
            >
              <img 
                src="https://cdn.prod.website-files.com/6847119f22b5391772dbf625/6847119f22b5391772dbf6bf_about%20box.webp" 
                loading="lazy" 
                alt="3D Cube" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain"
                style={{ 
                  transform: 'translate3d(0px, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', 
                  transformStyle: 'preserve-3d', 
                  willChange: 'transform' 
                }} 
              />
            </div>
          </div>

          {/* Client Cards - Mobile Stacked */}
          {clients.map((client, index) => (
            <div
              key={index}
              className="w-full"
              style={{
                animation: isVisible ? `slideInUp 1s ease-out ${0.4 + index * 0.2}s both` : 'none'
              }}
            >
              <div className="bg-white/95 backdrop-blur-md text-black p-5 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-200 client-card-hover-effect">
                <div className="mb-3 sm:mb-4">
                  <span className={`text-xs sm:text-sm font-bold ${index === 0 ? 'text-teal-600' : 'text-purple-600'}`}>
                    Client 0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black tracking-wide mb-3 sm:mb-4">
                  {client.name}
                </h3>
                <div className="w-full h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden mb-3 sm:mb-4 bg-gray-200">
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url('${client.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
                  {index === 0 
                    ? 'Leading educational institution dedicated to delivering excellence in academics and digital transformation.'
                    : 'Premier educational group fostering innovation and excellence in higher education globally.'
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-teal-500/10 to-transparent pointer-events-none z-0" />

      {/* Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        @keyframes floatingJump {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-80px);
          }
        }

        @keyframes floatingJumpMobile {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-40px);
          }
        }

        @keyframes rotateCube {
          from {
            transform: rotateX(20deg) rotateY(25deg) rotateZ(-5deg) rotateY(0deg);
          }
          to {
            transform: rotateX(20deg) rotateY(25deg) rotateZ(-5deg) rotateY(360deg);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .client-card-hover-effect {
          transition: transform 0.3s ease-in-out;
        }

        .client-card-hover-effect:hover {
          transform: scale(1.05);
        }

        /* Mobile optimizations */
        @media (max-width: 1024px) {
          .client-card-hover-effect:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}