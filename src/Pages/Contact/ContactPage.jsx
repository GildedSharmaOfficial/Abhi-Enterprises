import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server or email)
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Feel free to reach out to me via the following contact details:
          </p>
          <ul className="list-none space-y-2">
            <li><strong>Name:</strong> Kundan Kumar Sharma</li>
            <li><strong>Email:</strong> kundan@example.com</li>
            <li><strong>Phone:</strong> +123 456 7890</li>
            <li><strong>Address:</strong> 123 Street Name, City, Country</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Your Full Name'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Mobile Number'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder='What is your Requirement!'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
