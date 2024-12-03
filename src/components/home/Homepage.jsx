// File: src/components/home/Homepage.jsx
import React from "react";
import Navbar from "./Navbar";
import Events from "./Events";
import ScheduleVisit from "./ScheduleVisit";
import VideoCarousel from "./VideoCarousel";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div
        className="bg-cover bg-center h-[60vh] relative"
        style={{
          backgroundImage: `url('https://placekitten.com/1200/600')`, // Replace with a dogs-playing image
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to Mebane Vet Clinic
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
        <Events />
        <ScheduleVisit />
      </div>
      <VideoCarousel />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
