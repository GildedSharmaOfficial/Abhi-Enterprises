import React from 'react';
import ProductCategories from '../../Components/ProductCategories';


// Example product data
const products = [
  {
    id: 1,
    name: 'Iron Rods',
    imageUrl: 'https://via.placeholder.com/300x200',
    description: 'High-quality iron rods for construction projects.',
    price: '$120.00'
  },
  {
    id: 2,
    name: 'Cement Bags',
    imageUrl: 'https://via.placeholder.com/300x200',
    description: 'Premium cement bags for durable construction.',
    price: '$10.00'
  },
  {
    id: 3,
    name: 'Bricks',
    imageUrl: 'https://via.placeholder.com/300x200',
    description: 'Solid bricks for building sturdy structures.',
    price: '$0.50 each'
  },
  // Add more products as needed
];

const ProductPage = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <ProductCategories />
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h2>
          <div className="flex flex-wrap -mx-4 mt-8">
            {products.map((product) => (
              <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-gray-800 font-bold mb-4">{product.price}</p>
                    <button className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
