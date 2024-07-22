import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
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
              src="https://via.placeholder.com/600x400"
              alt="About us"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
