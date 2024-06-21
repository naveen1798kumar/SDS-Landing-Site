import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-blue-500 hover:scale-110 cursor-pointer">
          SDS Technologies
        </Link>

        {/* Hamburger icon for mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-gray-900 hover:text-gray-700 focus:outline-none">
            <FaBars className="text-3xl" />
          </button>
        </div>

        {/* Navigation links */}
        <ul className={`flex lg:flex space-x-4 gap-5 ${isMenuOpen ? 'flex' : 'hidden'} lg:flex`}>
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
              className="text-gray-900 hover:text-gray-700 text-lg"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
              className="text-gray-900 hover:text-gray-700 text-lg"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              activeClassName="text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
              className="text-gray-900 hover:text-gray-700 text-lg"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              activeClassName="text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
              className="text-gray-900 hover:text-gray-700 text-lg"
            >
              Courses Offered
            </NavLink>
          </li>
          <li>
            <Link to="/contact" className="text-gray-900 hover:text-gray-700 text-lg">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
