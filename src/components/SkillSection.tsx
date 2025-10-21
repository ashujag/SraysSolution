import React, { useState, useEffect } from 'react';

const SkillSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // No longer setting isVisible as it's unused
  }, []);

  const skills = [
    {
      name: 'HR CONSULTING',
      percentage: 90,
      description: 'Expert guidance in human resource management and strategic planning',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop'
    },
    {
      name: 'OD CONSULTANT',
      percentage: 95,
      description: 'Organizational development and change management excellence',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
    },
    {
      name: 'RESUME WRITING',
      percentage: 85,
      description: 'Professional resume crafting and career documentation services',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
    },
    {
      name: 'CONTENT DEVELOPMENT',
      percentage: 80,
      description: 'Creative content creation and strategic communication solutions',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop'
    },
    {
      name: 'CUSTOMIZED SOFTWARE',
      percentage: 95,
      description: 'Tailored software development for business optimization',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
          to {
            opacity: 1;
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: var(--progress-width);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .top-cities {
          animation: fadeInLeft 0.8s ease-out;
        }

        .main-heading {
          animation: textReveal 1s ease-out 0.2s both;
        }

        .office-badge {
          animation: fadeInRight 0.8s ease-out 0.4s both;
        }

        .team-section {
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .stats-section {
          animation: fadeInRight 0.8s ease-out 0.8s both;
        }

        .card-container {
          animation: slideUp 1s ease-out 1s both;
        }

        .management-text {
          animation: fadeInRight 1s ease-out 1.2s both;
        }

        .nav-button {
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          transform: scale(1.1);
          background: rgba(0, 0, 0, 0.1);
        }

        .nav-button:active {
          transform: scale(0.95);
        }

        .image-container {
          animation: float 4s ease-in-out infinite;
        }

        .shimmer-text {
          background: linear-gradient(90deg, #ffffff 0%, #cccccc 50%, #ffffff 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s infinite;
        }

        .stat-number {
          display: inline-block;
          animation: scaleIn 0.6s ease-out 1s both;
        }

        @keyframes slideContent {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-content {
          animation: slideContent 0.5s ease-out;
        }

        @keyframes imageTransition {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .progress-bar {
          animation: progressBar 1.5s ease-out forwards;
        }

        .percentage-circle {
          animation: pulse 2s ease-in-out infinite;
        }

        .main-image {
          animation: imageTransition 0.6s ease-out;
        }
      `}</style>

      {/* Top Section */}
      <div style={styles.topSection}>
        <div className="top-cities" style={styles.topCities}>
          Skills & Expertise
        </div>
        <div className="main-heading" style={styles.mainHeading}>
          GET IMPROVE IN<br />YOUR HR PROCESS
        </div>
        <div className="office-badge" style={styles.officeBadge}>
          <div style={styles.badgeContent}>
            <span style={styles.bullet}>●</span> HRMS Services
          </div>
          <div style={styles.badgeImage}>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop" 
              alt="HR Team"
              style={styles.badgeImg}
            />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div style={styles.middleSection}>
        <div className="team-section" style={styles.teamSection}>
          <div style={styles.teamNumber}>
            <span className="stat-number">{skills[currentSlide].percentage}%</span>
          </div>
          <div style={styles.teamLabel}>EXPERTISE LEVEL</div>
        </div>

        <div className="card-container" style={styles.cardContainer}>
          <div className="image-container" style={styles.imageSection}>
            <img 
              key={currentSlide}
              className="main-image"
              src={skills[currentSlide].image}
              alt={skills[currentSlide].name}
              style={styles.mainImage}
            />
            {/* Skill Progress Overlay */}
            <div style={styles.progressOverlay}>
              <div style={styles.progressBarContainer}>
                <div 
                  className="progress-bar"
                  style={{
                    ...styles.progressBar,
                    '--progress-width': `${skills[currentSlide].percentage}%`
                  } as React.CSSProperties}
                />
              </div>
            </div>
          </div>
          <div style={styles.cardContent}>
            <div className="slide-content" key={currentSlide}>
              <div style={styles.country} className="shimmer-text">
                {skills[currentSlide].name}
              </div>
              <div style={styles.cardTitle}>
                PROFESSIONAL EXCELLENCE
              </div>
              <div style={styles.cardDescription}>
                {skills[currentSlide].description}
              </div>
            </div>
          </div>
        </div>

        <div className="stats-section" style={styles.statsSection}>
          <div style={styles.statsNumber}>
            <span className="stat-number">05</span>
          </div>
          <div style={styles.statsLabel}>CORE SKILLS</div>
        </div>
      </div>

      {/* Description Section */}
      <div style={styles.descriptionSection}>
        <p style={styles.descriptionText}>
          A skill is the ability to carry out a task with determined results often within a given amount of time. 
          Skill usually requires certain environ stimuli and situations to assess more than enough.
        </p>
      </div>

      {/* Management Text */}
      <div className="management-text" style={styles.managementText}>
        - USER FRIENDLY HRMS SERVICES
      </div>

      {/* Navigation */}
      <div style={styles.navigation}>
        <button 
          className="nav-button"
          style={styles.navButton} 
          onClick={handlePrev}
        >
          ←
        </button>
        <button 
          className="nav-button"
          style={styles.navButton} 
          onClick={handleNext}
        >
          →
        </button>
      </div>

      {/* CTA Section */}
      <div style={styles.ctaSection}>
        <div style={styles.ctaCard}>
          <h3 style={styles.ctaTitle}>This is a form of HR software</h3>
          <p style={styles.ctaDescription}>
            That makes day to day employee related activities and cumbersome HR data feasible 
            to be managed through our user friendly HRMS services.
          </p>
         <button
            style={styles.ctaButton}
            onClick={() => {
              const homeSection = document.getElementById("home");
              if (homeSection) {
                homeSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get SRays Now!
          </button>
        </div>
      </div>

      {/* URL */}
      <div style={styles.url}>
        https://srays-hrms.webflow.io/services
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    minHeight: '100vh',
    background: '#c8f346',
    padding: '40px',
    fontFamily: 'Anton, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '60px',
  },
  topCities: {
    fontFamily: 'Sacramento, cursive',
    fontSize: '52px',
    color: '#1a1a1a',
    fontWeight: '400',
  },
  mainHeading: {
    fontFamily: 'Anton, sans-serif',
    fontSize: '70px',
    fontWeight: '400',
    color: '#1a1a1a',
    lineHeight: '0.95',
    letterSpacing: '0px',
    textAlign: 'center',
    flex: 1,
  },
  officeBadge: {
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '50px',
    padding: '8px 20px 8px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backdropFilter: 'blur(10px)',
  },
  badgeContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    fontWeight: '400',
    color: '#1a1a1a',
    fontFamily: 'Anton, sans-serif',
  },
  bullet: {
    fontSize: '12px',
  },
  badgeImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    overflow: 'hidden',
  },
  badgeImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  middleSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '40px',
    marginBottom: '40px',
  },
  teamSection: {
    textAlign: 'left',
  },
  teamNumber: {
    fontFamily: 'Anton, sans-serif',
    fontSize: '110px',
    fontWeight: '400',
    color: '#1a1a1a',
    lineHeight: '0.9',
  },
  teamLabel: {
    fontFamily: 'Anton, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    color: '#1a1a1a',
    marginTop: '8px',
    letterSpacing: '1px',
  },
  cardContainer: {
    flex: 1,
    maxWidth: '500px',
  },
  imageSection: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 200, 200, 0.3) 100%)',
    borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
    padding: '50px',
    marginBottom: '-50px',
    position: 'relative',
    zIndex: 2,
  },
  mainImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '20px',
    display: 'block',
    objectFit: 'cover',
  },
  progressOverlay: {
    position: 'absolute',
    bottom: '70px',
    left: '70px',
    right: '70px',
  },
  progressBarContainer: {
    width: '100%',
    height: '12px',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '10px',
    overflow: 'hidden',
    backdropFilter: 'blur(5px)',
  },
  progressBar: {
    height: '100%',
    background: 'linear-gradient(90deg, #1a3a2a 0%, #2a5a3a 100%)',
    borderRadius: '10px',
    transition: 'width 1.5s ease-out',
  },
  cardContent: {
    background: '#1a3a2a',
    padding: '40px',
    borderRadius: '12px',
    position: 'relative',
    zIndex: 1,
  },
  country: {
    fontFamily: 'Anton, sans-serif',
    fontSize: '48px',
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: '16px',
    letterSpacing: '1px',
  },
  cardTitle: {
    fontFamily: 'Anton, sans-serif',
    fontSize: '24px',
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: '12px',
    letterSpacing: '0.5px',
  },
  cardDescription: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: '#ffffff',
    lineHeight: '1.6',
    opacity: 0.9,
    fontWeight: '400',
  },
  statsSection: {
    textAlign: 'right',
  },
  statsNumber: {
    fontFamily: 'Anton, sans-serif',
    fontSize: '140px',
    fontWeight: '400',
    color: '#1a1a1a',
    lineHeight: '0.85',
  },
  statsLabel: {
    fontFamily: 'Anton, sans-serif',
    fontSize: '16px',
    fontWeight: '400',
    color: '#1a1a1a',
    marginTop: '12px',
    letterSpacing: '1px',
  },
  descriptionSection: {
    maxWidth: '800px',
    margin: '0 auto 30px auto',
    textAlign: 'center',
  },
  descriptionText: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: '#1a1a1a',
    lineHeight: '1.8',
    opacity: 0.8,
  },
  managementText: {
    fontFamily: 'Anton, sans-serif',
    fontSize: '22px',
    fontWeight: '400',
    color: '#1a1a1a',
    textAlign: 'right',
    marginBottom: '40px',
    letterSpacing: '0.5px',
  },
  navigation: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  navButton: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    border: '3px solid #1a1a1a',
    background: 'transparent',
    fontSize: '32px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1a1a1a',
    fontWeight: 'bold',
  },
  ctaSection: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
  },
  ctaCard: {
    background: 'rgba(26, 58, 42, 0.9)',
    padding: '40px 50px',
    borderRadius: '20px',
    maxWidth: '600px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
  },
  ctaTitle: {
    fontFamily: 'Anton, sans-serif',
    fontSize: '28px',
    color: '#ffffff',
    marginBottom: '20px',
    fontWeight: '400',
  },
  ctaDescription: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: '#ffffff',
    lineHeight: '1.8',
    marginBottom: '30px',
    opacity: 0.9,
  },
  ctaButton: {
    fontFamily: 'Anton, sans-serif',
    background: '#c8f346',
    color: '#1a1a1a',
    padding: '15px 40px',
    fontSize: '20px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: '400',
    letterSpacing: '0.5px',
    transition: 'all 0.3s ease',
  },
  url: {
    position: 'absolute',
    bottom: '20px',
    left: '40px',
    fontSize: '14px',
    color: '#1a1a1a',
    fontWeight: '500',
    fontFamily: 'Arial, sans-serif',
  },
};

export default SkillSection;
