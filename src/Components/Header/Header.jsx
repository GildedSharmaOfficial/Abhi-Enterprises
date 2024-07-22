import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row justify-between items-center">
        <div>
          <Link to="/" className="text-gray-800 text-xl font-bold">
            Abhi Enterprises
          </Link>
        </div>
        <div className="md:hidden w-[60%]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="flex absolute right-5 top-5 text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
           <GiHamburgerMenu className='' />
          </button>
        </div>
        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <Link
            to="/"
            className="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-gray-600 mr-4"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-gray-600 mr-4"
          >
            Products
          </Link>
          <Link
            to="/services"
            className="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-gray-600 mr-4"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-gray-600 mr-4"
          >
            About Us
          </Link>
          <Link
            to="/blog"
            className="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-gray-600 mr-4"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-gray-600"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
