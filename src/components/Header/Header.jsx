import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const offsetValue = -80;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-green-300" : "bg-white"
      }`}>
      <div className="container mx-auto px-4 flex items-center justify-between py-2">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/">
            <img
              src="./main-logo1.png"
              alt="Logo"
              width={125}
              className="object-contain"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={offsetValue}
            className="hover:text-blue-700 text-lg font-semibold cursor-pointer">
            About
          </ScrollLink>
          <ScrollLink
            to="service"
            smooth={true}
            duration={500}
            offset={offsetValue}
            className="hover:text-blue-500 text-lg font-semibold cursor-pointer">
            Service
          </ScrollLink>
          <ScrollLink
            to="gallery"
            smooth={true}
            duration={500}
            offset={offsetValue}
            className="hover:text-blue-500 text-lg font-semibold cursor-pointer">
            Gallery
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={offsetValue}
            className="hover:text-blue-500 text-lg font-semibold cursor-pointer">
            Contact
          </ScrollLink>
        </nav>

        {/* Button Section */}
        <div className="hidden lg:block">
          <a
            href="/book-appointment"
            className="buttoncolor text-white py-2 px-4 font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}>
            Book Now
          </a>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className="lg:hidden">
          <button
            className="text-gray-700 text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Sidebar Menu (Mobile Only) */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}>
          <div className="flex justify-end p-4">
            <button
              className="text-white text-2xl"
              onClick={() => setIsMenuOpen(false)}>
              <FiX />
            </button>
          </div>
          <nav className="flex flex-col items-center">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={offsetValue}
              className="text-white py-2 px-4 hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}>
              About
            </ScrollLink>
            <ScrollLink
              to="service"
              smooth={true}
              duration={500}
              offset={offsetValue}
              className="text-white py-2 px-4 hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}>
              Service
            </ScrollLink>
            <ScrollLink
              to="gallery"
              smooth={true}
              duration={500}
              offset={offsetValue}
              className="text-white py-2 px-4 hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}>
              Gallery
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={offsetValue}
              className="text-white py-2 px-4 hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </ScrollLink>
            <a
              href="/book-appointment"
              className="buttoncolor text-white py-2 px-4 font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}>
              Book Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
