import React from 'react';

interface ImageWrapProps {
  src: string;
  alt: string;
}

interface CreationSectionProps {}

const ImageWrap: React.FC<ImageWrapProps> = ({ src, alt }) => (
  <div className="flex-1 min-w-0 opacity-100 transform transition-all duration-300">
    <img 
      src={src} 
      alt={alt}
      loading="lazy"
      className="w-full h-auto object-cover rounded-3xl"
    />
  </div>
);

const AboutUs: React.FC<CreationSectionProps> = () => {
  const images = [
    {
      src: "https://cdn.prod.website-files.com/6847119f22b5391772dbf625/6847119f22b5391772dbf6b4_cration%20imge%201.webp",
      alt: "Workspace productivity image 1"
    },
    {
      src: "https://cdn.prod.website-files.com/6847119f22b5391772dbf625/6847119f22b5391772dbf6b3_cration%20imge%202.webp",
      alt: "Workspace productivity image 2"
    },
    {
      src: "https://cdn.prod.website-files.com/6847119f22b5391772dbf625/6847119f22b5391772dbf6b5_cration%20imge%203.webp",
      alt: "Workspace productivity image 3"
    }
  ];

  return (
    <section id="about"className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <div className="space-y-0">
              {/* Pacifico Font - About Us */}
              <h2
                className="text-5xl md:text-6xl text-orange-500 mb-0 leading-none"
                style={{ fontFamily: 'Pacifico, cursive' }}
              >
                About Us
              </h2>

              {/* Anton Font - Bold Headline - Touching closely to Pacifico */}
              <h3
                className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 leading-tight uppercase mt-1"
                style={{ fontFamily: 'Anton, sans-serif' }}
              >
                We are awesome team work for your business dream
              </h3>

              {/* Regular Content - Properly separated paragraphs */}
              <div className="text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  "SRays" is an HR outsourcing firm incorporated by skilled and proficient wizards in the field of Human Resources aiming to Virtualize the HR Process. We have professionals who are actively exercising Human Resources practices in the Industry, by providing up-to-date sophisticated HR solutions and HRMS (Human Resource Management System) software, IT services to start ups, SMEs, Family Based businesses and Corporates.
                </p>

                <p>
                  As a contribution towards Students community, we are conducting some HR Skill Development Programs for helping them to Up-Skill their knowledge towards the Industrial requirements. Also we conduct Technical Skill Development Programs for HR Professionals and Entrepreneurs.
                </p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageWrap 
                src={images[0].src} 
                alt={images[0].alt}
              />
              <ImageWrap 
                src={images[1].src} 
                alt={images[1].alt}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div />
              <ImageWrap 
                src={images[2].src} 
                alt={images[2].alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;