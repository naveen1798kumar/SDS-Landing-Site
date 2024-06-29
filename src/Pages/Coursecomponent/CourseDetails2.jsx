import React from "react";
import offitheme1 from "../../assets/offitheme1.png";
import { TiTick } from "react-icons/ti";
import "./CourseDetails2.css";

const CourseDetails2 = () => {
  return (
    <>

    <div className="w-[100%] h-auto ">
        <div className="font-bold lg:text-6xl text-4xl  text-center leading-relaxed  text-gray-600 py-5 ">
            WHAT <span className="text-yellow-500 ">WE</span> ARE.. 
          </div>
        <div className="we1 w-[100%] h-auto  text-gray-700 text-lg p-10 grid grid-cols-1 md:grid-cols-2 md:gap-10 py-20">
          
          <div>
            <img
              className="lg:w-[50vw] lg:h-auto md:w-[400px] md:h-[400px] w-[100%] h-auto "
              src={offitheme1}
              alt=""
            />
           </div>
           <div className=" w-[100%] h-auto text-2xl flex justify-center items-center  font-semibold  p-5  ">
            <ul className="leading-loose">
              <li className="flex  items-center gap-2">
                <TiTick className="text-blue-500" />
                 Certified Courses
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-blue-500" />
                100% Practical Class
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-blue-500" />
                Experienced Faculty
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-blue-500" />
                Individual Systems
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-blue-500" />
                Flexible Timing
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-blue-500" />
                Friendly Environment
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-blue-500" />
                Affordable Prices
              </li>
              <li className="flex  items-center gap-2">
                <TiTick className="text-blue-500" />
                Concept Oriented Teaching
              </li>
            </ul>
          </div>
          </div>
          </div>
    </>
  );
};

export default CourseDetails2;
