import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-blue-500 hover:scale-110 cursor-pointer"
        >
          SDS Technologies
        </Link>

        {/* Navigation links */}
        <ul className="lg:flex space-x-4 gap-5 hidden sm:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                  : "text-gray-900 hover:text-gray-700 text-lg"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                  : "text-gray-900 hover:text-gray-700 text-lg"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                  : "text-gray-900 hover:text-gray-700 text-lg"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                  : "text-gray-900 hover:text-gray-700 text-lg"
              }
            >
              Courses
            </NavLink>
          </li>
          <li>

              {/* 
                       <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:scale-110 text-white font-bold py-2 px-4 rounded-full text-lg">
  <Link to="/contact" className="text-white">Contact Us</Link>
</button>

              */}

            <Link to="/contact" className="text-gray-900 hover:text-gray-700 text-lg">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Hamburger icon for mobile */}
        <div className="sm:hidden flex justify-end items-center">
          <button onClick={toggleMenu} className="text-gray-900 hover:text-gray-700 focus:outline-none">
            <FaBars className="text-3xl" />
          </button>


{/* ************************************************** */}
          {/* Mobile view */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } p-6 bg-[rgb(229,229,229)] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg`}
          >
            <ul className="flex flex-col gap-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                      : "text-gray-900 hover:text-blue-700 text-lg mb-4"
                  }
                  onClick={toggleMenu}
                >
                  <div className="flex items-center justify-between">
                    <FaBars className="text-xl" /> <div>Home</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                      : "text-gray-900 hover:text-blue-700 text-lg"
                  }
                  onClick={toggleMenu}
                >
                  <div className="flex items-center justify-between">
                    <FaBars className="text-xl" /> <div>About</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                      : "text-gray-900 hover:text-blue-700 text-lg"
                  }
                  onClick={toggleMenu}
                >
                  <div className="flex items-center justify-between">
                    <FaBars className="text-xl" /> <div>Services</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500 pb-2 font-bold text-lg"
                      : "text-gray-900 hover:text-blue-700 text-lg"
                  }
                  onClick={toggleMenu}
                >
                  <div className="flex items-center justify-between">
                    <FaBars className="text-xl" /> <div>Courses</div>
                  </div>
                </NavLink>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-900 bg-orange-500 hover:bg-orange-700 p-2 rounded-md hover:text-white text-lg transition-all duration-500"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
