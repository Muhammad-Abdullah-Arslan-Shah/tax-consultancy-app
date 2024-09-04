import React from "react";
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
    imageUrl: audit, // Replace with actual image URL
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
    imageUrl: tax, // Replace with actual image URL
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
    imageUrl: corporate, // Replace with actual image URL
  },
  {
    title: "Business Development",
    items: [
      "Feasibility Analysis",
      "Business Plans",
      "Financing Arrangements",
      "HR Onboarding and Allied Services",
    ],
    imageUrl: bussiness, // Replace with actual image URL
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-16 "
    id = "services">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-semibold text-center text-indigo-800 mb-12">
          Our <span className="text-amber-500"> Services</span>
          
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl rounded-lg p-6 transform transition duration-500 hover:scale-105 relative overflow-hidden"
            >
              <div
                className="h-48 w-full bg-cover bg-center rounded-t-lg"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              ></div>
              <div className="p-4 relative">
                <div className="absolute top-0 right-0 h-10 w-10 bg-white transform rotate-45 origin-top-right"></div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  {service.title}
                </h3>
                <ul className="text-gray-600 space-y-2">
                  {service.items.map((item, idx) => (
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
