import React from "react";

const Step1 = ({ formData, handleInputChange, error }) => (
  <div>
    <h2 className="text-2xl mb-4">Select Your Package</h2>
    <select
      required
      value={formData.requirements}
      onChange={(e) => handleInputChange("requirements", e.target.value)}
      className={`w-full p-2 border ${
        error ? "border-red-500" : "border-gray-300"
      } rounded mb-4`}>
      <option value="">Select Your Package</option>
      <option value="Photography">Photography</option>
      <option value="Videography">Videography</option>
      <option value="Live Streaming">Live Streaming</option>
      <option value="Outdoor Shooting">Outdoor Shooting</option>
    </select>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default Step1;
