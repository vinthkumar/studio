import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="buttoncolor text-white py-10 w-full">
      <div className="container mx-auto px-2">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row px-3 md:px-1 justify-between items-start md:items-center">
          {/* Text Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold">
              Book, Plan, Celebrate <br />
              <span className="text-white">Your Perfect Wedding Awaits</span>.
            </h2>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-5 h-5 text-white" />
              <span className="text-white">
                Sannathi St, Thirukadaiyur Tamil Nadu 609311, India
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="w-5 h-5 text-white" />
              <span className="text-white">srilakshmigroups30@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="w-5 h-5 text-white" />
              <span className="text-white">+91 9865835660</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Links */}
          <div className="flex gap-6 text-white mb-4 md:mb-0">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#service" className="hover:text-white transition">
              Services
            </a>
            <a href="#gallary" className="hover:text-white transition">
              Gallary
            </a>
            <a href="#testimonial" className="hover:text-white transition">
              Review
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white text-sm">
            © Copyright 2025, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
