import React from 'react';
import member1 from '../assets/members/asim.png';
import member2 from '../assets/members/jawad.png';
import member3 from '../assets/members/saad.png';
import member4 from '../assets/members/waqar.png';

const membersData = [
  {
    name: "Muhammad Asim - ACA",
    description: "Asim has a vast experience in the field of taxation, financial reporting, and business development. Asim has working experience of PKF International as manager and has served Industry for 10 years.",
    imageUrl: member1,
    bgColor: 'bg-indigo-500',
  },
  {
    name: "Muhammad Waqar - ACA",
    description: "Waqar has vast experience in financial advisory, audit, and taxation. Waqar has been working in the industry for 14 years and has strong business acumen and leadership skills.",
    imageUrl: member4,
    bgColor: 'bg-green-500',
  },
  {
    name: "Saad Ahmad Zubairi – ACA, APFA",
    description: "Saad is a seasoned financial professional with vast experience in business development, financial reporting, and taxation. Saad started his journey from EY Ford Rhodes and has working experience of EY Qatar as well.",
    imageUrl: member3,
    bgColor: 'bg-red-500',
  },
  {
    name: "Jawad Hassan – M.com, CMA, AIPA",
    description: "Jawad has vast experience overseeing and supervising the organization’s Tax operations, ensuring Tax compliance, Returns, Exemptions, and Correspondences with Authorities.",
    imageUrl: member2,
    bgColor: 'bg-blue-500',
  },
];

const Members = () => {
  return (
    <section className="bg-gray-100 py-16" id='teammembers'>
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-semibold text-center text-indigo-800 mb-12">
          Meet <span className='text-amber-500'>Our Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {membersData.map((member, index) => (
            <div
              key={index}
              className={`${member.bgColor} shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105`}
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-full w-32 h-32 mb-4 object-cover border-4 border-white"
              />
              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-white text-center">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
