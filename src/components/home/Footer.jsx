// File: src/components/home/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>Phone: 555-555-5555</p>
          <p>Address: 555 Will Way</p>
          <p>Email: mebane@vet.com</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl text-white hover:text-indigo-400"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook text-2xl text-white hover:text-indigo-400"></i>
          </a>
        </div>
        <div>
          <a href="/terms" className="text-gray-400 hover:text-indigo-400">
            Terms
          </a>{" "}
          |{" "}
          <a href="/privacy" className="text-gray-400 hover:text-indigo-400">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
