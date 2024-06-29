import React from 'react'
import whitebg from '../../assets/whitebg.jpg'

const Aboutcom1 = () => {
  return (
    <div className='w-[100%] h-auto'>
        <div className=' w-[100%]  h-[550px] flex flex-col justify-center items-center'  style={{backgroundImage: `url(${whitebg})`, backgroundPosition:'center', backgroundSize:'cover'}}>
           <div className='w-[100%] flex flex-col justify-center items-center sm:overflow-hidden'>
          <h2 className='w-[650px] font-bold  mt-20 bg-gradient-to-r(rgb(43,21,93),rgb(117,65,191)) text-center mb-5 text-5xl md:text-6xl lg:text-9xl' data-aos="zoom-in">About Us</h2>

           <p className= 'w-auto md:w-[650px] text-gray-700 leading-normal text-center  '>SDS Technologies is a fast-growing digital transformation and custom software development company. We have some of the best in-house developers when it comes to Web and Mobile Application development.</p>
           </div>
         </div>
   </div>
       
   
  )
}

export default Aboutcom1