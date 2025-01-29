// src/components/Step5.jsx
import React from "react";
import { Link } from "react-router-dom";

const Step5 = () => {
  return (
    <div className="flex justify-center items-center py-5">
      <div className="text-center">
        <img
          src="/thanks-page.png"
          alt="Success"
          className="mx-auto w-64 h-64 mb-6"
        />
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="text-lg font-medium mb-2">
          Your appointment has been successfully booked!
        </p>
        <p className="text-gray-600">
          We're thrilled to have you with us. Our team will contact you shortly
          to confirm the details.
        </p>
        <Link to="/">
          <button className="px-4 py-2 bg-blue-500 font-semibold w-[200px] mt-6 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step5;
