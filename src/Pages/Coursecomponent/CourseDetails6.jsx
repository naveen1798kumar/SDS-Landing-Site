import React from 'react'
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { SiAntdesign } from "react-icons/si";

const CourseDetail6 = () => {
  return (
    <>
    <div className='w-[100%] h-auto  bg-[rgb(249,249,249)] p-10'>
    <h2 className='text-center text-3xl font-bold '>We Teach</h2>
    <div className='w-[100%] h-auto p-10 grid  grid-cols-1 lg:grid-cols-3 px-5 gap-20 '>
        <div className='text-2xl text-gray-700  flex flex-col justify-center items-center border-4 border-gray-200 p-10  hover:bg-blue-400 hover:text-white duration-500 transition-all'><MdOutlineTipsAndUpdates className='text-9xl mb-3 text-yellow-400'/>
        <h2>Simple Tips and Tricks</h2>
        </div>
        <div className='text-2xl text-gray-700 flex flex-col justify-center items-center  border-4 border-gray-200 p-10  hover:bg-blue-400 hover:text-white duration-500 transition-all'><GiTeacher className='text-9xl mb-3 text-green-300'/>
        <h2>100% Practical Class</h2>
        </div>
        <div className='text-2xl text-gray-700 flex flex-col justify-center  items-center  border-4 border-gray-200 p-10 hover:bg-blue-400 hover:text-white duration-500 transition-all'><SiAntdesign className='text-9xl mb-3  text-red-300'/>
        <h2>Desgining Methods</h2>
        </div>
    </div>
    </div>
    </>
  )
}

export default CourseDetail6