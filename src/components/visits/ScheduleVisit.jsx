import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const doctors = [
  {
    name: "Dr. Smith",
    availability: {
      "2023-12-01": ["9:00 AM", "10:30 AM", "2:00 PM"],
      "2023-12-05": ["11:00 AM", "1:30 PM"],
      "2023-12-08": ["10:00 AM", "3:00 PM"],
    },
  },
  {
    name: "Dr. Johnson",
    availability: {
      "2023-12-02": ["8:00 AM", "9:30 AM", "3:30 PM"],
      "2023-12-06": ["12:00 PM", "4:00 PM"],
      "2023-12-10": ["10:30 AM", "2:30 PM"],
    },
  },
  {
    name: "Dr. Lee",
    availability: {
      "2023-12-03": ["9:00 AM", "1:00 PM", "4:00 PM"],
      "2023-12-07": ["11:00 AM", "3:00 PM"],
      "2023-12-12": ["8:30 AM", "2:00 PM"],
    },
  },
];

const ScheduleVisit = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointment, setAppointment] = useState(null);

  // Get available dates for the selected doctor
  const availableDates =
    selectedDoctor &&
    Object.keys(
      doctors.find((doc) => doc.name === selectedDoctor)?.availability || {}
    );

  // Get available times for the selected date
  const availableTimes =
    selectedDoctor && selectedDate
      ? doctors.find((doc) => doc.name === selectedDoctor)?.availability[
          selectedDate.toISOString().split("T")[0]
        ] || []
      : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDoctor && selectedDate && selectedTime) {
      setAppointment({
        doctor: selectedDoctor,
        date: selectedDate.toDateString(),
        time: selectedTime,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Doctor Selection */}
        <label htmlFor="doctor" className="block mb-2 font-medium">
          Select a Doctor
        </label>
        <select
          id="doctor"
          className="w-full bg-gray-700 text-white p-2 rounded-md mb-4"
          value={selectedDoctor || ""}
          onChange={(e) => {
            setSelectedDoctor(e.target.value);
            setSelectedDate(null);
            setSelectedTime(null); // Reset date and time when doctor changes
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

        {/* Date Picker */}
        {selectedDoctor && (
          <>
            <label htmlFor="date" className="block mb-2 font-medium">
              Select a Date
            </label>
            <DatePicker
              id="date"
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setSelectedTime(null); // Reset time when date changes
              }}
              includeDates={availableDates.map((date) => new Date(date))}
              className="w-full bg-gray-700 text-white p-2 rounded-md"
              placeholderText="Click to select a date"
            />
          </>
        )}

        {/* Time Picker */}
        {selectedDoctor && selectedDate && (
          <>
            <label htmlFor="time" className="block mt-4 mb-2 font-medium">
              Select a Time
            </label>
            <select
              id="time"
              className="w-full bg-gray-700 text-white p-2 rounded-md mb-4"
              value={selectedTime || ""}
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
