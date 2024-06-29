import React from 'react'
import { PiCertificateThin } from "react-icons/pi";


const CourseDetails3 = () => {
  return (
    <>
    <div className='w-[100%] h-auto '>
    <div className='w-[100%] h-auto flex flex-col justify-center items-center  bg-[rgb(249,249,249)] '>
    <div className='md:w-[90%] flex flex-col text-black md:flex-row p-10 lg:py-10 '>
      <div className='md:w-[50%] w-[100%] h-auto order-2 mt-10 md:mt-0 md:order-1'>
        <h2 className='md:font-semibold md:text-4xl md:py-2 md:leading-normal text-3xl'>Earn a career certificate</h2>
        <p className='w-[100%] md:font-lg  py-2 '>Add this credential to yo ur LinkedIn profile, resume, or CV Share it on social media and in your performance review..</p>
      </div>
      <div className='md:w-[50%] md:h-auto w-[100%] flex justify-center md:justify-end order-1 md:order-2 '>
        < PiCertificateThin className='lg:w-[250px] lg:h-[200px] w-[200px] h-[150px] border-2 lg:mr-5  bg-yellow-500 '/>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default CourseDetails3