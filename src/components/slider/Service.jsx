import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Service() {
  const slides = [
    {
      image: "/service-image1.png",
      title: "Wedding Photography",
      description:
        "Capture your special moments with our expert wedding photography services.",
    },
    {
      image: "/service-image3.png",
      title: "Wedding Videography",
      description: "Relive your big day with cinematic wedding videography.",
    },
    {
      image: "/service-image6.png",
      title: "Outdoor Shoots",
      description:
        "Beautiful outdoor shoots that make your wedding moments unforgettable.",
    },
    {
      image: "/service-image4.png",
      title: "Live Streaming",
      description:
        "Aerial shots for a stunning view of your wedding celebrations.",
    },
  ];

  return (
    <div className="service-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-item px-2">
            <div className="bg-white">
              <img src={slide.image} alt={slide.title} className="w-full" />
            </div>
            <div className="bg-green-300 shadow py-5 px-5">
              <h2 className="font-bold text-xl">{slide.title}</h2>
              <p className="text-[12px] mt-3">{slide.description}</p>
              <div className="flex justify-center md:justify-start">
                <a
                  href="/book-appointment"
                  className="mt-4 px-6 py-2 font-semibold buttoncolor text-white rounded hover:bg-blue-600 text-center">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Service;
