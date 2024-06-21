import React, { useEffect } from 'react';
import HeroBg from '../../assets/HeroLayout.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000 // Adjust the duration as needed
    });
  }, []);

  return (
    <div className="relative mt-20 h-screen w-full flex items-center justify-center bg-slate-500" data-aos="fade-in">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 hover:blur-sm"
        style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        data-aos="zoom-in"
        data-aos-delay="100"
      ></div>
      <div className="relative z-10 text-center p-5 " data-aos="fade-up" data-aos-delay="300">
        <h1 className="text-5xl font-bold mb-4" data-aos="slide-right" data-aos-delay="500">
          Welcome to <span className='text-red-400 font-extrabold' >SDS</span> Technologies
        </h1>
        <p className="text-2xl mb-8">
          We're glad you're here. Discover amazing content and join our community!
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
