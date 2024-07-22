import React from 'react';


const blogPosts = [
  {
    id: 1,
    title: 'Understanding the Importance of Quality Building Materials',
    imageUrl: 'https://via.placeholder.com/300',
    summary: 'Quality building materials are crucial for ensuring the longevity and safety of your construction projects. Learn why it matters and how to choose the best materials.'
  },
  {
    id: 2,
    title: 'Top 10 Tips for Efficient Construction Project Management',
    imageUrl: 'https://via.placeholder.com/300',
    summary: 'Efficient project management is key to the success of any construction project. Discover our top 10 tips to keep your projects on track and within budget.'
  },
  {
    id: 3,
    title: 'The Future of Sustainable Construction',
    imageUrl: 'https://via.placeholder.com/300',
    summary: 'Sustainability in construction is becoming increasingly important. Explore the latest trends and technologies driving the future of sustainable building.'
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div>
      <main className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Blog</h2>
          <div className="flex flex-wrap -mx-4">
            {blogPosts.map((post) => (
              <div key={post.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.summary}</p>
                    <a
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
