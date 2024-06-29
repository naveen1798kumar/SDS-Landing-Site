import React from 'react'
import nplogo from '../../assets/nplogo.jfif'

const Aboutcom5 = () => {
  return (
    <>
    <div className='w-[100%] h-auto'>
        <div className='w-[100%] h-auto flex flex-col justify-center items-center py-5'>
            <div className='w-[60%] h-auto text-center  py-5'>
            <h2 className='font-semibold text-4xl text-gray-900 mb-5'>Trusted by Great Brands</h2>
            <p className='leading-normal text-xl text-gray-500 mb-5'>SDS Technologies is proud to be associated with some of the biggest names in the industry. Our clientele ranges from small to mid-sized companies, entrepreneurs.</p>
           <marquee  behavior="smooth" direction="left" scrollamount="15"><img src={nplogo} className='w-[300px] h-[300px]'/></marquee>
            </div>
        </div>
    </div>
    </>
  )
}

export default Aboutcom5