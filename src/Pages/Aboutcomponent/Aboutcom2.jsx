import React from 'react'

const Aboutcom2 = () => {
  return (
    <>
    <div className='w-[100%] h-auto  p-10 '>
        <div className='w-[90%] h-auto mx-auto p-5 bg-violet-900 text-white  rounded-2xl'>

            <h2 className=' text-white text-3xl md:text-4xl font-semibold md:mb-10 lg:text-6xl text-center py-6'>Some numbers to Support Us</h2>
            
            <div className=' w-[100%] sm:h-auto  flex flex-col justify-center lg:gap-20 gap-8 sm:flex-col flex-wrap lg:flex-row p-8'>

            <div className='flex flex-col justify-between lg:justify-evenly lg:gap-20 gap-8 md:flex-row '>
            <div className='w-[100%]  mb-4'>
                    <h2 className='text-3xl md:text-4xl font-semibold text-center'>50+</h2>
                    <h3 className='text-2xl md:text-3xl font-semibold text-center'>Clients</h3>
                    <p className=' text-center'>works with us</p>
                </div>
                <div className='w-[100%]  mb-4'>
                    <h2 className='text-3xl md:text-4xl font-semibold text-center'>30+</h2>
                    <h3 className='text-2xl md:text-3xl font-semibold text-center'>Projects</h3>
                    <p className='text-center'> Delivered</p>
                </div>
            </div>
                
             <div className='flex flex-col justify-between lg:justify-evenly lg:gap-20 gap-8 md:flex-row '>
             <div className='w-[100%]  mb-4'>
                    <h2 className='text-3xl md:text-4xl font-semibold text-center'>100+</h2>
                    <h3 className='text-2xl md:text-3xl font-semibold text-center'>People</h3>
                    <p className='text-center'>Delivering solutions</p>
                </div>
                <div className='w-[100%]  mb-4'>
                    <h2 className='text-3xl md:text-4xl font-semibold text-center'>5+</h2>
                    <h3 className='text-2xl md:text-3xl font-semibold text-center'>Developers</h3>
                    <p className='text-center'>That works with us</p>
                </div>
            </div>   
            </div>
        </div>
    </div>
    </>
  )
}

export default Aboutcom2