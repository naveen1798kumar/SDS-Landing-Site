import React from 'react';
import {Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg p-4 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-blue-500 hover:scale-110 cursor-pointer">
          SDS Technologies
        </div>
        <ul className="flex space-x-4 gap-5">
  <li>
    <NavLink 
      to="/" 
      className={({ isActive }) => 
        isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-2 font-bold'  : 'text-gray-900 hover:text-gray-700'
      }
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/about" 
      className={({ isActive }) => 
        isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-2 font-bold' : 'text-gray-900 hover:text-gray-700'
      }
    >
      About
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/services" 
      className={({ isActive }) => 
        isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-2 font-bold' : 'text-gray-900 hover:text-gray-700'
      }
    >
      Services
    </NavLink>
  </li>
  <li>
    <NavLink 
      to="/courses" 
      className={({ isActive }) => 
        isActive ? 'text-blue-500 border-b-2 border-blue-500 pb-2 font-bold' : 'text-gray-900 hover:text-gray-700'
      }
    >
      Courses Offered
    </NavLink>
  </li>
</ul>

        <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:scale-110 text-white font-bold py-2 px-4 rounded-full text-lg">
  <Link to="/contact" className="text-white">Contact Us</Link>
</button>

      </div>
    </nav>
  );
}

export default Header;


{/* hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 */}
