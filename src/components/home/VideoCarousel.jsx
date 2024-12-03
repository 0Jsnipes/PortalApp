// File: src/components/home/VideoCarousel.jsx
import React from "react";

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with real video links
  "https://www.youtube.com/embed/3GwjfUFyY6M",
  "https://www.youtube.com/embed/2Vv-BfVoq4g",
  "https://www.youtube.com/embed/kJQP7kiw5Fk",
];

const VideoCarousel = () => {
  return (
    <div className="bg-gray-800 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Helpful Animal Tips
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <iframe
            key={index}
            src={video}
            title={`Animal Tip ${index + 1}`}
            className="w-full h-64 rounded-lg"
            allow="autoplay"
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
