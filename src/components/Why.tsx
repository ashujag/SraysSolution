import React, { useEffect, useRef, useState } from 'react';

const WhyUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyWrapRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const images = [
    { 
      id: 1, 
      src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=400&h=300&fit=crop',
      alt: 'Modern office setup',
      position: '_01'
    },
    { 
      id: 2, 
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      alt: 'Developer working',
      position: '_02'
    },
    { 
      id: 3, 
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
      alt: 'Team collaboration',
      position: '_03'
    },
    { 
      id: 4, 
      src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
      alt: 'Tech workspace',
      position: '_04'
    },
    { 
      id: 5, 
      src: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop',
      alt: 'Computer setup',
      position: '_05'
    },
    { 
      id: 6, 
      src: 'https://images.unsplash.com/photo-1593642532400-2682810df593?w=400&h=300&fit=crop',
      alt: 'Laptop coding',
      position: '_06'
    },
  ];

  const benefits = [
    'Best quality services',
    'Quality our DNA',
    'Cost effective customization',
    'Process driven approach',
    'Comprehensive technology',
    'Increasing the business through us'
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate progress only within the section
      const scrollStart = sectionTop;
      const scrollEnd = sectionTop + sectionHeight - windowHeight;
      const scrollDistance = scrollEnd - scrollStart;
      const currentScroll = scrollY - scrollStart;
      
      const progress = Math.max(0, Math.min(1, currentScroll / scrollDistance));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getImageStyle = (position: string) => {
    const centerX = 50;
    const centerY = 50;
    
    const positions: Record<string, { x: number; y: number; scale: number }> = {
      '_01': { x: 10, y: -15, scale: 1 },
      '_02': { x: 90, y: -12, scale: 1 },
      '_03': { x: 5, y: 35, scale: 1 },
      '_04': { x: 50, y: 85, scale: 1 },
      '_05': { x: 85, y: 80, scale: 1 },
      '_06': { x: 88, y: 30, scale: 1 }
    };

    const endPos = positions[position];
    
    const currentX = centerX + (endPos.x - centerX) * scrollProgress;
    const currentY = centerY + (endPos.y - centerY) * scrollProgress;
    const currentScale = 1 - (1 - endPos.scale) * scrollProgress;
    const opacity = Math.max(0.8, 1 - scrollProgress * 0.3);

    return {
      left: `${currentX}%`,
      top: `${currentY}%`,
      transform: `translate(-50%, -50%) scale(${currentScale})`,
      opacity
    };
  };

  const contentOpacity = scrollProgress < 0.3 ? 0 : Math.min(1, (scrollProgress - 0.3) / 0.5);

  return (
    <section 
      ref={sectionRef}
      className="vibe-section relative w-full"
      style={{ height: '300vh' }}
    >
      <div 
        ref={stickyWrapRef}
        className="sticky top-0 w-full h-screen overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(6, 78, 59, 0.95) 0%, rgba(5, 46, 38, 0.98) 50%, rgba(4, 28, 24, 1) 100%)'
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="cta-wrapper relative w-full h-full">
          <div className="container mx-auto h-full relative">
            <div 
              ref={contentRef}
              className="cta-contant-wrap absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20 max-w-4xl px-8 transition-opacity duration-700"
              style={{ opacity: contentOpacity }}
            >
              <div className="vibe-title mb-8">
                <div className="decor-title vibe mb-6">
                  <h2 
                    className="text-lime-400 text-5xl md:text-6xl font-bold italic"
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                  >
                    Why Us!
                  </h2>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="benefit-card bg-white/5 backdrop-blur-md rounded-lg p-4 md:p-6 border border-lime-400/20 transition-all duration-300 hover:border-lime-400 hover:bg-white/15 hover:shadow-lg hover:shadow-lime-400/30 cursor-pointer group"
                    style={{
                      animation: `slideIn 0.6s ease-out forwards`,
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <p 
                      className="text-white text-base md:text-lg font-bold uppercase tracking-wide transition-all duration-300 group-hover:text-lime-400"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="c-image-wrapper absolute inset-0">
              {images.map((image) => (
                <div
                  key={image.id}
                  className={`c-image-wrap ${image.position} absolute transition-all duration-500 ease-out`}
                  style={getImageStyle(image.position)}
                >
                  <img 
                    src={image.src}
                    loading="lazy"
                    alt={image.alt}
                    className="c-image w-48 h-36 object-cover rounded-2xl shadow-2xl"
                    style={{
                      border: '4px solid rgba(255, 255, 255, 0.1)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 w-full pointer-events-none" style={{ top: '100vh', zIndex: 30 }}>
        <div className="container mx-auto relative h-32">
          <img 
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=300&h=200&fit=crop"
            alt="Floating office"
            className="absolute top-0 left-12 w-32 h-24 object-cover rounded-xl shadow-xl floating-image"
            style={{ border: '3px solid rgba(255, 255, 255, 0.15)' }}
          />
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop"
            alt="Floating workspace"
            className="absolute top-8 right-16 w-36 h-28 object-cover rounded-xl shadow-xl floating-image"
            style={{ border: '3px solid rgba(255, 255, 255, 0.15)', animationDelay: '0.5s' }}
          />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Anton&display=swap');

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .floating-image {
          animation: float 4s ease-in-out infinite;
        }

        .c-image-wrap {
          will-change: transform, opacity;
        }

        .c-image-wrap._01 img {
          width: 200px;
          height: 150px;
        }

        .c-image-wrap._02 img {
          width: 180px;
          height: 140px;
        }

        .c-image-wrap._03 img {
          width: 220px;
          height: 160px;
        }

        .c-image-wrap._04 img {
          width: 190px;
          height: 145px;
        }

        .c-image-wrap._05 img {
          width: 186px;
          height: 138px;
        }

        .c-image-wrap._06 img {
          width: 195px;
          height: 148px;
        }

        .c-image:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        .benefit-card {
          transform-origin: center;
        }

        .benefit-card:hover {
          transform: scale(1.08);
        }

        .benefit-card p {
          animation: textPulse 0.6s ease-out forwards;
        }

        .benefit-card:hover p {
          animation: textGlow 0.4s ease-out forwards;
        }

        @keyframes textGlow {
          0% {
            text-shadow: 0 0 0px rgba(167, 243, 208, 0);
            letter-spacing: 0.05em;
          }
          100% {
            text-shadow: 0 0 10px rgba(167, 243, 208, 0.8), 0 0 20px rgba(167, 243, 208, 0.4);
            letter-spacing: 0.1em;
          }
        }

        @keyframes textPulse {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyUs;