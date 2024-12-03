// File: src/components/visits/Recommendations.jsx
import React from "react";

const Recommendations = () => {
  return (
    <div>
      <p className="text-gray-400">
        Recommendations based on your dog's age, weight, and health conditions will be displayed here.
      </p>
      <ul className="mt-2 list-disc list-inside">
        <li>Vaccination schedule</li>
        <li>Dental check</li>
        <li>Weight management tips</li>
      </ul>
    </div>
  );
};

export default Recommendations;
