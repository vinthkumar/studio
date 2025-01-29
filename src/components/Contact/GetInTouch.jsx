import React from "react";

function GetInTouch(props) {
  return (
    <div>
      <div className="relative">
        <img
          src="/get-touch3.png"
          alt="first-image"
          class="absolute top-[-70px] left-[-55px] w-[280px] rounded-lg hidden md:block"
        />

        <div class="bg-green-300 px-6 py-8 md:px-10 md:py-10">
          <div class="md:pl-[170px]">
            <h2 class="text-2xl md:text-3xl text-center md:text-left font-bold mb-4">
              Get in Touch
            </h2>
            <p class="md:w-[400px] text-center md:text-left">
              We'd love to hear from you! Feel free to reach out to us through
              any of the methods below. Our team is always ready to assist you.
            </p>
          </div>
        </div>

        <div class="md:absolute top-[-30px] right-6 md:right-[250px] text-white buttoncolor text-center p-4 md:rounded-lg shadow w-full md:max-w-[300px]">
          <div class="mt-4 mb-2">
            <p class="font-bold">Phone</p>
            <p class="font-semibold text-[16px] mt-2">
              <a href="tel:+919865835660" class="hover:underline">
                +91 9865835660
              </a>
            </p>
          </div>
          <div class="mt-2 mb-2">
            <p class="font-bold">Email</p>
            <p class="font-semibold text-[16px] mt-2">
              <a
                href="mailto:srilakshmigroups30@gmail.com"
                class="hover:underline">
                srilakshmigroups30@gmail.com
              </a>
            </p>
          </div>
          <h3 class="font-bold mt-2 mb-2">Address</h3>
          <p class="mb-1 font-semibold mt-2">Sannathi St, Thirukadaiyur</p>
          <p class="font-semibold">Tamil Nadu 609311, India</p>
        </div>

        <img
          src="/get-touch2.png"
          alt="end-image"
          class="absolute top-[-70px] right-[-45px] w-[275px] rounded-lg hidden md:block"
        />
      </div>
    </div>
  );
}

export default GetInTouch;
