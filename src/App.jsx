// File: src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import PasswordRecovery from "./components/auth/PasswordRecovery";
import Homepage from "./components/home/Homepage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  // Simulate login functionality
  const login = () => {
    setIsLoggedIn(true);
    const id = setTimeout(() => {
      setIsLoggedIn(false); // Log out after 30 minutes
    }, 30 * 60 * 1000); // 30 minutes in milliseconds
    setTimeoutId(id);
  };

  // Clear timeout on logout
  const logout = () => {
    setIsLoggedIn(false);
    clearTimeout(timeoutId);
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<Login onLogin={login} />} />

          {/* Signup Route */}
          <Route path="/signup" element={<Signup />} />

          {/* Password Recovery Route */}
          <Route path="/password-recovery" element={<PasswordRecovery />} />

          {/* Homepage Route */}
          <Route
            path="/home"
            element={isLoggedIn ? <Homepage /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
