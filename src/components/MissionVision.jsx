import React from 'react';
import missionPic from '../assets/mission pic.jpg';

const MissionVision = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-stretch bg-indigo-800 py-16 px-6 lg:px-24"
      id = "mission& vision">
        <div className="w-full lg:w-2/3 flex flex-col justify-between">
          {/* Mission Section */}
          <div className="flex flex-col justify-center mb-12 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative">
              Our Mission
              <span className="absolute bottom-[-6px] left-0 w-[150px] h-[4px] bg-amber-500"></span>
              <span className="absolute bottom-[-14px] left-0 w-[120px] h-[3px] bg-amber-500"></span>
              
            </h2>
            <p className="text-sm sm:text-lg text-white mt-2">
              At FCC, our mission is to empower individuals and businesses with the knowledge, tools, and strategies they need to achieve financial success and peace of mind.
              We are dedicated to providing exceptional financial management, bookkeeping, audit, and taxation services that simplify complexity, ensure transparency, and foster growth.
              Our commitment to integrity, personalized solutions, and ethical practices is unwavering as we partner with our clients on their journey to financial excellence.
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col justify-center my-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative">
              Our Vision
              <span className="absolute bottom-[-6px] left-0 w-[150px] h-[4px] bg-amber-500"></span>
              <span className="absolute bottom-[-14px] left-0 w-[120px] h-[3px] bg-amber-500"></span>
              
            </h2>
            <p className="text-sm sm:text-lg text-white mt-2">
              We aspire to be recognized not only for our expertise but also for our unwavering dedication to the financial well-being of our clients.
              We envision a future where every individual and business can confidently navigate the financial landscape, secure their financial future,
              and achieve their dreams with the support and guidance of FCC. Our commitment to ethical practices, continuous learning, and technology-driven
              solutions will be the driving force behind our evolution as a trusted partner in financial success.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pl-12 lg:items-stretch">
          <img
            src={missionPic}
            alt="Mission"
            className="rounded-lg shadow-xl w-full object-cover"
            style={{ maxHeight: '100%' }}
          />
        </div>
      </div>
    </>
  );
};

export default MissionVision;
