import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import back from '../assets/aboutBack.jpg';

const About = () => {
  // Define the spring animation
  const props = useSpring({
    to: { transform: 'scale(1)' },
    from: { transform: 'scale(0.5)' },
    config: { tension: 170, friction: 26 },
  });

  return (
    <div
      className="relative bg-fixed bg-cover bg-center py-20 px-6"
      style={{
        backgroundImage: `url(${back})`, // Correct usage of backgroundImage
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <animated.div
        style={{
          ...props,
          backgroundColor: "#4338ca",
          opacity: "0.8",
          boxShadow: "0 0 10px 2px rgba(0, 170, 255, 0.9)", // Apply the spring animation styles
        }}
        className="bg-indigo-900 bg-opacity-70 p-10 rounded-lg shadow-lg max-w-4xl mx-auto text-center"
        
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          About <span className="text-amber-500">FCC</span>
        </h2>
        <p className="text-xl text-white font-medium">
          At FCC, we understand that navigating the intricate landscape of finance, taxation, and accounting can be a daunting task.
          That's where we come in—your reliable partner in financial excellence, with a commitment to precision, transparency, and growth.
          We provide a wide range of financial services to businesses and individuals alike.
        </p>
      </animated.div>
    </div>
  );
};

export default About;
