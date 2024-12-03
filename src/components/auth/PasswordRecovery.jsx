import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const PasswordRecovery = () => {
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    // GSAP animation for form fade-in
    gsap.fromTo(
      ".recovery-container",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  const handlePasswordRecovery = (e) => {
    e.preventDefault();
    // Simulate email sending (you would call your backend here)
    setEmailSent(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="recovery-container max-w-md w-full bg-gray-800 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">
          Password Recovery
        </h2>
        {!emailSent ? (
          <form onSubmit={handlePasswordRecovery} className="space-y-4">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your registered email"
                className="mt-1 block w-full bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition-colors duration-300"
              >
                Recover Password
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-gray-400">
              If your email is registered, you'll receive a password recovery
              link shortly.
            </p>
            <Link
              to="/"
              className="text-indigo-500 hover:text-indigo-400 font-medium mt-4 block"
            >
              Return to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordRecovery;
