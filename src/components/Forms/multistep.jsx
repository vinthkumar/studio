import React, { useState } from "react";
import emailjs from "emailjs-com";
import Step1 from "./step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import StepIndicator from "./StepIndicator";

const MultistepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    date: "",
    requirements: "",
  });

  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const disableDevTools = () => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      // alert("Right-click is disabled during form submission.");
    });

    document.addEventListener("keydown", (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
        // alert("Developer tools are disabled during form submission.");
      }
    });
  };

  const enableDevTools = () => {
    document.removeEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    document.removeEventListener("keydown", (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
      }
    });
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setError((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const nextStep = () => {
    let newError = {};

    if (currentStep === 1 && !formData.requirements) {
      newError.requirements = "Please select a requirement to proceed.";
    }
    if (currentStep === 2 && !formData.date) {
      newError.date = "Please select a date to proceed.";
    }
    if (currentStep === 3) {
      if (!formData.name) newError.name = "Name is required.";
      if (!formData.email) newError.email = "Email is required.";
      if (!formData.phone) newError.phone = "Phone number is required.";
      if (!formData.city) newError.city = "City is required.";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleFormSubmit = () => {
    if (loading) return;
    setLoading(true);
    disableDevTools();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          console.log("Email sent successfully");
          setLoading(false);
          enableDevTools();
          nextStep();
        },
        (error) => {
          console.error("Error sending email:", error);
          setLoading(false);
          enableDevTools();
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 min-h-screen pt-2">
      <div className="flex justify-center items-center md:mb-[400px]">
        <div className="hidden md:block">
          <img src="/form-image3.png" alt="Form" />
        </div>
        <div className="max-w-6xl mx-auto md:absolute md:center-0 md:top-[370px] shadow-md bg-white p-10 rounded-lg mb-5 flex flex-col">
          {currentStep < 5 && <StepIndicator currentStep={currentStep} />}

          <div className="flex-grow">
            {currentStep === 1 && (
              <Step1
                formData={formData}
                handleInputChange={handleInputChange}
                error={error.requirements}
              />
            )}
            {currentStep === 2 && (
              <Step2
                formData={formData}
                handleInputChange={handleInputChange}
                error={error.date}
              />
            )}
            {currentStep === 3 && (
              <Step3
                formData={formData}
                handleInputChange={handleInputChange}
                error={error}
              />
            )}
            {currentStep === 4 && <Step4 formData={formData} />}
            {currentStep === 5 && <Step5 />}
          </div>

          {currentStep < 5 && (
            <div className="flex justify-between mt-4">
              {currentStep > 1 && (
                <button
                  onClick={prevStep}
                  className="bg-green-300 font-bold text-black px-4 py-2 rounded hover:bg-gray-600">
                  Previous
                </button>
              )}
              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="buttoncolor font-bold text-white px-4 py-2 rounded hover:bg-blue-600">
                  Next
                </button>
              ) : (
                <button
                  onClick={handleFormSubmit}
                  disabled={loading}
                  className={`bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}>
                  {loading ? "Processing..." : "Book Now"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultistepForm;
