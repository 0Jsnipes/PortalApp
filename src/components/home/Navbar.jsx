import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the logout function passed as a prop
    navigate("/"); // Redirect to the login page
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Title */}
        <h1
          className="text-2xl font-bold cursor-pointer text-white hover:text-indigo-400"
          onClick={() => navigate("/home")}
        >
          Mebane Vet Clinic
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/home" className="text-white hover:text-indigo-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-white hover:text-indigo-400">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/visits" className="text-white hover:text-indigo-400">
              Visits
            </Link>
          </li>
        </ul>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
