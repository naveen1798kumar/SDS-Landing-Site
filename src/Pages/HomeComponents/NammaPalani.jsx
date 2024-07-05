import React from 'react'
import LogoImage from "../../assets/namma-palani.png"
import { FaBriefcase } from 'react-icons/fa';


const NammaPalani = () => {
  return (
    <>
       <div className="w-full mt-10 h-auto min-h-screen bg-slate-500 flex flex-col md:flex-row rounded-tl-2xl rounded-tr-2xl bg-opacity-20 backdrop-blur-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
      

          {/* Image Section */}
      <div className="w-full md:w-1/2 h-96 md:h-auto bg-cover bg-center" style={{ backgroundImage: `url(${LogoImage})` }} data-aos="fade-right" data-aos-delay="300">
        {/* Optionally, you can add overlay or additional content here */}
      </div>


      {/* Content Section */}
      <div className="w-full md:w-1/2 p-10 text-black flex flex-col justify-center h-full" data-aos="fade-left" data-aos-delay="300">
  
      <div className='p-4 sm:mb-5 rounded-md shadow-md transition duration-300 hover:bg-opacity-20 hover:bg-gray-100 hover:backdrop-blur-lg' data-aos="fade-up" data-aos-delay="200">
        
        <div className='flex'>
        <FaBriefcase className="text-4xl font-bold mr-2 " />
        <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
        </div>
      
        <p className="text-lg mb-8">
          Explore our diverse range of projects that showcase our expertise and dedication to delivering high-quality solutions.
        </p>
      </div>
        
        <div className='p-4 rounded-md shadow-md transition duration-300 hover:bg-opacity-20 hover:bg-gray-100 hover:backdrop-blur-lg' data-aos="fade-up" data-aos-delay="200">
        <div className='flex '>
        <FaBriefcase className="text-4xl font-bold mr-2 " />
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        </div>
        <p className="text-lg">
          Learn more about our company, our values, and our mission to provide exceptional service and innovative solutions to our clients.
        </p>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default NammaPalani