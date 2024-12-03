// File: src/components/profile/Profile.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import LastVisitCalendar from "./LastVisitCalendar";
import VaccineCalendar from "./VaccineCalendar";
import proPic from "../assets/proPic.webp"

const Profile = () => {
  const navigate = useNavigate();

  // Example data for the profile
  const animal = {
    photo: proPic, // Replace with actual animal photo
    name: "Buddy",
    age: "3 years",
    weight: "25 lbs",
    breed: "Golden Retriever",
    lastVisit: "2023-11-15", // Example last visit date
    upcomingVaccines: [
      { date: "2023-12-10", vaccine: "Rabies Booster" },
      { date: "2024-01-15", vaccine: "Distemper" },
    ],
  };

  const handleNavigate = () => {
    navigate("/visits");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Animal Details */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <img
            src={animal.photo}
            alt={animal.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{animal.name}</h2>
          <p>Age: {animal.age}</p>
          <p>Weight: {animal.weight}</p>
          <p>Breed: {animal.breed}</p>
        </div>

        {/* Calendars */}
        <div className="grid grid-cols-1 gap-6">
          {/* Last Visit */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Last Visit</h3>
            <LastVisitCalendar
              lastVisit={animal.lastVisit}
              onClick={handleNavigate}
            />
          </div>

          {/* Upcoming Vaccines */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Upcoming Vaccines</h3>
            <VaccineCalendar
              upcomingVaccines={animal.upcomingVaccines}
              onClick={handleNavigate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
