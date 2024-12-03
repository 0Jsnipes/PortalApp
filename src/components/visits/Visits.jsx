// File: src/components/visits/Visits.jsx
import React from "react";
import LastVisitCalendar from "./LastVisitCalendar";
import Recommendations from "./Recommendations";
import ScheduleVisit from "./ScheduleVisit";

const Visits = () => {
  // Placeholder data
  const lastVisit = "2023-11-15";

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Last Visit Calendar */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Last Visit</h2>
          <LastVisitCalendar lastVisit={lastVisit} />
        </div>

        {/* Recommendations */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Recommended Checks</h2>
          <Recommendations />
        </div>
      </div>

      {/* Schedule a Visit Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold mb-4">Schedule a Visit</h2>
        <ScheduleVisit />
      </div>
    </div>
  );
};

export default Visits;
