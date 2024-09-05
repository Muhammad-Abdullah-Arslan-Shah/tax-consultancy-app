import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import About from './About';
import MissionVision from './MissionVision';
import Services from './services';
import Members from './members';
import Clients from './clients';
import ContactUs from './Contact';
import Footer from './Footer';
import { FaArrowUp } from 'react-icons/fa'; // Icon for the button


function Home() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust scroll position as needed
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar/>
      <About/>
      <Services/>
      <Members/>
      <Clients/>
      <MissionVision/>
      <ContactUs/>
      <Footer/>

      {showScrollToTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}

      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #000;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
          z-index: 1000;
        }

        .scroll-to-top:hover {
          background-color: #555;
        }
      `}</style>
    </>
  );
}

export default Home;
