import { useState } from 'react';

const ServiceMenu = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [openService, setOpenService] = useState<number | null>(null);
  const services = [
    { 
      id: 1, 
      number: '01', 
      title: 'HRMS',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80',
      description: 'This is a form of HR software that makes day today employee related activities and cumbersome HR data feasible to be managed through our user friendly HRMS services. End to end automation of HR processes is assured without manual intervention.'
    },
    { 
      id: 2, 
      number: '02', 
      title: 'WEBDESIGN',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&q=80',
      description: 'The different areas of web design include web graphic design; interface design; authoring, including standard code and proprietary software; user experience design; and search engine optimization. Often many individuals will work in teams covering different aspects.'
    },
    { 
      id: 3, 
      number: '03', 
      title: 'RECRUITMENT',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop&q=80',
      description: 'Hiring the right resource is always a challenge, but with the blend of dedicated recruiters, technology & best hiring practices we provide the right set of resources for any challenging positions. Our recruitment process is crafted specifically to match your business needs and to streamline & enhance the quality of your human capital. Get ready to leverage the cost and time efficient recruitment with us!'
    },
    { 
      id: 4, 
      number: '04', 
      title: 'TRAINING & DEVELOPMENT',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80',
      description: 'We train your employees to develop them as successful resources who can contribute to the revenue of the organization. We as a consultant see through the client training needs and would execute training programs and events, through veteran trainers associated with us.'
    },
    { 
      id: 5, 
      number: '05', 
      title: 'ORGANISATIONAL DEVELOPMENT SUPPORT',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
      description: 'We provide a personalized OD which is tailored accordingly on your organizational assessment. An unique framework for OD crafted to focus on your organizational priorities and business requirements which helps to upheld your business standards. Our team provides ideal landscape for SME and fast growing corporates which look forward to develop organizational culture and performance to meet out their vision and mission.'
    },
    { 
      id: 6, 
      number: '06', 
      title: 'PAYROLL SERVICES',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop&q=80',
      description: 'Flexible and secured payroll process is a puzzle for employers. We provide end-to-end support for employee payroll with an error free & consistent service. The ideal option is to Leverage the benefits of working with our payroll experts to streamline the process with payroll laws. We are flexible enough to customize according to your expectations with our experts advise which helps to unlock your business insights.'
    },
    { 
      id: 7, 
      number: '07', 
      title: 'E-LEARNING',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&q=80',
      description: "To satisfy people's hunger on learning, we provide HR Skill development courses for professional and Management students with the modern HR Trends to meet out the industrial expectations. A perfect landscape designed for live learning sessions along with case study workouts providing practical implementation of HR Concepts. Get ready to set out your career in HR with our skill development programs under the guidance of industrial experts."
    },
    { 
      id: 8, 
      number: '08', 
      title: 'STATUTORY COMPLIANCE',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80',
      description: 'We provide an effective statutory compliance for Micro to Large scale companies and enterprise with a precise and well-managed solution. Our expert\'s works to align your organization with the updated statutory laws and norms which keeps you safe from compliance risk. We have a structured approach towards both HR (ESI, PF and Gratuity) and Payroll & Tax (TDS & Professional Tax) which results in better growth of your organization.'
    }
  ];

  const handleArrowClick = (serviceId: number) => {
    setOpenService(serviceId);
  };

  const handleClose = () => {
    setOpenService(null);
  };

  const selectedService = services.find(s => s.id === openService);

  return (
    <>
      <div id="services" className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl">
          <div className="mb-8 md:mb-12">
            <h2 className="text-base md:text-xl font-bold tracking-wider">BUSINESS SERVICE</h2>
          </div>

          <div className="space-y-0">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between border-b-2 border-black py-6 md:py-8 transition-all duration-300 ${
                  hoveredItem === service.id ? 'bg-lime-300' : 'bg-white'
                }`}
                onMouseEnter={() => setHoveredItem(service.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 flex-1 w-full">
                  <span className="text-lg md:text-xl font-bold flex-shrink-0">{service.number}</span>
                  <h3 className="text-2xl md:text-7xl font-black tracking-tight break-words md:whitespace-nowrap">{service.title}</h3>
                </div>

                {/* Image container - shows on hover for desktop, clickable on mobile */}
                {hoveredItem === service.id && (
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 z-10 animate-in fade-in zoom-in-95 duration-300 hidden md:block">
                    <div className="w-[300px] lg:w-[500px] h-[200px] lg:h-[330px] rounded-lg shadow-2xl overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Arrow - clickable */}
                <div 
                  className="mt-4 md:mt-0 md:mr-8 cursor-pointer flex-shrink-0"
                  onClick={() => handleArrowClick(service.id)}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 60 60"
                    fill="none"
                    className={`transition-transform duration-300 md:w-[60px] md:h-[60px] ${
                      hoveredItem === service.id ? 'translate-x-2' : ''
                    }`}
                  >
                    <path
                      d="M15 30 L45 30 M35 20 L45 30 L35 40"
                      stroke="black"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide-out panel */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-500 ease-in-out ${
          openService ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://cdn.prod.website-files.com/6847119f22b5391772dbf625%2F684efaff0f6e64c09d96d807_freepik__animate-this-with-8k-loop__54302-poster-00001.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)'
          }}
        ></div>
        
        {/* Import Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&display=swap" rel="stylesheet" />
        
        <div className="relative h-full overflow-y-auto flex items-center justify-center p-4 md:p-8">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 md:top-8 right-6 md:right-8 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg z-10 flex-shrink-0"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="md:w-6 md:h-6"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Content */}
          {selectedService && (
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-white">
                {/* Contact heading in Sacramento font */}
                <h2 
                  className="text-4xl md:text-8xl mb-2 md:mb-4"
                  style={{ 
                    fontFamily: 'Sacramento, cursive',
                    color: '#c4ff00'
                  }}
                >
                  Business Service
                </h2>
                
                {/* LETS TALK in bold white */}
                <h1 
                  className="text-3xl md:text-7xl font-black mb-8 md:mb-16"
                  style={{ fontFamily: 'Antonio, sans-serif' }}
                >
                  LETS TALK
                </h1>
                
                {/* Service image on mobile - below text */}
                <div className="md:hidden mb-6 rounded-lg overflow-hidden shadow-xl w-full max-w-sm mx-auto">
                  <img 
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                {/* Service description in Antonio font */}
                <p 
                  className="text-base md:text-2xl leading-relaxed text-white px-4 md:px-8"
                  style={{ 
                    fontFamily: 'Antonio, sans-serif',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                  }}
                >
                  {selectedService.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceMenu;