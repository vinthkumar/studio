import React from "react";

const Step2 = ({ handleInputChange, formData, error }) => {
  // Get the current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div>
      <h2 className="text-2xl mb-4">Select Date</h2>
      <input
        id="date"
        name="date"
        type="date"
        value={formData.date}
        onChange={(e) => handleInputChange("date", e.target.value)}
        className={`w-full p-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded mb-4`}
        aria-label="Date"
        required
        min={currentDate}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Step2;
