import React from 'react'
import lapgirl from '../../assets/lapgirl.png'


const Aboutcom3 = () => {
  return (
    <>
    <div className='w-[100%] h-auto bg-[rgb(248,248,248)] '>
        
        <div className='w-[80%] m-auto flex flex-col lg:flex-row'>

            <div className='w-[60vw] flex flex-col lg:flex-row justify-center lg:justify-start  items-center gap-10 lg:gap-5 order-2 md:order-1'>

                <div className='w-[260px] h-[260px]   lg:hover:bg-violet-400 bg-pink-400 duration-300  text-white  rounded-2xl transform translate-y-20 flex flex-col justify-center items-center' style={{boxShadow: '2px 2px 8px rgb(76,29,149,0.7)'}}>
                    <h2 className='text-4xl font-bold '>Our Mission</h2>
                    <p className='p-5 font-normal text-center '>You Dream it, We Prove it, through embracing the power of Digital Transformation</p>
                </div>

                <div className='w-[260px] h-[260px] bg-[rgb(253,253,253)  lg:hover:bg-violet-400 border-violet-500  text-pink-500 duration-300  rounded-2xl transform translate-x-20 flex flex-col justify-center items-center bg-white'style={{boxShadow: '2px 2px 8px rgb(76,29,149,0.7)'}}>
                <h2 className='text-4xl font-bold'>Our Vision</h2>
                <p className='p-5 font-normal text-center'>Continuously working to produce many world-class techno preneurs from diversified industries.</p>
                </div>

            </div>

            <div className='w-[100%]  h-[500px] md:w-[40%]  flex  justify-center md:justify-center items-center order-1 md:order-2'>
                <img src={lapgirl} className='w-[400px] h-[500px]  pl-5 hover:-translate-y-3 duration-700'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Aboutcom3