// ProductPage.js
import React, { useState } from 'react';

const ProductPage = () => {
  const [sort, setSort] = useState('default');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const products = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 200 },
    { id: 3, name: 'Product 3', category: 'Category 1', price: 150 },
    { id: 4, name: 'Product 4', category: 'Category 2', price: 250 },
    // Add more products as needed
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'priceAsc') return a.price - b.price;
    if (sort === 'priceDesc') return b.price - a.price;
    return 0;
  });

  const filteredProducts = sortedProducts.filter(
    (product) => categoryFilter === 'all' || product.category === categoryFilter
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex lg:flex-row justify-between mb-6">
        <div className="mb-4 lg:mb-0">
          {/* <label className="block text-sm font-medium text-gray-700">Filter by Category</label> */}
          <select
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">Filter</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            {/* Add more categories as needed */}
          </select>
        </div>

      </div>
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-gray-800 font-semibold mt-2">Price: ${product.price}</p>
            <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
