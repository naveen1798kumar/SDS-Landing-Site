import React from 'react';
import HeroBg from '../../assets/HeroLayout.jpeg';

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-slate-500">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 hover:blur-sm"
        style={{ backgroundImage: `url(${HeroBg})` }}
      ></div>
      <div className="relative z-10 text-center p-5 text-white ">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-2xl mb-8">We're glad you're here. Discover amazing content and join our community!</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
