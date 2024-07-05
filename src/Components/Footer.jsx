import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaServicestack, FaInfoCircle, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
// import {  } from 'react-icons/fa';
import "./Components.css"


function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-500  to-purple-500  p-8 h-auto zoom-animation" >

      <div className='bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-xl' >

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
    {/* Logo */}
    <div className="flex items-center justify-center" >
      {/* <img src="/path/to/your/logo.png" alt="Company Logo" className="h-12 w-auto" /> */}
      <h1>
      <div className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-blue-500 hover:scale-110 cursor-pointer">
          SDS Technologies
        </div>

      </h1>
    </div>

    {/* Navigation */}
    <div className="flex flex-col justify-center p-6 rounded-lg shadow-lg">
    <div className='lg:w-2/5 relative'>
      <h3 className="text-lg font-bold mb-4 font-montserrat relative inline-block">Page Links
      <span className="absolute bottom-0 left-0 w-1/2 md:w-3/4 h-[2px] bg-gradient-to-r from-red-500 to-transparent"></span>
      </h3>
      </div>
      <ul className="text-white space-y-2">
        <li className="flex items-center hover:text-black transition-colors duration-300">
          <FaHome className="mr-2" />
          <Link to="/" onClick={scrollToTop}>Home</Link>
        </li>
        <li className="flex items-center hover:text-black transition-colors duration-300">
          <FaEnvelope className="mr-2" />
          <Link to="/about" onClick={scrollToTop}>About us</Link>
        </li>
        <li className="flex items-center hover:text-black transition-colors duration-300">
          <FaServicestack className="mr-2" />
          <Link to="/services" onClick={scrollToTop} >Services</Link>
        </li>
        <li className="flex items-center hover:text-black transition-colors duration-300">
          <FaInfoCircle className="mr-2" />
          <Link to="/courses" onClick={scrollToTop}>Courses</Link>
        </li>
        
      </ul>
    </div>

    {/* Contact Information */}
    <div className="flex flex-col justify-center p-6 rounded-lg shadow-lg">
    <div className='lg:w-2/5 relative'>
      <h3 className="text-lg font-bold mb-4 font-montserrat relative ">Our Other Links
      <span className="absolute bottom-0 left-0 w-1/2 md:w-3/4 h-[2px] bg-gradient-to-r from-red-500 to-transparent"></span>
      </h3>
      </div>
      <ul className="text-white space-y-2">
      <li className="flex items-center hover:text-gray-500 transition-colors duration-300">
          <FaHome className="mr-2" />
          <Link to="/">Namma Palani </Link>
        </li>
        <li className="flex items-center hover:text-gray-500 transition-colors duration-300">
          <FaServicestack className="mr-2" />
          <a href='https://nammapalani.org.in/' target='blank'>Namma Palani Store</a>
        </li>
      </ul>
    </div>

    {/* Location and Address */}
    {/* md:col-span-4 */}
    <div className="flex flex-col justify-center p-6 rounded-lg shadow-lg ">
      <div className='lg:w-2/5 relative'>
      <h3 className="text-lg font-bold mb-4 font-montserrat relative inline-block">Location
      <span className="absolute bottom-0 left-0 w-1/2 md:w-3/4 h-[2px] bg-gradient-to-r from-red-500 to-transparent"></span>
      </h3>
      </div>
      
      <p className="text-white">123 Street, City</p>
      <p className="text-white">State, Country</p>
    </div>
  </div>

    {/* Social medias */}
    <div className='flex justify-evenly items-evenly gap-5 lg:gap-10 w-full p-6 mt-6 flex-col lg:flex-row rounded-lg shadow-lg bg-gray-400 bg-opacity-30 backdrop-blur-lg'>
    <div className='lg:w-2/5 text-center relative'>
  <h2 className='font-bold text-2xl mb-2 font-montserrat relative inline-block'>
    Our Social-Media Handles
    <span className="absolute bottom-0 left-0 w-1/2 md:w-3/4 h-[2px] bg-gradient-to-r from-red-500 to-transparent"></span>
  </h2>
</div>

      <div className='lg:w-3/5'>   
        <ul className='flex justify-evenly text-2xl font-semibold'>
          <li className='text-blue-900   hover:text-blue-500 transition duration-300 ease-in-out cursor-pointer hover:scale-125'>
            <a href="http://" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                <FaFacebook className='text-4xl' />
                <span className='hidden lg:block'>Facebook</span>
            </a>
          </li>
          <li className='text-pink-900  hover:text-pink-500 transition duration-300 ease-in-out cursor-pointer hover:scale-125'>
            <a href="http://" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                <FaInstagram className='text-4xl' />
                <span className='hidden lg:block'>Instagram</span>
            </a>
          </li>
          <li className='text-red-900  hover:text-red-500 transition duration-300 ease-in-out cursor-pointer hover:scale-125'>
            <a href="http://" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                <FaYoutube className='text-4xl' />
                <span className='hidden lg:block'>Youtube</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

{/* <hr className='  mt-8 '/> */}
  {/* Bottom Disclaimer */}
  <div className="container mx-auto mt-4 text-xl  text-center">
    <p><span className='font-montserrat font-bold text-2xl'>&copy; </span>Copyright 2024 - <span className='font-montserrat font-bold text-white'>SDS Solutions .</span> All rights reserved.</p>
    {/* <p>
      <span className="text-white hover:text-gray-300">Privacy Policy</span> | 
      <span className="text-white hover:text-gray-300"> Terms of Service</span>
    </p> */}
  </div>

      </div>
  
</footer>

  );
}

export default Footer;
