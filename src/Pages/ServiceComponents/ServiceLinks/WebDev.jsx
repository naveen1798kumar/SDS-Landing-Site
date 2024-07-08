import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WebBan from "../../../assets/Website-List/blog.jpg";
import WebBan2 from "../../../assets/Website-List/portfolio.jpg";
import WebBan3 from "../../../assets/Website-List/e-commerce.jpg";
import WebBan4 from "../../../assets/Website-List/business.jpg";
import WebBan5 from "../../../assets/Website-List/school.jpg";
import WebBan6 from "../../../assets/Website-List/entertainment.jpg";
import WebBan7 from "../../../assets/Website-List/eventsite.jpg";

import Proj1 from "../../../assets/Website-List/Projects/SDS.jpg"
import Proj2 from "../../../assets/Website-List/Projects/greenappleglobal.jpg"
import Proj3 from "../../../assets/Website-List/Projects/surabhi.jpg"
import Proj4 from "../../../assets/Website-List/Projects/Sowbagya.jpg"

const webTemplates = [
  { title: 'Blogging Website', description: 'A perfect platform for your blogs.', image: WebBan },
  { title: 'Portfolio Site', description: 'Showcase your work and projects.', image: WebBan2 },
  { title: 'eCommerce Site', description: 'Sell your products online with ease.', image: WebBan3 },
  { title: 'Business Website', description: 'Professional website for your business.', image: WebBan4 },
  { title: 'Educational Site', description: 'Online learning platform.', image: WebBan5 },
  { title: 'Entertainment Site', description: 'Platform for entertainment content.', image: WebBan6 },
  { title: 'Non-Profit Website', description: 'Raise awareness for your cause.', image: WebBan7 },
];

const projectTemp = [
  { title: "Namma Palani", image: Proj1, link: "https://nammapalani.org.in/" },
  { title: "Green Apple", image: Proj2, link: "https://greenappleglobal.com/" },
  { title: "Suarbhi Fencing", image: Proj3, link: "https://sds-surabhi.vercel.app/" },
  { title: "Sowbagya", image: Proj4, link: "https://sowbagyafurniture.in/" },
]

const technologies = {
  frontend: ['React', 'Tailwind CSS', 'Bootstrap'],
  backend: ['Node.js', 'Express.js'],
  database: ['MongoDB', 'MySQL', 'Firebase'],
};

function WebDev() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div>

    <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-700 mb-5'>Choose any Web - Templates</h1>
          <h3 className="text-xl font-semibold text-gray-500 mb-3">
          Transforming ideas into <span className="text-yellow-600 underline">Digital Realities</span> Digital solutions for a connected world.
          </h3>
    </div>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-300 gap-8 lg:p-8">

  {webTemplates.map((template, index) => (
  <div
  key={index}
  className="relative bg-black border-2 border-gray-300 rounded-lg shadow-lg w-72 h-96 transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl overflow-hidden group"
  data-aos="fade-up"
  data-aos-delay={index * 100}
  style={{
    backgroundImage: `url(${template.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-end transform transition-transform duration-500 translate-y-full group-hover:translate-y-0">
    <h2 className="text-xl font-semibold text-white mb-2">{template.title}</h2>
    <p className="text-gray-200 mb-4">{template.description}</p>
    <p className="text-gray-200 mb-4">
    Your digital storefront, crafted to attract, engage, and convert visitors
    into customers with sleek design and seamless user experience.</p>
  </div>

  <div className="absolute bottom-0 left-0 w-full h-20 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white tracking-wider font-black text-2xl underline transition-opacity duration-300 opacity-100 group-hover:opacity-0"   
  >

  {template.title}
  </div>
</div>

  ))}

</section>

<div 
        className='bg-gray-500 font-montserrat text-[30px] font-bold text-center p-16 my-10 text-blue-300' 
        data-aos="fade-up"
        data-aos-delay="200"
      >
        "Choose a template or Let us design you a Own site".
      </div>

{/*  */}
{/*  */}


  <h1 className='text-4xl text-center font-bold text-gray-700 mb-5' 
            data-aos="fade-down" 
            data-aos-delay="400"
        >
          Our Projects
  </h1>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-300 gap-8 lg:p-8'>
       
        {projectTemp.map((template, index) => (
  <div
  key={index}
  className="relative bg-black border-2 border-gray-300 rounded-lg shadow-lg w-80 h-56 transform transition-transform duration-300 hover:scale-110 hover:shadow-4xl overflow-hidden group"
  data-aos="fade-up"
  data-aos-delay={index * 100}
  style={{
    backgroundImage: `url(${template.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-70 p-4 flex flex-col justify-end transform transition-transform duration-500 z-30 translate-y-full group-hover:translate-y-0">
    
    <a href={template.link} target="_blank" rel="noopener noreferrer" className="text-center text-gray-200 mb-4 bg-blue-600 rounded-xl p-4">
    Visit Site
    </a>

  </div>

  <div className="absolute bottom-0 left-0 w-full h-20 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white tracking-wider font-black text-2xl underline transition-opacity duration-300 opacity-100 group-hover:opacity-0"   
  >

  {template.title}
  </div>
</div>

  ))}

      </section>

      {/* <section className="p-8">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 mx-2 ${activeTab === 'frontend' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button
            className={`px-4 py-2 mx-2 ${activeTab === 'backend' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </button>
          <button
            className={`px-4 py-2 mx-2 ${activeTab === 'database' ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('database')}
          >
            Database
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {technologies[activeTab].map((tech, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 w-48 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h2 className="text-xl font-semibold mb-2">{tech}</h2>
            </div>
          ))}
        </div>
      </section> */}

    </div>
  );
}

export default WebDev;
