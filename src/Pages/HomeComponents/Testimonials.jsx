import React from 'react';

function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">What Our Clients Say</h2>
    <div className="grid gap-6 md:grid-cols-3">

      {/* Card 1 */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg " data-aos="fade-up" data-aos-delay="100">
        
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 transition-opacity duration-300 cursor-pointer hover:opacity-100"></div>

        <div className="relative z-10">
          <p className="text-lg font-semibold mb-2">John Doe</p>
          <p className="text-gray-700 mb-4">"Amazing service! The team was very professional and the project was completed on time. Highly recommend!"</p>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="John Doe" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-900">CEO, Company A</p>
              <p className="text-sm text-gray-500">January 15, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
        
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100 cursor-pointer"></div>
        
        <div className="relative z-10">
          <p className="text-lg font-semibold mb-2">Jane Smith</p>
          <p className="text-gray-700 mb-4">"Exceptional quality and attention to detail. The team went above and beyond our expectations."</p>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Jane Smith" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-900">CTO, Company B</p>
              <p className="text-sm text-gray-500">February 20, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">

        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100 cursor-pointer"></div>

        <div className="relative z-10">
          <p className="text-lg font-semibold mb-2">Sam Wilson</p>
          <p className="text-gray-700 mb-4">"Fantastic experience! The project was handled with great professionalism and expertise."</p>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Sam Wilson" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="text-sm font-medium text-gray-900">Manager, Company C</p>
              <p className="text-sm text-gray-500">March 10, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Testimonials;
