import React from 'react'
import offigirl2 from '../../assets/offigirl2.jpg'

const CourseDetails5 = () => {
  return (
    <>
    {/* <div  className='w-[100%] h-auto'> */}
        {/* <div  className=' w-[100%] h-auto  py-10 '> */}
            <div className=' w-[100%] h-auto grid grid-cols-1 lg:grid-cols-2 md:gap-20 p-10 '>
            <div className=' lg:w-[50vw] lg:h-[500px] w-[100%] h-[350px] flex md:p-10 '>
                <div className='md:w-[300px] md:h-[300px] w-[200px] h-[200px] md:rounded-full rounded-full border-4 border-red-300 relative '>
                <div className='md:w-[450px] md:h-[300px] w-[350px] h-[300px]  md:border-2 md:border-gray-200 absolute left-[25%] top-[25%]'>
                    <img src={offigirl2} className=''/>
                </div>
                </div>
            </div>
          
           <div className=' lg:w-[50vw] lg:h-[500px] w-[100%] h-[300px] ml-2 md:mt-2 md:p-5 flex flex-col  md:justify-center justify-around items-left '>
                <h2  className='md:text-4xl text-2xl lg:font-semibold font-medium  md:leading-relaxed leading-relaxed'>
                Take the next step toward your personal and professional goals with SDS..</h2>
                <p className='md:text-lg  md:py-6'>Join now to step into your dream job and achieve your goal with us.</p>
                <button className='md:w-[20%] md:h-[50px]  w-[30%] h-[50px] text-black font-medium border-gray border-4 hover:bg-gray-700 hover:text-white'>Contact Us</button>
            </div>
           </div>
           
        {/* </div> */}

    {/* </div> */}
    </>
  )
}

export default CourseDetails5