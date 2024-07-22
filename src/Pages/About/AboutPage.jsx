import React from 'react';


const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'John is the CEO of Abhi Enterprises with over 20 years of experience in the construction industry.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'COO',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'Jane is the COO, overseeing all operational aspects of the company.'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'CTO',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'Mike is the CTO, leading our technology and innovation initiatives.'
  },
  // Add more team members as needed
];

const AboutPage = () => {
  return (
    <div>
      <main className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Abhi Enterprises has been a leading provider of construction materials and services for over a decade. Our commitment to quality and customer satisfaction has made us a trusted name in the industry.
            </p>
            <p className="text-gray-600">
              From humble beginnings, we have grown into a company that serves clients across the region, offering a wide range of products and expert services to meet all construction needs.
            </p>
          </section>
          <section className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to provide the highest quality construction materials and services to our customers. We strive to innovate and improve continuously to meet the evolving needs of the construction industry.
            </p>
          </section>
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Meet Our Team</h3>
            <div className="flex flex-wrap -mx-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h4>
                      <p className="text-gray-600 mb-4">{member.position}</p>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
