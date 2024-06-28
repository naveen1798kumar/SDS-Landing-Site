import React from 'react';
import { useParams } from 'react-router-dom';
import WebDev from "../ServiceComponents/ServiceLinks/WebDev.jsx";
import AppDev from "../ServiceComponents/ServiceLinks/AppDev.jsx";
import Graphics from "../ServiceComponents/ServiceLinks/GraphicDesign.jsx";
import Hoisting from "../ServiceComponents/ServiceLinks/WebHoisting.jsx";
import DigitalMar from "../ServiceComponents/ServiceLinks/DigitalMarketing.jsx";
import SocialMar from "../ServiceComponents/ServiceLinks/DigitalMarketing.jsx"; // Corrected import

import Banner1 from "../../assets/Service-Assets/Banner/webdev.jpg";
import Banner2 from "../../assets/Service-Assets/Banner/appdev.jpg";
import Banner3 from "../../assets/Service-Assets/Banner/digiatlmarket.jpg";
import Banner4 from "../../assets/Service-Assets/Banner/hoisting.jpg";
import Banner5 from "../../assets/Service-Assets/Banner/marketing.jpg";
import Banner6 from "../../assets/Service-Assets/Banner/socialmarket.jpg";

function ServiceDetail() {
  const { serviceId } = useParams();

  // Detailed information for each service
  const serviceDetails = {
    'web-development': {
      title: 'Web Development',
      description: `
        We specialize in building responsive, high-performance websites that meet your business needs. 
        Our web development services include frontend and backend development, ensuring a seamless user experience and robust functionality. 
        We use the latest technologies and frameworks such as React, Angular, and Vue.js for frontend development and Node.js, Django, and Ruby on Rails for backend development.
      `,
      requirements: [
        'Proficiency in HTML, CSS, and JavaScript',
        'Experience with frontend frameworks like React, Angular, or Vue.js',
        'Knowledge of backend technologies like Node.js, Django, or Ruby on Rails',
        'Understanding of responsive design principles',
        'Familiarity with version control systems like Git'
      ],
      image: Banner1, // Replace with your image URL
      component: <WebDev />
    },

    'app-development': {
      title: 'Mobile App Development',
      description: `
        Our team designs and develops custom mobile applications tailored to your business requirements. 
        We create both native and cross-platform apps using technologies like Swift, Kotlin, React Native, and Flutter. 
        From ideation to deployment, we ensure that your app is user-friendly, efficient, and scalable.
      `,
      requirements: [
        'Experience with native mobile development (Swift for iOS, Kotlin for Android)',
        'Proficiency in cross-platform frameworks like React Native or Flutter',
        'Strong understanding of mobile UI/UX design principles',
        'Familiarity with app deployment on App Store and Google Play',
        'Knowledge of mobile performance optimization techniques'
      ],
      image: Banner2, // Replace with your image URL
      component: <AppDev />
    },

    'graphics-design': {
      title: 'Graphics Design',
      description: `
        Our graphic design services help you create visually appealing and effective designs for your brand. 
        Whether it's logo design, marketing materials, or UI/UX design, we ensure that your brand stands out. 
        Our designers use tools like Adobe Photoshop, Illustrator, and Figma to bring your vision to life.
      `,
      requirements: [
        'Proficiency in graphic design software (Adobe Photoshop, Illustrator, Figma)',
        'Strong understanding of visual design principles',
        'Ability to create compelling and effective marketing materials',
        'Experience with UI/UX design for digital products',
        'Strong portfolio showcasing a range of design work'
      ],
      image: Banner3, // Replace with your image URL
      component: <Graphics />
    },

    'website-hoisting': {
      title: 'Website Hosting',
      description: `
        We provide reliable and secure website hosting services to keep your website up and running smoothly. 
        Our hosting solutions include shared hosting, VPS hosting, and dedicated servers. 
        We ensure high uptime, fast loading speeds, and excellent customer support to meet your hosting needs.
      `,
      requirements: [
        'Experience with web hosting services and technologies',
        'Understanding of server management and optimization',
        'Knowledge of hosting security best practices',
        'Ability to troubleshoot hosting issues',
        'Familiarity with hosting control panels (cPanel, Plesk, etc.)'
      ],
      image: Banner4, // Replace with your image URL
      component: <Hoisting />
    },

    'digital-marketing': {
      title: 'Digital Marketing',
      description: `
        Expand your reach and grow your business with our comprehensive digital marketing strategies. 
        We offer SEO, SEM, social media marketing, content marketing, and email marketing services. 
        Our goal is to increase your online visibility, drive traffic, and generate leads for your business.
      `,
      requirements: [
        'Experience with SEO and SEM strategies',
        'Proficiency in social media marketing tools and platforms',
        'Strong understanding of content marketing techniques',
        'Ability to develop and execute email marketing campaigns',
        'Analytical skills to measure and optimize marketing performance'
      ],
      image: Banner5, // Replace with your image URL
      component: <DigitalMar />
    },

    'social-media-marketing': {
      title: 'Social Media Marketing',
      description: `
        Boost your brand's presence on social media platforms with our expert marketing strategies. 
        We create engaging content, manage your social media accounts, and run targeted ad campaigns. 
        Our services help you connect with your audience, increase engagement, and drive conversions.
      `,
      requirements: [
        'Proficiency in social media management tools',
        'Strong understanding of social media algorithms and best practices',
        'Ability to create engaging and shareable content',
        'Experience with social media advertising and targeting',
        'Analytical skills to measure social media performance'
      ],
      image: Banner6, // Replace with your image URL
      component: <SocialMar />
    },
    
    // Add more services as needed
  };

  const service = serviceDetails[serviceId];

  if (!service) {
    console.log(`Service not found for serviceId: ${serviceId}`);
    return <div className='flex items-center justify-center h-screen'>Service not found</div>;
  }

  return (
    <div className="mx-auto">
      <div
        className="relative text-white h-screen mb-6 flex items-center justify-center"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
        <h1 className="relative text-8xl text-black font-bold">{service.title}</h1>
      </div>

    <div className='container p-10 mx-auto' data-aos="fade-up">
      <div className='mb-10'>
        <p className="whitespace-pre-line mb-6">{service.description}</p>
      </div>

      {service.component && (
        <div className="my-6 p-10 bg-gray-200 rounded-lg shadow-md" data-aos="fade-up">
          {service.component}
        </div>
      )}

      {service.requirements && (
        <div className="flex flex-col md:flex-row md:space-x-6 mb-10">
          <div className="md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md mb-6" data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc list-inside">
              {service.requirements.map((requirement, index) => (
                <li key={index} className="mb-2">{requirement}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2" data-aos="fade-up">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        </div>
      )}
    </div>
  </div>
  );
}

export default ServiceDetail;
