// File: src/components/profile/LastVisitCalendar.jsx
import React from "react";

const LastVisitCalendar = ({ lastVisit, onClick }) => {
  const lastVisitDate = new Date(lastVisit);
  const today = new Date();
  const daysSinceLastVisit = Math.floor(
    (today - lastVisitDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <div
      className="bg-gray-700 p-4 rounded-lg cursor-pointer hover:bg-gray-600 transition"
      onClick={onClick}
    >
      <p>Last Visit Date:</p>
      <div className="text-2xl font-bold">{lastVisitDate.toDateString()}</div>
      <p>{daysSinceLastVisit} days since the last visit</p>
    </div>
  );
};

export default LastVisitCalendar;
