import React from "react";
import "./CourseDetails.css";
import offiapp from "../../assets/offiapp.jpg";
import app from "../../assets/app.jpg";
import autocad from "../../assets/autocad.jpg";
import AI from "../../assets/AI.jpg";
import lap2 from "../../assets/lap2.jpg";
import lap1 from "../../assets/lap1.jpg";
import lap from "../../assets/lap.jpg";
import program from "../../assets/program.jpg";

import { Link } from "react-router-dom";

const course = [
  {
    id: 1,
    text: "Web Development",
    text1: "(Web Application)",
    image: program,
    link: "/Web",
  },
  {
    id: 2,
    text: "App Development",
    text1: "(App Application)",
    image: app,
    link: "/App1",
  },
  {
    id: 3,
    text: "AI",
    text1: "(Artificial Intelligence)",
    image: AI,
    link: "/Ai",
  },
  {
    id: 7,
    text: "DMO",
    text1: "(Diploma in Multimedia Operation)",
    image: lap1,
    link: "/DMO",
  },
  {
    id: 6,
    text: "CAD",
    text1: "(Computer Aided Drafting)",
    image: autocad,
    link: "/CAD",
  },

  {
    id: 4,
    text: "MLP",
    text1: "(Mechine Learning Programming)",
    image: program,
    link: "/MLP",
  },
  {
    id: 8,
    text: "CCA",
    text1: "(Certificate in Computer Accounts)",
    image: offiapp,
    link: "/CCA",
  },
  {
    id: 9,
    text: "COA",
    text1: "(Certificate of Office Application)",
    image: lap2,
    link: "/COA",
  },
  {
    id: 5,
    text: "Tally",
    // text1:"(Diploma in Hardware Technology)",
    image: lap1,
    link: "/Tally",
  },
];

const CoursesDetails = () => {
  return (
    <>
      <div className="cd w-[100%] h-auto bg-[rgba(250,250,250)] p-3 ">
        <div className="cdhead2 flex  flex-col justify-center items-center text-center mt-10  ">
          <h2 className=" font-bold md:text-5xl text-4xl text-gray-700 mb-5">
            Explore our Courses
          </h2>
          <h3 className=" font-semibold md:text-2xl text-xl text-gray-500  mb-3">
            Enhance Your <span className="text-yellow-600">Skills </span> with
            us , and upgrade your knowledge with our experienced tutor members.
          </h3>
        </div>

        <div className="mainbox w-[100%] h-auto flex flex-col justify-center items-center p-10">
        <div className='flex justify-center items-center '>
          <div className="cdetails w-[100%] h-auto grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  gap-10">
            
            {course.map((view) => (
              <div className="box w-[350px] h-[400px] text-center bg-white  rounded-xl hover:text-blue-500 shadow-black shadow  ">
                <img
                  className="w-[400px] h-[250px] rounded-xl "
                  src={view.image}
                  alt=""
                />
                <h2 className="head font-semibold text-2xl text-gray-600  mt-5">
                  {view.text}
                </h2>
                <p className="head font-semibold text-lg text-gray-600 mb-3">
                  {view.text1}
                </p>

                <button className="button bg-transparent text-gray-600  border-2 border-gray-200 hover:ease-linear-to-r duration-500 px-3 py-2 rounded-2xl hover:bg-blue-500  hover:border-none hover:text-white">
                  {" "}
                  <Link to={view.link}>View Course</Link>{" "}
                </button>

                {/* <button> <Link to={view.link2}></Link></button> */}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesDetails;
