import React from "react";

const Step4 = ({ formData }) => {
  return (
    <div className="flex flex-col items-center px-4">
      <h2 className="text-2xl mb-4 text-center">
        Step 4: Review Your Information
      </h2>
      <div className="space-y-4 mt-3 w-full max-w-md">
        {[
          { label: "Requirements", value: formData.requirements },
          { label: "Booking Date", value: formData.date },
          { label: "Name", value: formData.name },
          { label: "Email", value: formData.email },
          { label: "Phone Number", value: formData.phone },
          { label: "City", value: formData.city },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:pl-8 pl-0 sm:flex-row justify-between items-start sm:items-center">
            <strong className="w-full sm:w-1/3 text-left mb-2 sm:mb-0 pr-4">
              {item.label}:
            </strong>
            <span className="w-full sm:w-2/3 text-left">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step4;
