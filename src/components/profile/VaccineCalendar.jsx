// File: src/components/profile/VaccineCalendar.jsx
import React from "react";

const VaccineCalendar = ({ upcomingVaccines, onClick }) => {
  return (
    <div
      className="bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition"
      onClick={onClick}
    >
      <p>Upcoming Vaccines:</p>
      <ul className="mt-2 space-y-2">
        {upcomingVaccines.map((vaccine, index) => (
          <li key={index} className="flex justify-between">
            <span>{new Date(vaccine.date).toDateString()}</span>
            <span>{vaccine.vaccine}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VaccineCalendar;
