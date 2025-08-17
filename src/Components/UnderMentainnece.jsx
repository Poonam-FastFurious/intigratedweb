// UnderMaintenance.jsx
import React from "react";
import { FaWrench } from "react-icons/fa";

function UnderMaintenance() {
  return (
    <div className="flex items-center justify-center h-full bg-gray-100 px-4 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-yellow-500 mb-4 flex justify-center">
          <FaWrench size={60} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          We'll Be Back Soon
        </h1>
        <p className="text-gray-600 mb-6">
          Our website is currently undergoing scheduled maintenance. We’ll be
          back online shortly. Thank you for your patience!
        </p>
        <p className="text-sm text-gray-400">— Intigrated Ind. Ltd.</p>
      </div>
    </div>
  );
}

export default UnderMaintenance;
