import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import web from '../../assets/web.png'
import { VscActivateBreakpoints } from "react-icons/vsc";
import whitebg from  '../../assets/whitebg.jpg'

const Web = () => {
  return (
    <>
    
    <div className='w-[100%]  h-auto '>

      {/* //part1 */}

          <div className='web1 w-[100%] 'style={{backgroundImage: `url(${whitebg})`, backgroundPosition:'center', backgroundSize:'cover'}}>
           <div className='web w-[100%] h-[500px] flex flex-col justify-center items-center gap-3 p-5'>
            <h2 className='md:text-[80px] text-3xl  font-semibold text-red-500 md:mb-5'>Web Development</h2>
            <p className='lg:text-3xl md:text-2xl text-xl font-semibold mb-5 text-center md:py-5'>Software is a great combination between artistry and engineeringTo Make Stunning Websites</p>
            <button className='md:w-[20%] md:h-[50px]  text-base  text-black  border-red-500 border-[1px] hover:bg-red-500 hover:text-white rounded-lg lg:text-xl font-semibold p-2 md:p-0'>Contact Us</button>
            {/* <button><IoIosArrowBack /></button> */}
           </div>
          </div>

        {/* //part2 */}

     
          <div className='w-[100%] max-h-auto border-2 border-black  h-auto flex flex-col md:flex-row p-10 md:p-10 gap-10 md:gap-0 '>
            <div className='md:w-[50%] w-[100%] '>
              <img src={web} className='md:w-[50vw] md:h-[750px] w-[100%] h-[400px] ' />
            </div>
            <div className='md:w-[50%] lg:p-10 '>
               <h2 className='lg:text-5xl md:text-4xl  text-3xl md:leading-tight leading-tight font-semibold mb-5 md:mb-0 '>Get the best <span className=' text-red-500'> Web Development </span>course from SDS..</h2>
               <div className='lg:p-10'>
               <div className='flex justify- left items-center md:text-2xl text-xl gap-3  md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-red-500'/><p>Front-end development</p></div>
               <div className='flex justify-left items-center md:text-2xl text-xl gap-3 md:leading-loose leading-loose'><VscActivateBreakpoints  className=' text-red-500'/><p>Back-end development</p></div>
               <div className='flex  justify-left items-center md:text-2xl text-xl gap-3 md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-red-500'/><p>Full-stack development</p></div>
               <div className='flex  justify-left items-center md:text-2xl text-xl gap-3  md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-red-500'/><p>Web designing</p></div>
               <div className='flex justify-left items-center  md:text-2xl text-xl gap-3  md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-red-500'/><p>Responsive design</p></div>
               <div className='flex  justify-left items-center md:text-2xl text-xl gap-3  md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-red-500'/><p>Frameworks and libraries</p></div>
               <div className='flex justify-left items-center  md:text-2xl text-xl gap-3 md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-red-500'/><p>Testing and debugging</p></div>
               <div className='flex justify-left items-center  md:text-2xl text-xl gap-3  md:leading-loose leading-loose'><VscActivateBreakpoints className=' text-red-500'/><p>Deployment and maintenance</p></div>
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
        

 
    </>
  )
}

export default Web