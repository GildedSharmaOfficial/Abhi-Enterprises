import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Cement', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/abhi-enterprises-ea0ec.appspot.com/o/Product%20Images%2FCements%20Brands.png?alt=media&token=67bd66b5-f832-4eed-95df-2520dca32835', link: '/products/cement' },
  { name: 'Iron Rods', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/abhi-enterprises-ea0ec.appspot.com/o/Product%20Images%2FIron.png?alt=media&token=306244f7-7a03-4035-b191-a05ff9d229aa', link: '/products/iron-rods' },
  { name: 'Sand', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/abhi-enterprises-ea0ec.appspot.com/o/Product%20Images%2FRed%20Sand.jpg?alt=media&token=81c064a2-e7b7-466b-846e-501d06cc0806', link: '/products/bricks' },
  { name: 'Rofing Sheets', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/abhi-enterprises-ea0ec.appspot.com/o/Product%20Images%2FChadra.jpg?alt=media&token=6e4ee67a-743f-495a-a6d1-92ac2d434707', link: '/products/pipes' },
  // Add more categories as needed
];

const ProductCategories = () => {
  return (
    <section className="bg-[#D2D5B8] py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Product Categories</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="text-center py-20"
      >
        <div className="flex flex-wrap -mx-4">
          
          {categories.map((category) => (
            <div key={category.name} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                  <a
                    href={category.link}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-500 font-semibold"
                  >
                    View Products
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
