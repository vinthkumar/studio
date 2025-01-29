import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "0",
    focusOnSelect: true,
    beforeChange: (current, next) => {
      const slides = document.querySelectorAll(".slick-slide");
      slides.forEach((slide) => {
        slide.classList.remove("animate-slide");
      });
      setTimeout(() => {
        slides[next].classList.add("animate-slide");
      }, 10);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slides = [
    { id: 1, src: "/gallary-1.jpeg", caption: "customer1" },
    { id: 2, src: "/gallary-2.jpeg", caption: "customer2" },
    { id: 3, src: "/gallary-3.jpeg", caption: "customer3" },
    { id: 4, src: "/gallary-4.jpeg", caption: "customer4" },
    { id: 5, src: "/gallary-5.jpeg", caption: "customer5" },
  ];

  return (
    <div className="custom-carousel px-2 mt-10 pb-10">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative transform transition-transform duration-500 ease-in-out animate-slide">
            <img
              src={slide.src}
              alt={slide.caption}
              className="rounded-lg w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
