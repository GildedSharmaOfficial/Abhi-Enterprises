import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaCogs, FaShieldAlt, FaWarehouse } from "react-icons/fa";

const services = [
  {
    name: "Fast Delivery",
    description:
      "We provide fast and reliable delivery services for all your construction needs.",
    icon: <FaTruck size={40} className="text-blue-600" />,
  },
  {
    name: "Custom Orders",
    description: "Get materials cut and customized to your specifications.",
    icon: <FaCogs size={40} className="text-blue-600" />,
  },
  {
    name: "Quality Assurance",
    description:
      "All our products are quality assured and meet industry standards.",
    icon: <FaShieldAlt size={40} className="text-blue-600" />,
  },
  {
    name: "Large Inventory",
    description:
      "We have a large inventory to ensure availability of products when you need them.",
    icon: <FaWarehouse size={40} className="text-blue-600" />,
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <section className="bg-[#D2D5B8] py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Services
          </h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-center py-20"
      >
          <div className="flex flex-wrap -mx-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
              >
                <div className="flex flex-col items-center bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
      </motion.div>
        </div>
    </section>
  );
};

export default Services;
