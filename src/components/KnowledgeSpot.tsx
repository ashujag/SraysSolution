import { useState, useEffect, useRef } from "react";
import { Play, X } from "lucide-react";

interface KnowledgeItem {
  id: number;
  title: string;
  author: string;
  description: string;
  thumbnail: string;
  videoId: string;
  type: string;
}

const KnowledgeSpot = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [scrollAnimations, setScrollAnimations] = useState<{
    [key: number]: boolean;
  }>({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoSlideInterval = useRef<number | null>(null);
  const playerRefs = useRef<{ [key: string]: any }>({});
  const [isYouTubeAPIReady, setIsYouTubeAPIReady] = useState(false);

  const knowledgeItems: KnowledgeItem[] = [
    {
      id: 1,
      title: "HR skills training program",
      author: "By SRays",
      description:
        "Happy to associate with K. S. R. Educational institutions for HR skills training program...",
      thumbnail: "https://i.ytimg.com/vi/zqR8bw8bqdM/maxresdefault.jpg",
      videoId: "zqR8bw8bqdM",
      type: "video",
    },
    {
      id: 2,
      title: "A business plan is a formal written document business...",
      author: "By SRays",
      description:
        "A business plan is a formal written document containing business goals. The methods on...",
      thumbnail: "https://i.ytimg.com/vi/7s-uYaQcqq4/hqdefault.jpg",
      videoId: "7s-uYaQcqq4",
      type: "video",
    },
    {
      id: 3,
      title: "A business is the activity of making one's living",
      author: "By SRays",
      description:
        "Business may offer to many opportunities such as the activity of buying and...",
      thumbnail: "https://i.ytimg.com/vi/7CenIv7jl_k/sddefault.jpg",
      videoId: "7CenIv7jl_k",
      type: "video",
    },
  ];

  // Load YouTube IFrame API
  useEffect(() => {
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      setIsYouTubeAPIReady(true);
      return;
    }

    // Load the API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // API ready callback
    window.onYouTubeIframeAPIReady = () => {
      setIsYouTubeAPIReady(true);
    };

    return () => {
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  // Initialize YouTube Players when video is selected
  useEffect(() => {
    if (!selectedVideoId || !isYouTubeAPIReady) return;

    const initPlayer = () => {
      const iframeId = `youtube-player-${selectedVideoId}`;
      const iframeElement = document.getElementById(iframeId);

      if (iframeElement && window.YT && window.YT.Player) {
        try {
          // Destroy existing player if it exists
          if (playerRefs.current[selectedVideoId]) {
            playerRefs.current[selectedVideoId].destroy();
          }

          // Create new player
          playerRefs.current[selectedVideoId] = new window.YT.Player(iframeId, {
            videoId: selectedVideoId,
            playerVars: {
              autoplay: 1,
              controls: 1,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              enablejsapi: 1,
            },
            events: {
              onReady: (event: any) => {
                event.target.playVideo();
              },
            },
          });
        } catch (error) {
          console.error('Error initializing YouTube player:', error);
        }
      }
    };

    // Small delay to ensure iframe is in DOM
    const timer = setTimeout(initPlayer, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [selectedVideoId, isYouTubeAPIReady]);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("knowledge-spot");
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const isVisible = sectionRect.top < window.innerHeight * 0.75;

      if (isVisible) {
        setScrollAnimations(() =>
          knowledgeItems.reduce((acc, item) => {
            acc[item.id] = true;
            return acc;
          }, {} as { [key: number]: boolean })
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto slide for mobile
  useEffect(() => {
    const startAutoSlide = () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
      // Only auto-slide if no video is playing
      if (!selectedVideoId) {
        autoSlideInterval.current = window.setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % knowledgeItems.length);
        }, 4000);
      }
    };

    if (window.innerWidth < 768) {
      startAutoSlide();
    }

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [currentSlide, knowledgeItems.length, selectedVideoId]);

  const startAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
    if (!selectedVideoId) {
      autoSlideInterval.current = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % knowledgeItems.length);
      }, 4000);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % knowledgeItems.length);
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + knowledgeItems.length) % knowledgeItems.length);
    }

    // Reset auto slide timer after manual swipe
    startAutoSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const stopAllVideos = () => {
    // Stop all YouTube players using the API
    Object.keys(playerRefs.current).forEach((videoId) => {
      const player = playerRefs.current[videoId];
      if (player && typeof player.stopVideo === 'function') {
        try {
          player.stopVideo();
        } catch (error) {
          console.error('Error stopping video:', error);
        }
      }
    });
  };

  const toggleVideo = (videoId: string) => {
    // Stop all currently playing videos
    stopAllVideos();
    
    // Toggle the selected video
    setSelectedVideoId((prev) => (prev === videoId ? null : videoId));
  };

  const closeVideo = () => {
    // Stop the current video
    stopAllVideos();
    
    // Close the video player
    setSelectedVideoId(null);
  };

  // Cleanup players on unmount
  useEffect(() => {
    return () => {
      stopAllVideos();
      Object.keys(playerRefs.current).forEach((videoId) => {
        const player = playerRefs.current[videoId];
        if (player && typeof player.destroy === 'function') {
          try {
            player.destroy();
          } catch (error) {
            console.error('Error destroying player:', error);
          }
        }
      });
      playerRefs.current = {};
    };
  }, []);

  return (
    <div
      id="knowledgespot"
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ fontFamily: "Anton, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sacramento&family=Anton&display=swap');
        
        .sacramento-font {
          font-family: 'Sacramento', cursive;
          font-weight: 400;
        }
        
        .anton-font {
          font-family: 'Anton', sans-serif;
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .header-title {
          animation: slideInUp 0.8s ease-out;
        }
        
        .header-subtitle {
          animation: slideInLeft 0.8s ease-out 0.2s both;
        }
        
        .header-description {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }
        
        .card-animate {
          animation: scaleIn 0.6s ease-out;
        }
        
        .card-0 {
          animation-delay: 0s;
        }
        
        .card-1 {
          animation-delay: 0.1s;
        }
        
        .card-2 {
          animation-delay: 0.2s;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 header-title anton-font">
            <span className="Anton-font text-5xl md:text-6xl italic text-black">
              Knowledge
            </span>{" "}
            <span className="text-[#c8f346]">Spot</span>
          </h2>
          <p className="text-gray-500 text-sm mb-2 header-subtitle anton-font">
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-center header-description anton-font">
            News websites and blogs are common sources for web feeds, but feeds
            are also used to deliver structured
          </p>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {knowledgeItems.map((item, index) => (
            <div
              key={item.id}
              className={`group cursor-pointer card-animate card-${index} ${
                scrollAnimations[item.id] ? "card-animate" : ""
              }`}
              onClick={() => toggleVideo(item.videoId)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {selectedVideoId === item.videoId ? (
                  <div className="relative w-full h-full">
                    {/* Close Button - Positioned outside video player area */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeVideo();
                      }}
                      className="absolute -top-10 right-0 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition z-10 shadow-lg"
                      title="Close video"
                    >
                      <X size={20} />
                    </button>

                    {/* YouTube Player Container */}
                    <div
                      id={`youtube-player-${item.videoId}`}
                      className="absolute inset-0 w-full h-full rounded-lg"
                    ></div>
                  </div>
                ) : (
                  <>
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/30 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-lg">
                        <Play
                          className="text-gray-900 ml-1"
                          size={28}
                          fill="currentColor"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold anton-font">
                      VIDEO
                    </div>
                  </>
                )}
              </div>

              {/* Card Content */}
              <div className="space-y-2">
                <p className="text-sm text-gray-500 anton-font font-semibold">
                  {item.author}
                </p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all line-clamp-2 anton-font">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 anton-font">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper - Visible only on Mobile */}
        <div className="md:hidden">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {knowledgeItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div
                    className="group cursor-pointer"
                    onClick={() => toggleVideo(item.videoId)}
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4 aspect-video shadow-lg">
                      {selectedVideoId === item.videoId ? (
                        <div className="relative w-full h-full">
                          {/* Close Button - Positioned outside video player area */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              closeVideo();
                            }}
                            className="absolute -top-10 right-0 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 transition z-10 shadow-lg"
                            title="Close video"
                          >
                            <X size={20} />
                          </button>

                          {/* YouTube Player Container */}
                          <div
                            id={`youtube-player-${item.videoId}`}
                            className="absolute inset-0 w-full h-full rounded-lg"
                          ></div>
                        </div>
                      ) : (
                        <>
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                              <Play
                                className="text-gray-900 ml-1"
                                size={28}
                                fill="currentColor"
                              />
                            </div>
                          </div>
                          <div className="absolute bottom-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold anton-font">
                            VIDEO
                          </div>
                        </>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 anton-font font-semibold">
                        {item.author}
                      </p>
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2 anton-font">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 anton-font">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {knowledgeItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  startAutoSlide();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 w-6"
                    : "bg-gray-400 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// TypeScript declarations for YouTube API
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

export default KnowledgeSpot;