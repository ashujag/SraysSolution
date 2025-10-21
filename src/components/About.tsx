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
    <div className="min-h-screen bg-white p-4 md:p-8 relative overflow-hidden" style={{ fontFamily: 'Anton, sans-serif' }}>
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
      
      <div className="max-w-6xl mx-auto relative">
        {/* Logo */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="md:w-10 md:h-10">
              <path d="M20 5C11.716 5 5 11.716 5 20C5 28.284 11.716 35 20 35" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round"/>
              <path d="M20 10C14.477 10 10 14.477 10 20C10 25.523 14.477 30 20 30" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="pt-4 md:pt-8">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>
              About Us
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
              We are awesome team work for your business dream
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
              "SRays" is an HR outsourcing firm incorporated by skilled and proficient wizards in the field of Human Resources aiming to Virtualize the HR Process. We have professionals who are actively exercising Human Resources practices in the Industry, by providing up-to-date sophisticated HR solutions and HRMS (Human Resource Management System) software, IT services to start ups, SMEs, Family Based businesses and Corporates.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Anton, sans-serif' }}>
              As a contribution towards Students community, we are conducting some HR Skill Development Programs for helping them to Up-Skill their knowledge towards the Industrial requirements. Also we conduct Technical Skill Development Programs for HR Professionals and Entrepreneurs.
            </p>
          </div>

          {/* Right Content - Service Cards */}
          <div className="relative min-h-[500px] md:min-h-[600px]">
            {/* Card Stack - Desktop Layout */}
            <div className="hidden lg:block relative" style={{ height: '450px' }}>
              {/* Website Development Card - Blue - Top Left */}
              <div 
                className={`card-hover absolute bg-blue-600 text-white p-5 rounded-xl shadow-lg cursor-pointer ${
                  hoveredCard === 'website' ? 'highlight-glow' : ''
                }`}
                style={{ 
                  top: '0px', 
                  left: '0px', 
                  width: '180px', 
                  height: '110px',
                  zIndex: 4
                }}
                onMouseEnter={() => setHoveredCard('website')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <Monitor className="w-10 h-10 mb-2" />
                  <p className="text-xs font-bold text-center leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>Website Development</p>
                </div>
              </div>

              {/* Mobile App Development Card - Cyan - Top Right */}
              <div 
                className={`card-hover absolute bg-cyan-400 text-white p-5 rounded-xl shadow-lg cursor-pointer ${
                  hoveredCard === 'mobile' ? 'highlight-glow' : ''
                }`}
                style={{ 
                  top: '0px', 
                  left: '195px', 
                  width: '180px', 
                  height: '110px',
                  zIndex: 4
                }}
                onMouseEnter={() => setHoveredCard('mobile')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <Smartphone className="w-10 h-10 mb-2" />
                  <p className="text-xs font-bold text-center leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>Mobile App Development</p>
                </div>
              </div>

              {/* Management Card - White - Left Side Below */}
              <div 
                className={`card-hover absolute bg-white p-7 rounded-xl shadow-2xl border border-gray-100 cursor-pointer ${
                  hoveredCard === 'management' ? 'highlight-glow' : ''
                }`}
                style={{ 
                  top: '130px', 
                  left: '0px', 
                  width: '270px', 
                  height: '210px',
                  zIndex: 3
                }}
                onMouseEnter={() => setHoveredCard('management')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h2 className="text-7xl font-bold text-gray-900 mb-3 leading-none" style={{ fontFamily: 'Anton, sans-serif' }}>01.</h2>
                <h3 className="text-lg font-bold text-blue-600 mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>Management</h3>
                <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: 'Anton, sans-serif' }}>
                  A wonderful serenity has taken possession of my entire
                </p>
              </div>

              {/* Logo & Branding Card - Green - Right Side Middle */}
              <div 
                className={`card-hover absolute bg-emerald-500 text-white p-5 rounded-xl shadow-lg cursor-pointer ${
                  hoveredCard === 'logo' ? 'highlight-glow' : ''
                }`}
                style={{ 
                  top: '130px', 
                  left: '195px', 
                  width: '180px', 
                  height: '110px',
                  zIndex: 4
                }}
                onMouseEnter={() => setHoveredCard('logo')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <Palette className="w-10 h-10 mb-2" />
                  <p className="text-xs font-bold text-center leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>Logo & Branding</p>
                </div>
              </div>

              {/* Digital Strategy Card - Purple - Right Side Bottom */}
              <div 
                className={`card-hover absolute bg-purple-700 text-white p-5 rounded-xl shadow-lg cursor-pointer ${
                  hoveredCard === 'strategy' ? 'highlight-glow' : ''
                }`}
                style={{ 
                  top: '260px', 
                  left: '195px', 
                  width: '180px', 
                  height: '110px',
                  zIndex: 4
                }}
                onMouseEnter={() => setHoveredCard('strategy')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <TrendingUp className="w-10 h-10 mb-2" />
                  <p className="text-xs font-bold text-center leading-tight" style={{ fontFamily: 'Anton, sans-serif' }}>Digital Strategy</p>
                </div>
              </div>
            </div>

            {/* Mobile Layout - Stacked Cards */}
            <div className="lg:hidden space-y-4">
              {/* Management Card */}
              <div 
                className={`card-hover bg-white p-6 rounded-lg shadow-xl border border-gray-100 cursor-pointer ${
                  hoveredCard === 'management' ? 'highlight-glow' : ''
                }`}
                onMouseEnter={() => setHoveredCard('management')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h2 className="text-5xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Anton, sans-serif' }}>01.</h2>
                <h3 className="text-lg font-bold text-blue-600 mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>Management</h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Anton, sans-serif' }}>
                  A wonderful serenity has taken possession of my entire
                </p>
              </div>

              {/* Website Development Card */}
              <div 
                className={`card-hover bg-blue-600 text-white p-6 rounded-lg shadow-lg cursor-pointer ${
                  hoveredCard === 'website' ? 'highlight-glow' : ''
                }`}
                onMouseEnter={() => setHoveredCard('website')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-4">
                  <Monitor className="w-8 h-8" />
                  <p className="text-sm font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>Website Development</p>
                </div>
              </div>

              {/* Mobile App Development Card */}
              <div 
                className={`card-hover bg-cyan-400 text-white p-6 rounded-lg shadow-lg cursor-pointer ${
                  hoveredCard === 'mobile' ? 'highlight-glow' : ''
                }`}
                onMouseEnter={() => setHoveredCard('mobile')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-4">
                  <Smartphone className="w-8 h-8" />
                  <p className="text-sm font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>Mobile App Development</p>
                </div>
              </div>

              {/* Logo & Branding Card */}
              <div 
                className={`card-hover bg-emerald-500 text-white p-6 rounded-lg shadow-lg cursor-pointer ${
                  hoveredCard === 'logo' ? 'highlight-glow' : ''
                }`}
                onMouseEnter={() => setHoveredCard('logo')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-4">
                  <Palette className="w-8 h-8" />
                  <p className="text-sm font-bold" style={{ fontFamily: 'Anton, sans-serif' }}>Logo & Branding</p>
                </div>
              </div>

              {/* Digital Strategy Card */}
              <div 
                className={`card-hover bg-purple-700 text-white p-6 rounded-lg shadow-lg cursor-pointer ${
                  hoveredCard === 'strategy' ? 'highlight-glow' : ''
                }`}
                onMouseEnter={() => setHoveredCard('strategy')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-8 h-8" />
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