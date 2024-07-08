import React from 'react';
import Hero from './HomeComponents/Hero';
import AboutHome from './HomeComponents/AboutHome';
import NammaPalani from './HomeComponents/NammaPalani';
import ServiceComp from './HomeComponents/ServiceComp';
import Testimonials from './HomeComponents/Testimonials';
import MouseFollower from "../Components/MouseFollow";

function Home() {
  return (
    <div className="relative home-section">
      <MouseFollower/>
      <div className="p-6 flex flex-col justify-center items-center overflow-hidden" data-aos="fade-up">
        <Hero />
        <AboutHome/>


        <div className="w-full mt-10">
          <ul className="bg-slate-200 rounded-lg p-2 mx-auto w-full flex flex-wrap justify-around">
            <li className="border-black border-2 w-auto px-12 my-4 rounded-xl hover:rounded-lg hover:scale-110 transition-transform duration-300 p-2 md:max-w-[250px]">
              <div>
                  <h1 className="text-xl font-bold">30+ Projects Completed</h1>
                  <p>Web Development</p>
              </div>
            </li>
            <li className="border-black border-2 w-auto px-12 my-4 rounded-lg hover:rounded-xl hover:scale-110 transition-transform duration-300 p-2 md:max-w-[250px]">
              <div>
                  <h1 className="text-xl font-bold">Our Own Shopping App</h1>
                  <p>Innovative Solutions</p>
              </div>
            </li>
            <li className="border-black border-2 w-auto px-12 my-4 rounded-lg hover:rounded-xl hover:scale-110 transition-transform duration-300 p-2 md:max-w-[250px]">
              <div>
                  <h1 className="text-xl font-bold">Dedicated Team</h1>
                  <p>Expert Developers</p>
              </div>
            </li>
          </ul>
        </div>

        
        <NammaPalani/>
        <ServiceComp/>
        <Testimonials/>
      </div>
    </div>
  );
}

export default Home;
