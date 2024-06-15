import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4 h-[50vh] mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Institution. All rights reserved.</p>
        <p>
          <span className="text-white hover:text-gray-300">Privacy Policy</span> | 
          <span className="text-white hover:text-gray-300"> Terms of Service</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
