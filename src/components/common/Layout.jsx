import React from "react";
import Navbar from "../home/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="container mx-auto py-6">{children}</main>
    </div>
  );
};

export default Layout;
