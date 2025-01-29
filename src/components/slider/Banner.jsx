import React, { useState, useCallback } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleBeforeChange = useCallback((current, next) => {
    setActiveSlide(next);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "10%",
    arrows: false,
    beforeChange: handleBeforeChange,
    lazyLoad: "ondemand",
  };

  const slides = [
    {
      id: 1,
      image: "./banner1.jpg",
      title: "Capture Your Special Day, Frame by Frame",
      description:
        "Let us capture the joy, emotions, and love that make your wedding unforgettable. Book your dream photography today!",
    },
    {
      id: 2,
      image: "./banner2.jpg",
      title: "Cinematic Memories of Your Most Beautiful Day",
      description:
        "Turn your wedding day into a timeless cinematic journey, beautifully crafted to reflect your unique love story.",
    },
    {
      id: 3,
      image: "./banner3.jpg",
      title: "Celebrate Your Love with Nature’s Beauty",
      description:
        "Turn your dream outdoor wedding into a reality. Choose from a variety of stunning locations that bring nature’s elegance to your special day.",
    },
  ];

  return (
    <Slider {...settings} className="relative w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`relative flex items-center custom-margin justify-center transition-transform duration-500 ease-in-out ${
            activeSlide === index ? "scale-105 rounded-lg" : "scale-90"
          }`}>
          <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center px-5 sm:px-8">
              <div className="text-center sm:text-left md:pl-[100px] sm:max-w-lg">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base text-white mb-7">
                  {slide.description}
                </p>
                <a
                  href="/book-appointment"
                  className="bg-orange-600 text-white font-bold text-sm sm:text-base px-6 py-2 rounded hover:bg-orange-700">
                  Get In Touch
                  <span className="text-xs font-bold"> &#9654;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HomeSlider;
