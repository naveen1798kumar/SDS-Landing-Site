import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import multi from '../../assets/multi.jpg'
import { VscActivateBreakpoints } from "react-icons/vsc";
import whitebg from  '../../assets/whitebg.jpg'

const DCA = () => {
  return (
    <>
    
    <div className='w-[100%] h-auto ' >

      {/* //part1 */}

          <div className='web1 w-[100%] '  style={{backgroundImage: `url(${whitebg})`, backgroundPosition:'center', backgroundSize:'cover'}}>
          <div className='web w-[100%] h-[500px] flex flex-col justify-center items-center gap-3'>
            <h2 className='md:text-[80px] text-3xl font-semibold text-[rgb(168,83,164)] md:mb-10'>Diploma in Multimedia Operation</h2>
            <p className='md:text-3xl text-xl font-semibold mb-5 text-center'>Any sufficiently advanced technology is indistinguishable from magic</p>
            <button className='md:w-[20%] md:h-[50px] p-2 md:p-0 text-black  border-[rgb(168,83,164)] border-[1px] hover:bg-[rgb(168,83,164)] hover:text-white rounded-lg text-base md:text-xl font-semibold'>Contact Us</button>
            {/* <button><IoIosArrowBack /></button> */}
            </div>
          </div>

        {/* //part2 */}

        <div>
          <div className='w-[100%] h-auto flex flex-col md:flex-row p-10 gap-10 md:gap-0'>
            <div className='md:w-[50vw]'>
              <img src={multi} className='md:w-[50vw] md:h-[650px] w-[100%] h-[400px] '/>
            </div>
            <div className='md:w-[50vw] md:p-10 '>
               <h2 className='md:text-5xl text-3xl md:leading-tight leading-relaxed font-semibold  mb-5 md:mb-0'>Get the best Diploma course in <span className=' text-[rgb(168,83,164)]'>  Multimedia Operation </span> from SDS..</h2>
               <div className='md:p-10'>
               <div className='flex justify-left items-center md:text-2xl text-xl gap-3 md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-[rgb(168,83,164)]'/><p> Video Editing</p></div>
               <div className='flex justify-left items-center md:text-2xl text-xl gap-3 md:leading-loose leading-loose'><VscActivateBreakpoints  className=' text-[rgb(168,83,164)]'/><p>Adobe Premiere & Flash </p></div>
               <div className='flex  justify-left items-center md:text-2xl text-xl gap-3 md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-[rgb(168,83,164)]'/><p>Graphic Design and Animation</p></div>
               <div className='flex  justify-left items-center md:text-2xl text-xl gap-3 md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-[rgb(168,83,164)]'/><p>Illustrator</p></div>
               <div className='flex justify-left items-center  md:text-2xl text-xl gap-3 md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-[rgb(168,83,164)]'/><p>Sound Forge</p></div>
               <div className='flex  justify-left items-center md:text-2xl text-xl gap-3 md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-[rgb(168,83,164)]'/><p>Digital Marketing and Content Creation</p></div>
               <div className='flex justify-left items-center  md:text-2xl text-xl gap-3 md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-[rgb(168,83,164)]'/><p>Social Media Marketing</p></div>
               <div className='flex justify-left items-center  md:text-2xl text-xl gap-3 md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-[rgb(168,83,164)]'/><p>Photoshop</p></div>
               </div>
            </div>
          </div>
        </div>

        {/* part-3 */}

       <marquee behavior="smooth" direction="left" scrollamount="15" >
       <div className='w-[100%] h-[500px] p-20 md:p-10 mt-20'>
          <div className='flex justify-center items-center  px-10'>
          <div className='flex w-[400px] rotate-45 gap-10 '>
          <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]  hover:bg-gray-200 bg-blue-300 rounded-full p-2'></p>
              </div>
              <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]  hover:bg-gray-200 bg-orange-300 rounded-full text-xl font-semibold px-5'>Choose Your Path</p>
              </div>
           </div>
           
           <div className='flex w-[400px] rotate-45  gap-10'>
           <div className='w-[350px] h-[200px] b border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]   hover:bg-gray-200 bg-green-300 rounded-full text-xl font-semibold px-2'>Learning Resourses</p>
              </div>
              <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]   hover:bg-gray-200 bg-yellow-300 rounded-full text-xl font-semibold px-2'>Hands on Practice</p>
              </div>
           </div>

           <div className='flex w-[400px] rotate-45  gap-10'>
           <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]   hover:bg-gray-200 bg-red-400 rounded-full text-xl font-semibold px-2'>Real World Project</p>
              </div>
              <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]   hover:bg-gray-200 bg-pink-400 rounded-full text-xl font-semibold px-7'>Stay Updated</p>
              </div>
           </div>

           <div className='flex w-[400px] rotate-45  gap-10'>
           <div className='w-[350px] h-[200px] border-blue-500 border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]   hover:bg-gray-200 bg-indigo-400 rounded-full text-xl font-semibold px-20'>Launch</p>
              </div>
              <div className='w-[350px] h-[200px border-blue-500  border-4 rounded-xl flex justify-center items-center'>
              <p className='flex justify-ceneter items-center -rotate-45 w-[200px] h-[200px]  hover:bg-gray-200 bg-blue-300 rounded-full p-2'></p>
              </div>
           </div>

          </div>
        </div>
       </marquee>
        
    </div>
 
    </>
  )
}

export default DCA