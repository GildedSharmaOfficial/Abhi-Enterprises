import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Quality Building Materials & Iron
            </h1>
            <p className="mt-4 text-gray-600">
              Abhi Enterprises provides the best materials for all your construction needs. From cement to iron rods, we have everything you need to build your dreams.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-700">
              Shop Now
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Building materials"
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
