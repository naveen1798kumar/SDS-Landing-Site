import React from "react";
import offiapp from "../../assets/offiapp.jpg";
import app from "../../assets/app.jpg";
import autocad from "../../assets/autocad.jpg";
import AI from "../../assets/AI.jpg";
import lap2 from "../../assets/lap2.jpg";
import lap1 from "../../assets/lap1.jpg";
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
    text1: "(Machine Learning Programming)",
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
    image: lap1,
    link: "/Tally",
  },
];

const CoursesDetails = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-700 mb-5">Explore our Courses</h2>
          <h3 className="text-xl font-semibold text-gray-500 mb-3">
            Enhance Your <span className="text-yellow-600">Skills</span> with us, and upgrade your knowledge with our experienced tutor members.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {course.map((view) => (
              <div
              key={view.id}
              className="relative h-[350px] border-2 border-gray-400 rounded-2xl overflow-hidden cursor-pointer shadow transition duration-150 ease-in-out group"
            >
              <img
                src={view.image}
                alt={view.text}
                className="w-full h-full object-cover object-center rounded-xl transform transition duration-150 ease-in-out group-hover:h-48"
              />
              <div className="absolute inset-0 flex flex-col justify-end z-10 p-4">
                <h2 className="text-2xl font-semibold text-white mt-5">{view.text}</h2>
                <p className="text-lg font-semibold text-white mb-3">{view.text1}</p>
                <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-150 ease-out border-2 border-white rounded-2xl shadow-md group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-150 -translate-x-full bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:translate-x-0 ease">
                    <Link to={view.link} onClick={scrollToTop}>View Course</Link>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full bg-blue-100 text-black transition-all duration-150 transform group-hover:translate-x-full ease">
                    <Link to={view.link} onClick={scrollToTop}>View Course</Link>
                  </span>
                  <span className="relative invisible">View Course</span>
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
