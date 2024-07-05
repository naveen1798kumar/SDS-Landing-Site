import React, { useEffect } from 'react';
import HeroBg from '../../assets/HeroLayout.jpg';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";

import { FaRegArrowAltCircleDown } from "react-icons/fa";

function scrollToSection() {
  const section = document.getElementById('target-section');
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}


const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000 // Adjust the duration as needed
    });
  }, []);

  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <section className="relative mt-20 h-screen w-full flex items-center justify-center hero-section">
    <div className="absolute inset-0 mx-auto bg-cover bg-center opacity-50 animate-bg-image" style={{ backgroundImage: `url(${HeroBg})` }}></div>


      <div className="relative z-10 text-center p-5 w-full" data-aos="fade-up" data-aos-delay="300">
        <Slider {...settings}>
          <div>
            <h1 className="text-5xl font-bold mb-4" data-aos="fade-right" data-aos-delay="500">
              Welcome to <span className='gradient-text font-extrabold'>SDS</span> Technologies
            </h1>
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-4" data-aos="fade-left" data-aos-delay="500">
              Explore <span className='gradient-text font-extrabold'>Our Projects</span>
            </h1>
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-4" data-aos="fade" data-aos-delay="500">
              Experience our <span className='gradient-text font-extrabold'>Namma Palani</span> Mobile App
            </h1>
          </div>
        </Slider>
        <p className="text-2xl mb-8">
          We're glad you're here. Discover amazing content and join our community!
        </p>
        <button onClick={scrollToSection} className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:bg-gradient-to-l text-white font-semibold py-2 px-4 rounded transition duration-300">
         <div className='flex items-center gap-2 font-bold text-xl text-white hover:text-black
'>
         <span className='text-2xl'>Get Started</span><span className='text-2xl animate-bounce'><FaRegArrowAltCircleDown/></span>
         </div>
        </button>
      </div>
    </section>
  );
}

export default Hero;
