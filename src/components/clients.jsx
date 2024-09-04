import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Importing client logos and background image
import logo1 from '../assets/clients/3dLife.jpg';
import logo2 from '../assets/clients/anthela.png';
import logo3 from '../assets/clients/Aqua games.png';
import logo4 from '../assets/clients/barqbox.png';
import logo5 from '../assets/clients/bm.png';
import logo6 from '../assets/clients/bq games.png';
import logo7 from '../assets/clients/cartlow.png';
import logo8 from '../assets/clients/dsn.png';
import logo9 from '../assets/clients/Hola.png';
import logo10 from '../assets/clients/hoppers.png';
import logo11 from '../assets/clients/meher.png';
import logo12 from '../assets/clients/mutinet.png';
import clientBack from '../assets/clients/client-back.jpg';

// Array of client logos
const clientLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6, 
  logo7, logo8, logo9, logo10, logo11, logo12
];

const Clients = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, // Enable forward and backward buttons
    nextArrow: <button className="slick-next slick-arrow">→</button>,
    prevArrow: <button className="slick-prev slick-arrow">←</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="relative bg-gray-100 py-16" id='clients'>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${clientBack})`, opacity: 0.8 }}
      ></div>
      <div className="relative z-10 container mx-auto px-8">
        
        {/* Heading Container */}
        <div 
          className="relative mb-12 p-6"
          style={{
            backgroundColor: "#4338ca",
            opacity: "0.8",
            boxShadow: "0 0 10px 2px rgba(0, 170, 255, 0.9)",
          }}
        >
          <h1 className="text-6xl font-semibold text-center text-white">
            Our Clients
          </h1>
        </div>
       
        <div className="relative">
          <Slider {...settings}>
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center p-4">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="h-30 w-auto object-contain rounded"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
