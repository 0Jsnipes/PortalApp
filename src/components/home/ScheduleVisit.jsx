// File: src/components/home/ScheduleVisit.jsx
import React from "react";

const ScheduleVisit = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Schedule Your Visit</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-gray-700 p-2 rounded-md"
        />
        <input
          type="date"
          className="w-full bg-gray-700 p-2 rounded-md"
        />
        <textarea
          placeholder="Reason for Visit"
          className="w-full bg-gray-700 p-2 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 p-2 rounded-md"
        >
          Schedule
        </button>
      </form>
    </div>
  );
};

export default ScheduleVisit;
