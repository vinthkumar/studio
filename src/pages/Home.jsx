import React from "react";
import { Helmet } from "react-helmet";
import HomeSlider from "../components/slider/Banner";
import "../index.css";
import ImageCarousel from "../components/slider/Gallary";
import Customerreview from "../components/Testimonial/Customerreview";
import Servicesection from "../components/Service/Servicesection";
import GetInTouch from "../components/Contact/GetInTouch";
import About from "../components/About/About";

function Home(props) {
  return (
    <div className="bg-home">
      {/* SEO meta tags */}
      <Helmet>
        <title>
          Best Wedding Photography and Videography Online Booking -
          Thirukadaiyur
        </title>
        <meta
          name="description"
          content="We value quality and qustomer service as our top priority. We use the modern technology according to the current standards and keep us upgraded frequently. We provide top notch quality of pictures and videos in Thirukadaiyur."
        />
        <meta name="robots" content="index, follow" />

        {/* Keywords Meta Tag */}
        <meta
          name="keywords"
          content="thirukadaiyur wedding photography,thirukadaiyur wedding videography,thirukadaiyur temple online booking,thirukadaiyur wedding photos and videos online booking,best phographer thirukadaiyur,best videographer thirukadaiyur,thirukadaiyur wedding"
        />

        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Wedding Photography and Videography Online Booking - Thirukadaiyur"
        />
        <meta
          property="og:description"
          content="Capture timeless wedding moments with our professional wedding photography & videographyy services."
        />
        <meta property="og:image" content="/main-logo.png" />
        <meta
          property="og:url"
          content="https://thirukadaiyursrilakshmistudio.com/"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://thirukadaiyursrilakshmistudio.com/"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Wedding Photography & Videography Booking Website",
              "url": "https://thirukadaiyursrilakshmistudio.com/",
              "description": "Capture timeless wedding moments with our professional wedding photography & Videography services."
            }
          `}
        </script>
      </Helmet>

      {/* Page Content */}
      <div className="my-10">
        <HomeSlider />
      </div>

      {/* About Section */}
      <div id="about" className="">
        <div className="container mx-auto px-5 my-10">
          <About />
        </div>
      </div>

      {/* Services Section */}
      <div id="service" className="buttoncolor py-1">
        <div className="relative container mx-auto px-5 my-20">
          <Servicesection />
        </div>
      </div>

      {/* Gallery Section */}
      <div id="gallery" className="py-10">
        <div className="container mx-auto my-10">
          <h2 className="text-3xl font-bold text-center sm:text-4xl lg:text-4xl mb-5">
            Our Gallery
          </h2>
          <p className="text-lg text-center">
            Capturing timeless wedding moments with elegance, love, and artistic
            excellence.
          </p>
          <ImageCarousel />
        </div>
      </div>

      {/* Testimonial Section */}
      <div id="testimonial" className="mt-5 py-10 buttoncolor">
        <div className="container mx-auto px-5 my-10">
          <Customerreview />
        </div>
      </div>

      {/* Get In Touch Section */}
      <div id="contact" className="py-1">
        <div className="container mx-auto px-5 my-20 md:mt-[150px]">
          <GetInTouch />
        </div>
      </div>
    </div>
  );
}

export default Home;
