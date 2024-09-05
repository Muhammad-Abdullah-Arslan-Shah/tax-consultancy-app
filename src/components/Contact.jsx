import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [messageStatus, setMessageStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_o8w0dgs',
        'template_5oag29i',
        formData,
        '1oPiFi8lUgVd3TUPv'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setMessageStatus('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          setMessageStatus('Failed to send message. Please try again.');
        }
      );

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 py-16 overflow-x-hidden"
    id ="contact">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-5xl font-bold text-center text-indigo-500 mb-12">
          Get in Touch <span className="text-amber-500">with Us</span>
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-indigo-700 to-indigo-700 p-8 text-white flex flex-col ">
            <h2 className="text-3xl font-semibold mb-6 mt-5">Contact Information</h2>
            
            {/* Phone */}
            <div className="mb-6 flex items-start">
              <FaPhoneAlt className="text-amber-500 text-2xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Phone Numbers</h3>
                <ul className="mt-2 space-y-1">
                  <li>+923454784733</li>
                  <li>+923314254181</li>
                  <li>+924235791046</li>
                </ul>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6 flex items-start">
              <FaEnvelope className="text-amber-500 text-2xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="mt-2">FinancialCrustConsulting@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-amber-500 text-2xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Office Address</h3>
                <p className="mt-2">
                  Office # 20 & 21, 4th Floor, Land Mark Plaza, Jail Road, Lahore.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
            {/* Message status */}
            {messageStatus && (
              <p className={`mt-4 text-center text-lg ${messageStatus.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                {messageStatus}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
