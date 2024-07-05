import React from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";
import Images from "../../assets/BannerSection/Courses-Section.png"

const CourseDeatils = () => {
  return (
   <>
    <div
        className='h-screen w-full bg-[rgba(250,250,250)]'
        style={{
          backgroundImage: `url(${Images})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}

      >
        <div className='w-[100%] h-[100%] flex flex-col justify-center items-center'         data-aos='fade-up'
        data-aos-duration='1000'>
          
          <h2 className='font-bold text-8xl lg:text-8xl mt-20 text-black'>Courses</h2>
          <div className='font-bold text-7xl lg:text-8xl py-20 text-black opacity-50 animate-bounce'>
            <FaAngleDoubleDown />
          </div>
        </div>
      </div>
   </>
  )
}

export default CourseDeatils