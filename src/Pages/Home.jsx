import React from 'react';
import Hero from './HomeComponents/Hero';
import AboutHome from './HomeComponents/AboutHome';
import NammaPalani from './HomeComponents/NammaPalani';
import OurService from './HomeComponents/OurService';

function Home() {
  return (
    <div className=" p-6 flex flex-col justify-center items-center overflow-hidden" data-aos="fade-up">
      
      <Hero />
      <AboutHome/>

      {/*  */}
      <div className="w-full mt-10">
        <ul className="bg-[#afb3b9] rounded-lg p-2 mx-auto w-full flex flex-wrap justify-around">
          <li className="border-black border-2 w-auto px-12 my-4 rounded-xl hover:rounded-lg hover:scale-110 transition-transform duration-300 p-4">
            <div>
                <h1 className="text-xl font-bold">100+ Reviews</h1>
                <p>customer support</p>
            </div>
          </li>

          <li className="border-black border-2 w-auto px-12 my-4 rounded-lg hover:rounded-xl  hover:scale-110 transition-transform duration-300 p-4">
            <div>
                <h1 className="text-xl font-bold">100+ Reviews</h1>
                <p>customer support</p>
            </div>
          </li>

          <li className="border-black border-2 w-auto px-12 my-4 rounded-lg hover:rounded-xl  hover:scale-110 transition-transform duration-300 p-4">
            <div>
                <h1  className="text-xl font-bold">100+ Reviews</h1>
                <p>customer support</p>
            </div>
          </li>
        </ul>
      </div>

      {/*  */}
      <NammaPalani/>

      <OurService/>

      <h1 className="text-4xl font-bold mb-4" data-aos="fade-up" data-aos-delay="200">Home Page</h1>
    </div>
  );
}

export default Home;