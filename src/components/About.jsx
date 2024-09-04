import React from 'react';

const About = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center py-20 px-6"
      style={{ backgroundImage: "url('/src/assets/about back.jpg')", backgroundColor: 'rgba(0, 0, 0, 0.3)', backgroundBlendMode: 'overlay' }}
    >
      <div className="bg-indigo-900 bg-opacity-70 p-10 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">About <span className='text-amber-500'>FCC</span></h2>
        <p className="text-xl text-white">
          At FCC, we understand that navigating the intricate landscape of finance, taxation, and accounting can be a daunting task.
          That's where we come in—your reliable partner in financial excellence, with a commitment to precision, transparency, and growth.
          We provide a wide range of financial services to businesses and individuals alike.
        </p>
      </div>
    </div>
  );
};

export default About;
