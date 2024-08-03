import React from 'react';
import { motion } from "framer-motion";

const testimonials = [
  {
    name: 'John Doe',
    imageUrl: 'https://via.placeholder.com/150',
    text: 'Abhi Enterprises provided excellent service and high-quality materials. Highly recommended!',
    designation: 'Project Manager at XYZ Construction'
  },
  {
    name: 'Jane Smith',
    imageUrl: 'https://via.placeholder.com/150',
    text: 'The team at Abhi Enterprises is knowledgeable and very helpful. Their products are top-notch.',
    designation: 'Architect at ABC Design'
  },
  {
    name: 'Michael Brown',
    imageUrl: 'https://via.placeholder.com/150',
    text: 'Fast delivery and great customer service. I will definitely be using Abhi Enterprises again.',
    designation: 'Builder at DEF Builders'
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <section className="bg-[#D2D5B8] py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Testimonials</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-center py-20"
      >
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="mb-4">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-20 h-20 object-cover rounded-full mx-auto"
                  />
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
