import React from 'react'
import { MdCenterFocusStrong } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { FaGripfire } from "react-icons/fa6";

const Aboutcom4 = () => {
  return (
    <>
    <div className='w-[100%] h-auto py-10'>
      <h2 className=' text-gray-900 text-5xl text-center font-bold mb-10 py-5'>Why SDS ?</h2>
        <div className='w-[100%] h-auto flex flex-col justify-evenly items-center md:flex-row '>
            <div className='w-[350px] h-[250px] flex flex-col justify-evenly items-center text-center p-5 '>
                <MdCenterFocusStrong className='font-medium text-white bg-green-500 text-7xl mb-3 rounded-xl hover:-translate-y-3 duration-500 hover:bg-green-400' />
                <h2 className='font-semibold text-3xl '>Focus</h2>
                <p>We are truly focused on every IT solution which we develop</p>
            </div>
            <div className='w-[400px] h-[250px] flex flex-col justify-evenly items-center text-center  px-10 lg:border-r-[2px] lg:border-l-[2px] lg:border-gray-200'>
              <TbBulbFilled  className='font-medium text-white text-7xl bg-yellow-500  rounded-xl hover:-translate-y-3 duration-500 hover:bg-yellow-400 '/>
              <h2 className='font-semibold text-3xl '>Idea</h2>
              <p>We are all about meeting the creative vision of client</p>
            </div>
            <div className='w-[350px] h-[250px]  flex flex-col justify-evenly items-center text-center p-5'> 
              < FaGripfire  className='font-medium text-white text-7xl bg-red-600 mb-3 rounded-xl hover:-translate-y-3 duration-500 hover:bg-red-400'/> 
             <h2 className='font-semibold text-3xl '>Passion</h2>
              <p>Our passion lies in giving effective solutions for our clients</p>
            </div>
          </div>
    </div>
    </>
  )
}

export default Aboutcom4