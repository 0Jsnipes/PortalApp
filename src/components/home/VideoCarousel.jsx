import dogtip1 from "../assets/dogtip1.mp4";
import dogtip2 from "../assets/dogtip2.mp4";
import dogtip3 from "../assets/dogtip3.mp4";
import dogtip4 from "../assets/dogtip4.mp4";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const VideoCarousel = () => {
  const carouselRef = useRef(null);
  const videoRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const currentIndex = useRef(0);

  // List of video URLs
  const videos = [dogtip1, dogtip2, dogtip3, dogtip4];

  // Intersection Observer to detect when the carousel is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Function to scroll to a specific video
  const scrollToVideo = (index) => {
    currentIndex.current = index;
    gsap.to(carouselRef.current, {
      x: `-${currentIndex.current * 100}%`,
      duration: 1,
      ease: "power1.inOut",
    });

    // Play the video from the beginning
    const video = videoRefs.current[currentIndex.current];
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  // Handle video end to auto-advance to the next video
  const handleVideoEnd = () => {
    const nextIndex = (currentIndex.current + 1) % videos.length;
    scrollToVideo(nextIndex);
  };

  // Manual navigation handlers
  const handlePrev = () => {
    const newIndex = (currentIndex.current - 1 + videos.length) % videos.length;
    scrollToVideo(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex.current + 1) % videos.length;
    scrollToVideo(newIndex);
  };

  // Auto-play videos when the carousel is visible
  useEffect(() => {
    if (isVisible) {
      const video = videoRefs.current[currentIndex.current];
      if (video) video.play();
    } else {
      videoRefs.current.forEach((video) => video.pause());
    }
  }, [isVisible]);

  return (
    <div className="video-carousel-container overflow-hidden relative bg-gray-800 p-4 rounded-lg">
      <h2 className="text-center text-white text-2xl mb-4">Helpful Animal Tips</h2>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        &#10094; {/* Left Arrow */}
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
      >
        &#10095; {/* Right Arrow */}
      </button>

      <div className="carousel-wrapper flex" ref={carouselRef}>
        {videos.map((video, index) => (
          <div
            key={index}
            className="carousel-item flex-shrink-0 w-full flex justify-center items-center"
            style={{ minWidth: "100%" }}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              controls
              muted
              onEnded={handleVideoEnd}
              className="max-w-full max-h-[500px] rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
