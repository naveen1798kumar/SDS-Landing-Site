import React from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";

const CourseDeatils = () => {
  return (
   <>
    <div className='cd w-[100%] h-auto bg-[rgba(250,250,250)] '>
    <div className='cdimg w-[100%] h-[500px]  flex flex-col justify-center items-center '>
        <h2 className='cdhead font-bold  text-8xl lg:text-9xl mt-20 text-white '>Courses</h2>
        <div className='font-bold text-7xl lg:text-8xl py-10 text-white opacity-50 animate-bounce'><FaAngleDoubleDown/></div>
         </div>
       <div className=' w-[100%] h-auto ml-6'>
 
     
      </div>
     </div>
   </>
  )
}

export default CourseDeatils