import React from 'react';

const featuredProducts = [
  { name: 'Product 1', imageUrl: 'https://via.placeholder.com/150', price: '$100', link: '/products/product-1' },
  { name: 'Product 2', imageUrl: 'https://via.placeholder.com/150', price: '$200', link: '/products/product-2' },
  { name: 'Product 3', imageUrl: 'https://via.placeholder.com/150', price: '$300', link: '/products/product-3' },
  { name: 'Product 4', imageUrl: 'https://via.placeholder.com/150', price: '$400', link: '/products/product-4' },
  // Add more products as needed
];

const FeaturedProducts = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
        <div className="flex flex-wrap -mx-4">
          {featuredProducts.map((product) => (
            <div key={product.name} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <a
                    href={product.link}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-500 font-semibold"
                  >
                    View Product
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

export default FeaturedProducts;
