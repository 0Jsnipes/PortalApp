// File: src/components/home/Events.jsx
import React from "react";

const Events = () => {
  const events = [
    { date: "Dec 5", name: "Free Vaccination Day" },
    { date: "Dec 12", name: "Pet Adoption Fair" },
    { date: "Dec 20", name: "Holiday Pet Photo Contest" },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="flex justify-between">
            <span>{event.date}</span>
            <span>{event.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
