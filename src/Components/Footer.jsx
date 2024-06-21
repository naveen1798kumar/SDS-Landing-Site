import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 h-auto">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {/* Logo */}
    <div className="flex items-center justify-center">
      {/* <img src="/path/to/your/logo.png" alt="Company Logo" className="h-12 w-auto" /> */}
      <h1>
      <div className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:text-blue-500 hover:scale-110 cursor-pointer">
          SDS Technologies
        </div>

      </h1>
    </div>

    {/* Navigation */}
    <div className="flex flex-col justify-center">
      <h3 className="text-lg font-semibold mb-2">Navigation</h3>
      <ul className="text-white">
        <li className="mb-1 hover:text-gray-300"><a href="#">Home</a></li>
        <li className="mb-1 hover:text-gray-300"><a href="#">Services</a></li>
        <li className="mb-1 hover:text-gray-300"><a href="#">About Us</a></li>
        <li className="mb-1 hover:text-gray-300"><a href="#">Contact</a></li>
      </ul>
    </div>

    {/* Contact Information */}
    <div className="flex flex-col justify-center">
      <h3 className="text-lg font-semibold mb-2">Contact</h3>
      <p className="text-white">Email: contact@example.com</p>
      <p className="text-white">Phone: +1 (123) 456-7890</p>
    </div>

    {/* Location and Address */}
    <div className="flex flex-col justify-center">
      <h3 className="text-lg font-semibold mb-2">Location</h3>
      <p className="text-white">123 Street, City</p>
      <p className="text-white">State, Country</p>
    </div>
  </div>

  {/* Bottom Disclaimer */}
  <div className="container mx-auto mt-4 text-center">
    <p>&copy; 2024-SDS Solutions. All rights reserved.</p>
    <p>
      <span className="text-white hover:text-gray-300">Privacy Policy</span> | 
      <span className="text-white hover:text-gray-300"> Terms of Service</span>
    </p>
  </div>
</footer>

  );
}

export default Footer;
