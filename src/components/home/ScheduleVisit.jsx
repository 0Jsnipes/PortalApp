import React, { useState } from "react";

const ScheduleVisit = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    reason: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setShowPopup(true); // Show the popup message
    setFormData({ name: "", date: "", reason: "" }); // Clear the form fields
  };

  // Handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup message
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md relative">
      <h2 className="text-2xl font-bold mb-4">Schedule Your Visit</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full bg-gray-700 p-2 rounded-md text-white"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          className="w-full bg-gray-700 p-2 rounded-md text-white"
          value={formData.date}
          onChange={handleChange}
        />
        <textarea
          name="reason"
          placeholder="Reason for Visit"
          className="w-full bg-gray-700 p-2 rounded-md text-white"
          value={formData.reason}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 p-2 rounded-md text-white transition"
        >
          Schedule
        </button>
      </form>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg relative w-96">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Thank you for scheduling your next visit!
            </h3>
            <button
              onClick={handleClosePopup}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleVisit;
