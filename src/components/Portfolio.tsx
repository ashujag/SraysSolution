import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

// Import testimonial images from your local folder
import testimonial_01 from "../assets/Testimonials/01.jpg";
import testimonial_02 from "../assets/Testimonials/2.jpg";
import testimonial_03 from "../assets/Testimonials/3.jpg";
import testimonial_04 from "../assets/Testimonials/4.jpg";
import testimonial_05 from "../assets/Testimonials/5.jpg";
import testimonial_06 from "../assets/Testimonials/6.jpg";
import testimonial_07 from "../assets/Testimonials/7.jpg";
import testimonial_08 from "../assets/Testimonials/8.jpg";
import testimonial_09 from "../assets/Testimonials/9.jpg";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    { id: 1, image: testimonial_01 },
    { id: 2, image: testimonial_02 },
    { id: 3, image: testimonial_03 },
    { id: 4, image: testimonial_04 },
    { id: 5, image: testimonial_05 },
    { id: 6, image: testimonial_06 },
    { id: 7, image: testimonial_07 },
    { id: 8, image: testimonial_08 },
    { id: 9, image: testimonial_09 },
  ];

  useEffect(() => {
    if (!isPaused && !isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isPaused, isHovered, testimonials.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sacramento&family=Anton&display=swap');
        
        .perspective-container {
          perspective: 2000px;
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .card-3d:hover {
          transform: rotateY(2deg) rotateX(-2deg) scale(1.02);
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
        .shine-effect::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 70%
          );
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          transition: transform 0.8s;
        }
        
        .shine-effect:hover::after {
          transform: translateX(100%) translateY(100%) rotate(45deg);
        }
        
        .slide-in {
          animation: slideIn 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .progress-bar {
          position: relative;
          overflow: hidden;
        }
        
        .progress-bar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); width: 30%; }
          100% { transform: translateX(400%); width: 30%; }
        }
        
        .floating {
          animation: floating 3s ease-in-out infinite;
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
      
      <div
        id="portfolio"
        className="bg-white py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-4 slide-in">
            <h2 className="inline-block">
              <span 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#c8f346] inline-block floating"
                style={{ 
                  fontFamily: 'Anton, sans-serif',
                  fontWeight: 400
                }}
              >
                Endorsement
              </span>
            </h2>
            <h3 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase text-[#2c3e50] mt-1"
              style={{ 
                fontFamily: 'Anton, sans-serif',
                fontWeight: 400,
                letterSpacing: '0.02em'
              }}
            >
              of our Success
            </h3>
          </div>

          {/* Carousel Container */}
          <div className="perspective-container">
            <div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main Image Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-4 p-2 sm:p-3 md:p-4 lg:p-5 card-3d">
                <div className="overflow-hidden rounded-2xl shadow-2xl shine-effect relative">
                  {/* Image with Ken Burns effect */}
                  <div className="relative overflow-hidden" style={{ paddingBottom: '45%' }}>
                    <img
                      key={currentSlide}
                      src={testimonials[currentSlide].image}
                      alt={`testimonial-${currentSlide + 1}`}
                      className="absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-out transform hover:scale-110 slide-in"
                    />
                  </div>
                  
                  {/* Image Counter Overlay */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full">
                    <span 
                      className="text-white text-base md:text-lg font-bold"
                      style={{ fontFamily: 'Anton, sans-serif' }}
                    >
                      {String(currentSlide + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Controls Section */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Navigation Buttons */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevSlide}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <ChevronLeft
                      className="text-[#2c3e50] group-hover:text-[#ff4444] transition-colors"
                      size={32}
                    />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#2c3e50] hover:bg-[#ff4444] transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <ChevronRight
                      className="text-white transition-colors"
                      size={32}
                    />
                  </button>

                  <button
                    onClick={() => setIsPaused(!isPaused)}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {isPaused ? (
                      <Play className="text-[#2c3e50]" size={28} fill="currentColor" />
                    ) : (
                      <Pause className="text-[#2c3e50]" size={28} fill="currentColor" />
                    )}
                  </button>
                </div>

                {/* Progress Bars */}
                <div className="flex gap-3 flex-1 max-w-2xl">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className="flex-1 h-2 rounded-full overflow-hidden bg-white/50 cursor-pointer hover:bg-white/70 transition-all duration-300 progress-bar"
                    >
                      <div
                        className={`h-full bg-gradient-to-r from-[#2c3e50] to-[#ff4444] transition-all duration-500 ${
                          index === currentSlide ? "w-full" : "w-0"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Dots - Changed to White */}
              <div className="flex justify-center mt-8 md:hidden gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? "bg-white w-10 h-3 shadow-lg" 
                        : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;