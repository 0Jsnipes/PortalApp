import React from "react";
import Navbar from "../home/Navbar";

const Layout = ({ children, onLogout }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar onLogout={onLogout} />
      <main className="container mx-auto py-6">{children}</main>
    </div>
  );
};

export default Layout;
