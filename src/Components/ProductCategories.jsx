import React from 'react';

const categories = [
  { name: 'Cement', imageUrl: 'https://via.placeholder.com/150', link: '/products/cement' },
  { name: 'Bricks', imageUrl: 'https://via.placeholder.com/150', link: '/products/bricks' },
  { name: 'Iron Rods', imageUrl: 'https://via.placeholder.com/150', link: '/products/iron-rods' },
  { name: 'Pipes', imageUrl: 'https://via.placeholder.com/150', link: '/products/pipes' },
  // Add more categories as needed
];

const ProductCategories = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Product Categories</h2>
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
      </div>
    </section>
  );
};

export default ProductCategories;
