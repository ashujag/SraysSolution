import NewsCard from "./NewsCard";

function Blog() {
  const newsItems = [
    {
      id: 1,
      author: "SRays",
      title: "HR skills training program",
      description:
        "Happy to associate with K. S. R. Educational institutions for HR skills training program...",
      date: "28 May, 2022",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6915572849441198080/",
    },
    {
      id: 2,
      author: "SRays",
      title: "A business plan is a formal written document business goals",
      description:
        "A business plan is a formal written document containing business goals. The methods on how these goals can be [...]",
      date: "12 March, 2019",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      author: "SRays",
      title: "A business is the activity of making one's living",
      description:
        "Business may offer to many differing activitie, such as the activity of buying or selling in trade. Business activity [...]",
      date: "08 March, 2019",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div id="blog" className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes letterSpacing {
          from {
            letter-spacing: 10px;
            opacity: 0;
          }
          to {
            letter-spacing: normal;
            opacity: 1;
          }
        }

        .blog-title {
          font-family: 'Sacramento', cursive;
          animation: slideInLeft 0.8s ease-out;
          display: inline-block;
        }

        .latest-news-title {
          font-family: 'Anton', sans-serif;
          animation: textReveal 1s ease-out 0.2s both;
          line-height: 1;
        }

        .blog-description {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .news-card {
          animation: fadeInUp 0.8s ease-out both;
        }

        .news-card:nth-child(1) {
          animation-delay: 0.6s;
        }

        .news-card:nth-child(2) {
          animation-delay: 0.8s;
        }

        .news-card:nth-child(3) {
          animation-delay: 1s;
        }

        .card-title {
          font-family: 'Anton', sans-serif;
          animation: letterSpacing 0.6s ease-out;
        }

        .card-date {
          font-family: 'Anton', sans-serif;
        }

        .underline-effect {
          position: relative;
          overflow: hidden;
        }

        .underline-effect::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #000000 0%, #333333 100%);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }

        .underline-effect:hover::after {
          transform: translateX(0);
        }

        .card-image {
          transition: transform 0.4s ease;
        }

        .underline-effect:hover .card-image {
          transform: scale(1.05);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center relative">
          <div className="relative inline-block">
            <h3 className="blog-title text-9xl text-red-600 relative z-20 mb-[-40px]">Blogs</h3>
            <h2 className="latest-news-title text-7xl font-normal text-gray-900 tracking-tight relative z-10">
              LATEST NEWS
            </h2>
          </div>
          <p className="blog-description text-base text-gray-700 max-w-4xl mx-auto leading-relaxed mt-6 font-semibold" style={{ fontFamily: 'Anton, sans-serif', fontWeight: 400, letterSpacing: '0.3px' }}>
            At the core of our approach are three key areas of expertise that drive impactful results. Explore how our strategy, creativity, and technology work together to fuel your growth.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={item.id} className="news-card">
              <a 
                href={item.link || '#'} 
                className="block underline-effect"
                target={item.link ? "_blank" : "_self"}
                rel={item.link ? "noopener noreferrer" : ""}
              >
                <div className="overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="card-image w-full h-64 object-cover"
                  />
                </div>
                <div className="pt-6 pb-2">
                  <p className="card-date text-sm text-gray-500 mb-3 tracking-wide">
                    {item.date}
                  </p>
                  <h3 className="card-title text-2xl text-gray-900 mb-3 leading-tight tracking-tight">
                    {item.title.toUpperCase()}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;