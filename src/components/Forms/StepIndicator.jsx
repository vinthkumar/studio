import React from "react";
import { FaClipboardList, FaCalendarAlt, FaUser, FaStar } from "react-icons/fa";

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { label: "Requirement", icon: <FaClipboardList /> },
    { label: "Calendar", icon: <FaCalendarAlt /> },
    { label: "Information", icon: <FaUser /> },
    { label: "Review", icon: <FaStar /> },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mb-6 space-y-6 lg:space-y-0 lg:space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col lg:flex-row items-center">
          {/* Icon and label */}
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                index + 1 === currentStep
                  ? "buttoncolor text-white"
                  : "bg-green-300 text-black"
              }`}>
              {step.icon}
            </div>
            <span
              className={`mt-2 text-sm ${
                index + 1 === currentStep
                  ? "main-font font-semibold"
                  : "text-black text-medium"
              }`}>
              {step.label}
            </span>
          </div>
          {/* Line */}
          {index < steps.length - 1 && (
            <div
              className={`h-1 w-full lg:w-20 lg:m-[15px] my-4 lg:my-0 ${
                index + 1 < currentStep ? "buttoncolor" : "bg-green-300"
              }`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
