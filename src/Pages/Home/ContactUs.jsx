import React from 'react';
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="bg-[#D2D5B8] py-12">
      <div className="container mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">Contact Us</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-center py-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold text-center rounded-lg p-2 bg-white text-gray-800 mr-3">Reach To Us</h3>
            <p className="text-gray-600 my-6 ml-11">
              If you have any questions or need assistance, feel free to reach out to us. Our team is here to help you with all your needs.
            </p>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-600 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h3v11H3zM21 10h-3v11h3zM10 3h4v18h-4z" />
              </svg>
              <p className="text-gray-600">1234 Main St, Cityville, ST 12345</p>
            </div>
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-600 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
              </svg>
              <p className="text-gray-600">info@abhi-enterprises.com</p>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6a9 9 0 0118 0v12a9 9 0 01-18 0V6z" />
              </svg>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form action="#" method="POST" className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder='Your Full Name'
                />
              </div>
              <div className="mb-4">
                <label htmlFor="number" className="block text-gray-700 text-sm font-semibold mb-2">Mobile Number</label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder='Mobile Number'
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  placeholder='What is your Requirement!'
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
