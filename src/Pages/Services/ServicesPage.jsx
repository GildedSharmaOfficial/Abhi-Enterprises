import React from 'react';


const services = [
  {
    id: 1,
    name: 'Construction Material Supply',
    imageUrl: 'https://via.placeholder.com/300',
    description: 'We provide high-quality construction materials including cement, bricks, iron rods, and more.'
  },
  {
    id: 2,
    name: 'Consultation Services',
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Expert consultation services for your building projects, helping you choose the best materials and methods.'
  },
  {
    id: 3,
    name: 'Delivery Services',
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Fast and reliable delivery services to ensure your materials arrive on time and in perfect condition.'
  },
  // Add more services as needed
];

const ServicesPage = () => {
  return (
    <div>

      <main className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            {services.map((service) => (
              <div key={service.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
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

export default ServicesPage;
