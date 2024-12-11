import React, { useState } from "react";

const Newsletter = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div className="bg-gray-800 py-8">
      {!subscribed ? (
        <form
          onSubmit={handleSubscribe}
          className="max-w-md mx-auto flex flex-col items-center"
        >
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-gray-700 p-2 rounded-md mb-4"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 p-2 rounded-md"
          >
            Subscribe
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p>You've successfully subscribed.</p>
          <div className="mt-4">
            <img
              src="paw.png" // Replace with paw animation image
              alt="Paw Animation"
              className="mx-auto w-20 h-20 animate-bounce"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
