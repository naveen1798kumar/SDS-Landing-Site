import React from 'react'
import bg from '../../assets/bg.jpg'
import { TiTick } from "react-icons/ti";

const CourseDetails7 = () => {
  return (
    <>
    <div className='w-[100%] h-auto p-10 bg-[rgb(240,240,240)] mb-20'>
       <div className=' flex flex-col lg:flex-row justify-center items-center p-5 gap-20 lg:gap-0 '>
    
         <div className='div1 lg:w-[50vw] lg:h-auto '>
            <img src={bg}  className=' lg:w-[50vw] lg:h-[500px] w-[400px] h-[300px] border-8 border-white'/>
         </div>
         <div className='div2 lg:w-[50vw] lg:h-[500px] mb-10 lg:mb-0 px-10 w-[400px] h-[300px] flex flex-col justify-center items-center '>
            <h3 className='font-semibold text-3xl py-2 leading-relaxed text-[rgb(55,58,60)]'>Get certified courses and support to guide you through the job search process..</h3>
            <div >
              <div className='flex justify-left items-center gap-2 text-xl'><TiTick className='text-blue-500'/><h2 className='font-semibold text-xl leading-loose'> Comprehensive Course Catalog</h2></div> 
              <div className='flex justify-left items-center gap-2 text-xl'><TiTick className='text-blue-500'/><h2 className='font-semibold text-xl leading-loose'> Flexible Learning Options</h2></div> 
              <div className='flex justify-left items-center gap-2 text-xl'><TiTick className='text-blue-500'/> <h2 className='font-semibold text-xl leading-loose'> Certifications and Credentials</h2></div> 
              <div className='flex justify-left items-center gap-2 text-xl'><TiTick className='text-blue-500'/><h2 className='font-semibold text-xl leading-loose'> Supportive Community</h2></div> 
              <div className='flex justify-left items-center gap-2 text-xl'><TiTick className='text-blue-500'/><h2 className='font-semibold text-xl leading-loose'>Affordable Pricing</h2></div> 
            </div>
         </div>
        
        </div>
    </div>
    </>
  )
}

export default CourseDetails7
