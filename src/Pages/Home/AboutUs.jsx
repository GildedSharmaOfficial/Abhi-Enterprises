import React from 'react';
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-[#D2D5B8] py-12">
      <div className="container mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Us</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-center py-20"
      >
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full m-3 md:w-1/2">
            <p className="text-gray-600 mb-4">
              Abhi Enterprises has been a leading supplier of high-quality building materials and iron products for over a decade. Our mission is to provide reliable products that meet the highest standards of quality and durability.
            </p>
            <p className="text-gray-600 mb-4">
              Our team is dedicated to ensuring customer satisfaction by offering personalized services and support. We work closely with our clients to understand their unique needs and deliver solutions that exceed their expectations.
            </p>
            <p className="text-gray-600">
              We believe in building strong relationships with our customers and partners. Our commitment to excellence and integrity has earned us a reputation as a trusted supplier in the construction industry.
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/abhi-enterprises-ea0ec.appspot.com/o/Product%20Images%2FBeige%20Gray%20Aesthetic%20Photo%20Collage%20Shop%20New%20Collection%20Promotion%20Banner.png?alt=media&token=33e354d5-d4c5-4cbe-a6e3-2a288c961c3f"
              alt="About us"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
