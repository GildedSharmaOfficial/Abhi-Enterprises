import React from "react";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-[#D2D5B8]">
          <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-center py-20"
      >
      <div className="container mx-auto px-6 py-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-around px-5">
          <div className="w-full md:w-1/2">
            <div className="animate-fadeIn items-center flex flex-col">
              <h1 className="flex flex-col font-bold text-gray-800 gap-5">
                <span className="text-5xl">Welcome To</span><span className="text-4xl"> Abhi Enterprises</span>
              </h1>
              <p className="text-lg text-gray-600 mt-4">
                Your trusted partner in building materials.
              </p>

            <button className="bg-[#1F2937] text-white px-6 py-3 mt-10 rounded-md shadow-lg hover:bg-white hover:text-black transition duration-300 transform hover:scale-105">
              Get Started
            </button>
            </div>
            
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
     
            <img
              src="https://firebasestorage.googleapis.com/v0/b/abhi-enterprises-ea0ec.appspot.com/o/Banner%20Images%2F1569506860751-removebg-preview.png?alt=media&token=cf2e5bac-6153-4098-bbca-da066f20bc3d"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>
            </motion.div>
    </section>
  );
};

export default HeroSection;
