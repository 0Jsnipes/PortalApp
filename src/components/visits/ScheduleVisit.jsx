import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const doctors = [
  {
    name: "Dr. Smith",
    availability: ["2023-12-01", "2023-12-05", "2023-12-08"],
    times: ["9:00 AM", "10:30 AM", "2:00 PM"],
  },
  {
    name: "Dr. Johnson",
    availability: ["2023-12-02", "2023-12-06", "2023-12-10"],
    times: ["8:00 AM", "9:30 AM", "3:30 PM"],
  },
  {
    name: "Dr. Lee",
    availability: ["2023-12-03", "2023-12-07", "2023-12-12"],
    times: ["9:00 AM", "1:00 PM", "4:00 PM"],
  },
];

const ScheduleVisit = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [appointment, setAppointment] = useState(null);

  // Get available dates for the selected doctor and convert them to UTC dates
  const availableDates = selectedDoctor
    ? doctors.find((doc) => doc.name === selectedDoctor)?.availability.map(
        (date) => {
          const [year, month, day] = date.split("-");
          const utcDate = new Date(Date.UTC(year, month - 1, day));
          utcDate.setUTCHours(19, 0, 0, 0); // had to  change time to make it the correct date
          return utcDate;
        }
      )
    : [];

  // Get available times for the selected doctor
  const availableTimes = selectedDoctor
    ? doctors.find((doc) => doc.name === selectedDoctor)?.times
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDoctor && selectedDate && selectedTime) {
      setAppointment({
        doctor: selectedDoctor,
        date: selectedDate.toUTCString(), // Display the date in UTC format
        time: selectedTime,
      });

      // Clear the form fields after submission
      setSelectedDoctor("");
      setSelectedDate(null);
      setSelectedTime("");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-white">Schedule Your Visit</h2>
      <form onSubmit={handleSubmit}>
        {/* Doctor Selection */}
        <label htmlFor="doctor" className="block mb-2 font-medium text-white">
          Select a Doctor
        </label>
        <select
          id="doctor"
          className="w-full bg-gray-700 text-white p-2 rounded-md mb-4"
          value={selectedDoctor}
          onChange={(e) => {
            setSelectedDoctor(e.target.value);
            setSelectedDate(null);
            setSelectedTime("");
          }}
        >
          <option value="" disabled>
            Choose a doctor
          </option>
          {doctors.map((doc) => (
            <option key={doc.name} value={doc.name}>
              {doc.name}
            </option>
          ))}
        </select>

        {/* Date Selection with DatePicker */}
        {selectedDoctor && availableDates.length > 0 && (
          <>
            <label htmlFor="date" className="block mb-2 font-medium text-white">
              Select a Date
            </label>
            <DatePicker
              id="date"
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setSelectedTime("");
              }}
              includeDates={availableDates}
              className="w-full bg-gray-700 text-white p-2 rounded-md mb-4"
              placeholderText="Click to select a date"
            />
          </>
        )}

        {/* Time Selection Dropdown */}
        {selectedDoctor && selectedDate && availableTimes.length > 0 && (
          <>
            <label htmlFor="time" className="block mt-4 mb-2 font-medium text-white">
              Select a Time
            </label>
            <select
              id="time"
              className="w-full bg-gray-700 text-white p-2 rounded-md mb-4"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="" disabled>
                Choose a time
              </option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!selectedDoctor || !selectedDate || !selectedTime}
          className={`w-full mt-4 py-2 px-4 rounded-md transition ${
            selectedDoctor && selectedDate && selectedTime
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </form>

      {/* Confirmation Message */}
      {appointment && (
        <div className="mt-4 text-green-400">
          <p>
            Appointment scheduled with <strong>{appointment.doctor}</strong> on{" "}
            <strong>{appointment.date}</strong> at <strong>{appointment.time}</strong>.
          </p>
        </div>
      )}
    </div>
  );
};

export default ScheduleVisit;
