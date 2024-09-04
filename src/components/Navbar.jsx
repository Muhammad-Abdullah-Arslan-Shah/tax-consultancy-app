import React, { useState } from 'react';
import logo from "../assets/logo.png";
import whatsApp from "../assets/whatsApp icon.png";
import hamburger from "../assets/hamburger.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home', 'Services', "About",'Mission', 'Vision', 'Team members', 'Clients', 'Contact'];

  // WhatsAppButton Component
  const WhatsAppButton = () => (
    <a
      href="https://api.whatsapp.com/send?phone=923428747551"
      target="_blank"
      rel="noopener noreferrer"
      className="flex bg-green-300 text-white px-4 py-2 rounded-3xl hover:bg-green-600 font-bold transition-all duration-300 ease-in-out"
    >
      <img
        src={whatsApp}
        alt="WhatsApp"
        className="mr-2 h-8 w-8 items-center"
      />
      WhatsApp
    </a>
  );

  return (
    <nav className="p-1 bg-white">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home">
            <img src={logo} alt="Logo" className="h-40 w-40" />
          </a>
        </div>

        {/* Links - Centered on large screens */}
        <div
          className={`hidden lg:flex lg:items-center lg:flex-grow justify-center text-xl ml-2`}
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
            className="hover:text-black focus:outline-none"
          >
            <img src= {hamburger} alt='hamburger icon' className='h-4 w-4'></img>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out  w-full z-20 ${
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
              className={`block mt-2 p-1 text-black-300 hover:text-black border-b-2 border-transparent hover:border-[#172554] transition-all duration-300 ease-in-out delay-${
                index * 100
              }`}
            >
              {text}
            </a>
          ))}

          {/* WhatsApp Button */}
          <WhatsAppButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
