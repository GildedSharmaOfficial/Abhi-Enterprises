import React from 'react';

const blogPosts = [
  {
    title: 'The Importance of Quality Building Materials',
    imageUrl: 'https://via.placeholder.com/600x400',
    summary: 'Learn why using high-quality building materials is crucial for any construction project.',
    link: '/blog/importance-of-quality-building-materials',
    date: 'July 15, 2024'
  },
  {
    title: 'Top 10 Tips for Efficient Construction',
    imageUrl: 'https://via.placeholder.com/600x400',
    summary: 'Discover the top 10 tips to ensure your construction project runs smoothly and efficiently.',
    link: '/blog/top-10-tips-for-efficient-construction',
    date: 'July 10, 2024'
  },
  {
    title: 'How to Choose the Right Iron Products',
    imageUrl: 'https://via.placeholder.com/600x400',
    summary: 'A guide on selecting the best iron products for your specific construction needs.',
    link: '/blog/how-to-choose-right-iron-products',
    date: 'July 5, 2024'
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Blog Posts</h2>
        <div className="flex flex-wrap -mx-4">
          {blogPosts.map((post) => (
            <div key={post.title} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <a
                    href={post.link}
                    className="mt-4 inline-block text-blue-600 hover:text-blue-500 font-semibold"
                  >
                    Read More
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

export default Blog;
