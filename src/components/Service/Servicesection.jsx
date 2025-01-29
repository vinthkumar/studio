import React from "react";
import Service from "../slider/Service";

function Servicesection(props) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* First Column */}
        <div className="col-span-12 md:col-span-3 flex flex-col justify-center h-full">
          <div className="p-5 bg-green-300 h-full flex flex-col justify-center rounded-lg shadow-lg">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-3xl mb-5">Our Services</h2>
              <p className="text-base">
                Specializing in photography, videography, outdoor shoots, and
                drone services to capture every breathtaking moment of your
                wedding day.
              </p>
              <a
                href="/book-appointment"
                className="px-4 py-2 buttoncolor font-semibold w-[200px] mt-4 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center inline-block">
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-span-12 md:col-span-9 h-full">
          <div className="h-full flex flex-col justify-between">
            <Service />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicesection;
