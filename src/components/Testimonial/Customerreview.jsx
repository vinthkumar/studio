import React from "react";

const ReviewCard = ({ rating, text, name, role, image }) => (
  <div className="flex flex-col overflow-hidden shadow-xl">
    <div className="flex flex-col justify-between flex-1 p-4 bg-white">
      <div className="flex-1">
        <div className="flex items-center">
          {Array.from({ length: rating }).map((_, idx) => (
            <svg
              key={idx}
              className="w-5 h-5 text-[#FDB241]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <blockquote className="flex-1 mt-8">
          <p className="text-[15px] leading-relaxed text-gray-900 font-pj">
            {text}
          </p>
        </blockquote>
      </div>

      <div className="flex items-center mt-8">
        <img
          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
          src={image}
          alt={name}
        />
        <div className="ml-4">
          <p className="text-base font-bold text-gray-900 font-pj">{name}</p>
          <p className="mt-0.5 text-sm font-pj text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

// Customer Review Section
const CustomerReview = () => {
  const reviews = [
    {
      rating: 5,
      text: "Very professional approach and customer handling is good.. They provide output as per our needs.. Highly recommend the place for photography..",
      name: "Saravanan Palani",
      image: "/icon1.jpg",
    },
    {
      rating: 5,
      text: "Highly Recommended !! Best service .Done a Great job with the photography.Special appreciation for the wonderful  arrangements and Time management.",
      name: "Gaayathri Krishnakumar",
      image: "/icon2.webp",
    },
    {
      rating: 5,
      text: "The photography and video work are well-done. The punctuality in starting the photo and video work is appreciable. The delivery of album and video pendrive is timely and I shall be happy to recommend them to others.",
      name: "Swaminathan Nathan",
      image: "/icon3.jpg",
    },
  ];

  return (
    <section className="">
      <div className="mx-auto px-2">
        <div className="max-w-2xl mx-auto text-white text-center">
          <h2 className="text-3xl font-bold  sm:text-4xl lg:text-4xl">
            Our happy clients say about us
          </h2>
          <p className="mt-4 text-lg">Real reviews from our valued customers</p>
        </div>

        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto mt-10 md:max-w-none lg:gap-10 md:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
