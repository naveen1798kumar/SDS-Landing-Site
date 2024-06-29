import React from 'react';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
import { FaMobileAlt } from "react-icons/fa";
import { PiFigmaLogoFill } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { SiCoinmarketcap } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";

import ServiceCard from './ServiceComponents/ServiceCard';
import ServiceHead from './ServiceComponents/ServiceHead';

import Image1 from  "../assets/BannerSection/Services-Section.png"
import Cardimg from "../assets/Service-Assets/Sidebar/webdev.png"

function ServicesComponent() {
  const services = [
    {
      title: 'Web Development',
      description: 'We build responsive and high-performance websites using the latest technologies.',
      Icon: TbDeviceDesktopAnalytics,
      link: '/services/web-development',
      
    },
    {
      title: 'Mobile App Development',
      description: 'Custom software solutions to meet your business needs.',
      Icon: FaMobileAlt,
      link: '/services/app-development',
      // backgroundImage: 'path/to/web-development-bg.jpg',
    },
    {
      title: 'Graphics Design',
      description: 'Transform your data into actionable insights.',
      Icon: PiFigmaLogoFill,
      link: '/services/graphics-design',
      // backgroundImage: 'path/to/web-development-bg.jpg',
    },
    {
      title: 'Website Hoisting',
      description: 'Expand your reach and grow your business with our marketing strategies.',
      Icon: CgWebsite,
      link: '/services/website-hoisting',
      // backgroundImage: 'path/to/web-development-bg.jpg',
    },
    {
      title: 'Digital Marketing',
      description: 'Expand your reach and grow your business with our marketing strategies.',
      Icon: SiCoinmarketcap,
      link: '/services/digital-marketing',
      // backgroundImage: 'path/to/web-development-bg.jpg',
    },
    {
      title: 'Social Media Marketing',
      description: 'Expand your reach and grow your business with our marketing strategies.',
      Icon: SlSocialInstagram,
      link: '/services/social-media-marketing',
      // backgroundImage: 'path/to/web-development-bg.jpg',
    },
    // Add more services as needed
  ];

  return (
    <>
        <div className="relative h-screen w-full flex justify-center items-center " style={{ backgroundImage: `url(${Image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className='w-[650px] font-bold  mt-20 bg-gradient-to-r(rgb(43,21,93),rgb(117,65,191)) text-center mb-5 text-5xl md:text-6xl lg:text-6xl' data-aos="zoom-in">Services we Offer</h1>
      </div>

      <div className='flex justify-center items-center h-screen w-full'>
        <ServiceHead />
      </div>

      <div className='w-full flex justify-center'>
        <div className="container mx-auto p-4 py-20" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#2563EB]">Our Services</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                link={service.link}
                backgroundImage={service.backgroundImage} 
              />
            ))}
          </div>
        </div>
      </div>

      <div className='h-[50vh] p-20 flex justify-center items-center' data-aos="fade-up" data-aos-delay="200">
        <p className='text-4xl text-blue-400 hover:scale-100'>Your vision, our expertise – together we create magic online.</p>
      </div>
    </>
  );
}

export default ServicesComponent;
