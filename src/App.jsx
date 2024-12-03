// File: src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import PasswordRecovery from "./components/auth/PasswordRecovery";
import Homepage from "./components/home/Homepage";
import Profile from "./components/profile/Profile";
import Visits from "./components/visits/Visits";
import Layout from "./components/common/Layout";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const login = () => {
    setIsLoggedIn(true);
    const id = setTimeout(() => {
      setIsLoggedIn(false); // Log out after 30 minutes
    }, 30 * 60 * 1000); // 30 minutes in milliseconds
    setTimeoutId(id);
  };

  const logout = () => {
    setIsLoggedIn(false); // Update the login state
    clearTimeout(timeoutId); // Clear any active timeout
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login onLogin={login} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />

        {/* Authenticated Routes */}
        {isLoggedIn ? (
          <>
            <Route
              path="/home"
              element={
                <Layout onLogout={logout}>
                  <Homepage />
                </Layout>
              }
            />
            <Route
              path="/profile"
              element={
                <Layout onLogout={logout}>
                  <Profile />
                </Layout>
              }
            />
            <Route
              path="/visits"
              element={
                <Layout onLogout={logout}>
                  <Visits />
                </Layout>
              }
            />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
