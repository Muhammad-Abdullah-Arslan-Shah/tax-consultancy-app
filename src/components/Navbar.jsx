import React, { useState } from 'react';
import { FaWhatsapp, FaBars } from 'react-icons/fa'; // Importing icons
import logo from "../assets/logo.png"; // Keeping the logo unchanged

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home', 'Services', 'Mission & Vision', 'Team members', 'Clients', 'Contact'];

  // WhatsAppButton Component with Icon
  const WhatsAppButton = () => (
    <a
      href="https://api.whatsapp.com/send?phone=923454784733"
      target="_blank"
      rel="noopener noreferrer"
      className="flex bg-green-600 text-white px-4 py-2 rounded-3xl hover:bg-green-300 font-bold transition-all duration-300 ease-in-out"
    >
      <FaWhatsapp className="mr-2 h-6 w-6" /> {/* Using WhatsApp icon */}
      WhatsApp
    </a>
  );

  return (
    <nav className="py-1 bg-white">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home">
            <img src={logo} alt="Logo" className="h-48 w-48" /> {/* Keeping the logo */}
          </a>
        </div>

        {/* Links - Centered on large screens */}
        <div
          className={`hidden lg:flex lg:items-center lg:flex-grow justify-center text-xl mr-20`}
        >
          {links.map((text) => (
            <a
              key={text}
              href={`#${text.toLowerCase().replace(' ', '')}`}
              className="block lg:inline-block mx-2 p-1 text-black-300 hover:text-gray-400 border-b-2 border-transparent hover:border-[#172554] transition-all duration-300 ease-in-out"
            >
              {text}
            </a>
          ))}

          {/* WhatsApp Button */}
          <WhatsAppButton />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hover:text-gray-700 focus:outline-none"
          >
            <FaBars className="h-8 w-8 m-2" /> {/* Using hamburger icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out w-full z-20 bg-gray-50 rounded-lg shadow-md  ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div
          className={`w-full flex flex-col items-start transition-transform duration-500 ease-in-out ${
            isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
        >
          {links.map((text, index) => (
            <a
              key={text}
              href={`#${text.toLowerCase().replace(' ', '')}`}
              className={`block w-full mt-2 p-3 pl-6 text-lg text-gray-700 font-semibold hover:text-white hover:bg-[#172554] rounded-lg transition-all duration-300 ease-in-out delay-${
                index * 100
              }`}
            >
              {text}
            </a>
          ))}

          {/* WhatsApp Button */}
          <div className="mt-2 mb-2 w-full flex justify-center">
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
