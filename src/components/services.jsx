import React, { useEffect, useState } from 'react';
import { useTrail, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer'; // Import the intersection observer hook
import audit from '../assets/services/audit pic.jpg';
import tax from '../assets/services/tax.png';
import corporate from '../assets/services/corporate.jpg';
import bussiness from '../assets/services/bussiness.jpg';

const servicesData = [
  {
    title: "Audit & Assurance",
    items: [
      "Statutory Audit",
      "Internal Audit",
      "Tax Audits",
      "Inspection and Investigation",
      "Establishing and reviewing Internal Controls",
      "Definition of SOPs",
    ],
    imageUrl: audit,
  },
  {
    title: "Tax & Litigation Support",
    items: [
      "Income Tax Returns",
      "Sales Tax returns",
      "Provisional Tax Return and Compliance (PRA, SRB, KPRA)",
      "Assessment Proceeding Facility",
      "Income Tax Appellate and ITAT Facility",
    ],
    imageUrl: tax,
  },
  {
    title: "Corporate Compliances",
    items: [
      "Company Registration",
      "SECP Compliances",
      "Annual Returns Filing",
      "EOBI, PESSI Compliances",
      "Statutory Due Diligence",
    ],
    imageUrl: corporate,
  },
  {
    title: "Business Development",
    items: [
      "Feasibility Analysis",
      "Business Plans",
      "Financing Arrangements",
      "HR Onboarding and Allied Services",
    ],
    imageUrl: bussiness,
  },
];

const Services = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has been triggered

  // Check if the screen size is large or not
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setIsLargeScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsLargeScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  // Use the intersection observer to start the animation when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once when it comes into view
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  // Define the trail animation
  const trail = useTrail(servicesData.length, {
    from: { opacity: 0.6, transform: 'translateX(-50px)' },
    to: { opacity: inView ? 1 : 0.6, transform: inView ? 'translateX(0px)' : 'translateX(-50px)' },
    config: { tension: 220, friction: 30 },
    delay: 100,
    immediate: !isLargeScreen, // Disable animation on small screens
    onRest: () => setHasAnimated(true), // Track if the animation has run once
  });

  return (
    <section className="bg-gray-100 py-16" id="services" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-semibold text-center text-indigo-800 mb-12">
          Our <span className="text-amber-500"> Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trail.map((style, index) => (
            <animated.div
              key={index}
              style={style}
              className="bg-indigo-700 shadow-2xl rounded-lg p-6 transform transition duration-500 hover:scale-105 relative overflow-hidden"
            >
              <div
                className="h-48 w-full bg-cover bg-center rounded-t-lg"
                style={{ backgroundImage: `url(${servicesData[index].imageUrl})` }}
              ></div>
              <div className="p-4 relative">
                <div className="absolute top-0 right-0 h-10 w-10 bg-white transform rotate-45 origin-top-right"></div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {servicesData[index].title}
                </h3>
                <ul className="text-white space-y-2">
                  {servicesData[index].items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center border-b pb-2 hover:text-gray-800 transition duration-300"
                    >
                      <span className="mr-2 text-green-500">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zM6.857 11.433 4.614 9.2a.5.5 0 0 1 .707-.707l1.536 1.536 4.707-4.707a.5.5 0 0 1 .707.707l-5.25 5.25a.5.5 0 0 1-.707 0z" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
