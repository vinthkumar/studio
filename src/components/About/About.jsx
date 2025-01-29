import React from "react";

function About() {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="font-bold text-3xl mb-6">
            Dedicated to Quality, Driven by Passion
          </h2>
          <p className="text-base md:w-[500px] text-justify mx-auto md:mx-0">
            We are in this field since 1987. We value Quality and Customer
            Service as our top priority. We use modern technology according to
            current standards and keep ourselves frequently upgraded. We provide
            top-notch quality pictures and videos, and our staff is well-trained
            to offer the best service. We specialize in the best Thirukadaiyur
            photography & videography, ensuring that your precious moments are
            captured flawlessly. Believe us, and we will create the best
            memories for your family.
          </p>
          <a
            href="/book-appointment"
            className="px-6 py-3 buttoncolor font-bold w-[150px] mx-auto md:mx-0 mt-6 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Book Now
          </a>
        </div>

        {/* Image Section */}
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('/about-bg.jpg')" }}>
          <div className="flex justify-center md:justify-center">
            <img
              src="/about-image2.png"
              className="w-full px-14 md:px-1 md:max-w-sm rounded-lg"
              alt="welcome-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
