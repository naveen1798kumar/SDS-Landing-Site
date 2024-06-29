import React from 'react'
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { GiTrophyCup } from "react-icons/gi";
import { GiStarsStack } from "react-icons/gi";
import { FaGripfire } from "react-icons/fa6";

const Aboutcom6 = () => {
  return (
    <>
    <div className='w-[100%] h-auto bg-[rgba(248,248,248)] p-10 '>
        <h2 className='w-[100%] font-semibold text-5xl text-gray-900 text-center mb-10 p-5'>Our Core Ideas</h2>
       
        <div className=' w-[100%] h-auto grid grid-cols-1  md:grid-cols-3 gap-10 mb-10'>
          <div className='flex justify-center items-center'>
            <div className='bg-white w-[300px] h-[250px] p-5 rounded-xl '>
                <FaHandshakeSimple className='text-5xl font-semibold mb-3 text-violet-600'/>
                <h2 className='text-3xl font-semibold mb-3 text-gray-900'>Customer Commitment</h2>
                <p className=''>We develop relationships that make a positive difference</p>
           </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='bg-white w-[300px] h-[250px] p-5  rounded-xl'>
                < IoPeopleSharp className='text-5xl font-semibold mb-3  text-violet-600'/>
                <h2 className='text-3xl font-semibold mb-3 text-gray-900'>Personal Accountability</h2>
                <p>We are personally accountable for delivering on our commitments</p>
           </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='bg-white w-[300px] h-[250px] p-5  rounded-xl'>
                <HiMiniBuildingLibrary className='text-5xl font-semibold mb-3  text-violet-600'/>
                <h2 className='text-3xl font-semibold mb-3 text-gray-900'>Integrity</h2>
                <p>We uphold the highest standards of integrity in all of our actions</p>
           </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='bg-white w-[300px] h-[250px] p-5  rounded-xl'>
                <GiStarsStack className='text-5xl font-semibold mb-3 text-violet-600'/>
                <h2 className='text-3xl font-semibold mb-3 text-gray-900'>Creative Leadership</h2>
                <p>We inspire growth and innovation through learning and bold action</p>
           </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='bg-white w-[300px] h-[250px] p-5  rounded-xl'>
                <FaGripfire className='text-5xl font-semibold mb-3  text-violet-600'/>
                <h2 className='text-3xl font-semibold mb-3 text-gray-900'>Passion for Progress</h2>
                <p>We have an uncompromising focus on impact and excellence</p>
           </div>
            </div>
            <div className='flex justify-center items-center'>
            <div className='bg-white w-[300px] h-[250px] p-5 rounded-xl'>
                <GiTrophyCup className='text-5xl font-semibold mb-3 text-violet-600'/>
                <h2 className='text-3xl font-semibold mb-3 text-gray-900'>A Will To Win</h2>
                <p>We exhibit a strong will to win in the marketplace and in every aspect of our business</p>
           </div>
            </div>
            
            
           
        </div>
        </div>

    
    </>
  )
}

export default Aboutcom6