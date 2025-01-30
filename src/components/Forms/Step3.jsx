import React from "react";

const Step3 = ({ handleInputChange, formData, error }) => (
  <div>
    <h2 className="text-2xl mb-4">Personal Information</h2>
    <input
      type="text"
      placeholder="Name"
      value={formData.name}
      onChange={(e) => handleInputChange("name", e.target.value)}
      className={`w-full p-2 border ${
        error.name ? "border-red-500" : "border-gray-300"
      } rounded mb-4`}
      required
    />
    {error.name && <p className="text-red-500 text-sm">{error.name}</p>}

    <input
      type="email"
      placeholder="Email"
      value={formData.email}
      onChange={(e) => handleInputChange("email", e.target.value)}
      className={`w-full p-2 border ${
        error.email ? "border-red-500" : "border-gray-300"
      } rounded mb-4`}
    />
    {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

    <input
      type="tel"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={(e) => handleInputChange("phone", e.target.value)}
      className={`w-full p-2 border ${
        error.phone ? "border-red-500" : "border-gray-300"
      } rounded mb-4`}
      maxLength={15}
    />
    {error.phone && <p className="text-red-500 text-sm">{error.phone}</p>}

    <input
      type="text"
      placeholder="City"
      value={formData.city}
      onChange={(e) => handleInputChange("city", e.target.value)}
      className={`w-full p-2 border ${
        error.city ? "border-red-500" : "border-gray-300"
      } rounded mb-4`}
    />
    {error.city && <p className="text-red-500 text-sm">{error.city}</p>}
  </div>
);

export default Step3;
