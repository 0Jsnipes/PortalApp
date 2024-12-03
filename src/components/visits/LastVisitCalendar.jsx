// File: src/components/visits/LastVisitCalendar.jsx
import React from "react";

const LastVisitCalendar = ({ lastVisit }) => {
  const lastVisitDate = new Date(lastVisit);
  const today = new Date();
  const daysSinceLastVisit = Math.floor(
    (today - lastVisitDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <div>
      <p>Last Visit Date:</p>
      <div className="text-2xl font-bold">{lastVisitDate.toDateString()}</div>
      <p>{daysSinceLastVisit} days since the last visit</p>
    </div>
  );
};

export default LastVisitCalendar;
