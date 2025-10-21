// import React from 'react';

// interface ImageWrapProps {
//   src: string;
//   alt: string;
// }

// interface CreationSectionProps {}

// const ImageWrap: React.FC<ImageWrapProps> = ({ src, alt }) => (
//   <div className="flex-1 min-w-0 opacity-100 transform transition-all duration-300">
//     <img 
//       src={src} 
//       alt={alt}
//       loading="lazy"
//       className="w-full h-auto object-cover rounded-3xl"
//     />
//   </div>
// );

// const AboutUs: React.FC<CreationSectionProps> = () => {
//   const images = [
//     {
//       src: "https://cdn.prod.website-files.com/6847119f22b5391772dbf625/6847119f22b5391772dbf6b4_cration%20imge%201.webp",
//       alt: "Workspace productivity image 1"
//     },
//     {
//       src: "https://cdn.prod.website-files.com/6847119f22b5391772dbf625/6847119f22b5391772dbf6b3_cration%20imge%202.webp",
//       alt: "Workspace productivity image 2"
//     },
//     {
//       src: "https://cdn.prod.website-files.com/6847119f22b5391772dbf625/6847119f22b5391772dbf6b5_cration%20imge%203.webp",
//       alt: "Workspace productivity image 3"
//     }
//   ];

//   return (
//     <section id="about"className="py-16 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Text Content */}
//           <div className="flex flex-col justify-center">
//             <div className="space-y-0">
//               {/* Pacifico Font - About Us */}
//               <h2
//                 className="text-5xl md:text-6xl text-orange-500 mb-0 leading-none"
//                 style={{ fontFamily: 'Pacifico, cursive' }}
//               >
//                 About Us
//               </h2>

//               {/* Anton Font - Bold Headline - Touching closely to Pacifico */}
//               <h3
//                 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight uppercase mt-1"
//                 style={{ fontFamily: 'Anton, sans-serif' }}
//               >
//                 We are awesome team work for your business dream
//               </h3>

//               {/* Regular Content - Properly separated paragraphs */}
//               <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
//                 <p>
//                   "SRays" is an HR outsourcing firm incorporated by skilled and proficient wizards in the field of Human Resources aiming to Virtualize the HR Process. We have professionals who are actively exercising Human Resources practices in the Industry, by providing up-to-date sophisticated HR solutions and HRMS (Human Resource Management System) software, IT services to start ups, SMEs, Family Based businesses and Corporates.
//                 </p>

//                 <p>
//                   As a contribution towards Students community, we are conducting some HR Skill Development Programs for helping them to Up-Skill their knowledge towards the Industrial requirements. Also we conduct Technical Skill Development Programs for HR Professionals and Entrepreneurs.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Image Grid */}
//           <div className="flex flex-col gap-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <ImageWrap 
//                 src={images[0].src} 
//                 alt={images[0].alt}
//               />
//               <ImageWrap 
//                 src={images[1].src} 
//                 alt={images[1].alt}
//               />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div />
//               <ImageWrap 
//                 src={images[2].src} 
//                 alt={images[2].alt}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
import { useState } from 'react';
import { Monitor, Smartphone, Palette, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div id="about"
     className="bg-white p-2 md:p-4 min-h-[600px] relative overflow-hidden flex items-center justify-center" style={{ fontFamily: 'Anton, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        
        * {
          font-family: 'Anton', sans-serif;
        }
        
        @keyframes cardPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .card-hover {
          transition: all 0.3s ease-in-out;
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .highlight-glow {
          animation: cardPulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-cyan-400 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative w-full px-4 md:px-8">
        {/* Logo */}
        <div className="mb-4 md:mb-6 flex justify-center lg:justify-start">
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="md:w-8 md:h-8">
              <path d="M20 5C11.716 5 5 11.716 5 20C5 28.284 11.716 35 20 35" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round"/>
              <path d="M20 10C14.477 10 10 14.477 10 20C10 25.523 14.477 30 20 30" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="pt-2 md:pt-4 text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-3" style={{ fontFamily: 'Anton, sans-serif' }}>
              About Us
            </h1>
            <h2 className="text-lg md:text-xl font-bold text-blue-600 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
              We are awesome team work for your business dream
            </h2>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-3 text-justify" style={{ fontFamily: 'Anton, sans-serif' }}>
              "SRays" is an HR outsourcing firm incorporated by skilled and proficient wizards in the field of Human Resources aiming to Virtualize the HR Process. We have professionals who are actively exercising Human Resources practices in the Industry, by providing up-to-date sophisticated HR solutions and HRMS (Human Resource Management System) software, IT services to start ups, SMEs, Family Based businesses and Corporates.
            </p>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed text-justify" style={{ fontFamily: 'Anton, sans-serif' }}>
              As a contribution towards Students community, we are conducting some HR Skill Development Programs for helping them to Up-Skill their knowledge towards the Industrial requirements. Also we conduct Technical Skill Development Programs for HR Professionals and Entrepreneurs.
            </p>
          </div>

          {/* Right Content - Service Cards */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Card Stack - Desktop Layout */}
            <div className="hidden lg:block relative" style={{ height: '380px', width: '340px' }}>
              {/* Website Development Card - Blue - Top Left */}
              <div 
                className={`card-hover absolute bg-blue-600 text-white p-4 rounded-xl shadow-lg cursor-pointer ${
                  hoveredCard === 'website' ? 'highlight-glow' : ''
                }`}
                style={{ 
                  top: '0px', 
                  left: '0px', 
                  width: '160px', 
                  height: '90px',
                  zIndex: 4
                }}
                onMouseEnter={() => setHoveredCard('website')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <Monitor className="w-8 h-8 mb-1" />
                  <p className="text-xs font-bold text-center leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>Website Development</p>
                </div>
              </div>

              {/* Mobile App Development Card - Cyan - Top Right */}
              <div 
                className={`card-hover absolute bg-cyan-400 text-white p-4 rounded-xl shadow-lg cursor-pointer ${
                  hoveredCard === 'mobile' ? 'highlight-glow' : ''
                }`}
                style={{ 
                  top: '0px', 
                  left: '170px', 
                  width: '160px', 
                  height: '90px',
                  zIndex: 4
                }}
                onMouseEnter={() => setHoveredCard('mobile')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <Smartphone className="w-8 h-8 mb-1" />
                  <p className="text-xs font-bold text-center leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>Mobile App Development</p>
                </div>
              </div>

              {/* Management Card - White - Left Side Below */}
              <div 
                className={`card-hover absolute bg-white p-5 rounded-xl shadow-2xl border border-gray-100 cursor-pointer ${
                  hoveredCard === 'management' ? 'highlight-glow' : ''
                }`}
                style={{ 
                  top: '100px', 
                  left: '0px', 
                  width: '240px', 
                  height: '180px',
                  zIndex: 3
                }}
                onMouseEnter={() => setHoveredCard('management')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h2 className="text-6xl font-bold text-gray-900 mb-2 leading-none" style={{ fontFamily: 'Anton, sans-serif' }}>01.</h2>
                <h3 className="text-base font-bold text-blue-600 mb-1" style={{ fontFamily: 'Anton, sans-serif' }}>Management</h3>
                <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: 'Anton, sans-serif' }}>
                
                </p>
              </div>

              {/* Logo & Branding Card - Green - Right Side Middle */}
              <div 
                className={`card-hover absolute bg-emerald-500 text-white p-4 rounded-xl shadow-lg cursor-pointer ${
                  hoveredCard === 'logo' ? 'highlight-glow' : ''
                }`}
                style={{ 
                  top: '100px', 
                  left: '170px', 
                  width: '160px', 
                  height: '90px',
                  zIndex: 4
                }}
                onMouseEnter={() => setHoveredCard('logo')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <Palette className="w-8 h-8 mb-1" />
                  <p className="text-xs font-bold text-center leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>Logo & Branding</p>
                </div>
              </div>

              {/* Digital Strategy Card - Purple - Right Side Bottom */}
              <div 
                className={`card-hover absolute bg-purple-700 text-white p-4 rounded-xl shadow-lg cursor-pointer ${
                  hoveredCard === 'strategy' ? 'highlight-glow' : ''
                }`}
                style={{ 
                  top: '200px', 
                  left: '170px', 
                  width: '160px', 
                  height: '90px',
                  zIndex: 4
                }}
                onMouseEnter={() => setHoveredCard('strategy')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <TrendingUp className="w-8 h-8 mb-1" />
                  <p className="text-xs font-bold text-center leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>Digital Strategy</p>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Stacked Cards */}
            <div className="lg:hidden space-y-3 w-full max-w-md mx-auto">
              {/* Management Card */}
              <div 
                className={`card-hover bg-white p-5 rounded-lg shadow-xl border border-gray-100 cursor-pointer ${
                  hoveredCard === 'management' ? 'highlight-glow' : ''
                }`}
                onMouseEnter={() => setHoveredCard('management')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>01.</h2>
                <h3 className="text-base font-bold text-blue-600 mb-1" style={{ fontFamily: 'Anton, sans-serif' }}>Management</h3>
                <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: 'Anton, sans-serif' }}>
                  A wonderful serenity has taken possession of my entire
                </p>
              </div>

              {/* Website Development Card */}
              <div 
                className={`card-hover bg-blue-600 text-white p-5 rounded-lg shadow-lg cursor-pointer ${
                  hoveredCard === 'website' ? 'highlight-glow' : ''
                }`}
                onMouseEnter={() => setHoveredCard('website')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-3">
                  <Monitor className="w-7 h-7" />
                  <p className="text-sm font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>Website Development</p>
                </div>
              </div>

              {/* Mobile App Development Card */}
              <div 
                className={`card-hover bg-cyan-400 text-white p-5 rounded-lg shadow-lg cursor-pointer ${
                  hoveredCard === 'mobile' ? 'highlight-glow' : ''
                }`}
                onMouseEnter={() => setHoveredCard('mobile')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-3">
                  <Smartphone className="w-7 h-7" />
                  <p className="text-sm font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>Mobile App Development</p>
                </div>
              </div>

              {/* Logo & Branding Card */}
              <div 
                className={`card-hover bg-emerald-500 text-white p-5 rounded-lg shadow-lg cursor-pointer ${
                  hoveredCard === 'logo' ? 'highlight-glow' : ''
                }`}
                onMouseEnter={() => setHoveredCard('logo')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-3">
                  <Palette className="w-7 h-7" />
                  <p className="text-sm font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>Logo & Branding</p>
                </div>
              </div>

              {/* Digital Strategy Card */}
              <div 
                className={`card-hover bg-purple-700 text-white p-5 rounded-lg shadow-lg cursor-pointer ${
                  hoveredCard === 'strategy' ? 'highlight-glow' : ''
                }`}
                onMouseEnter={() => setHoveredCard('strategy')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-7 h-7" />
                  <p className="text-sm font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>Digital Strategy</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;