import React from 'react'
import { IoLogoAppleAppstore } from "react-icons/io5";
import { BiLogoPlayStore } from "react-icons/bi";

function ServiceComp() {
  return (
    <>
        <div className="flex items-center justify-evenly min-h-auto p-4 w-[100%] bg-gray-500 mt-4 rounded-bl-2xl rounded-br-xl mb-10 bg-opacity-20 backdrop-blur-lg shadow-lg">
        <div className="w-1/2 p-8 ">
                <h2 className="text-3xl font-bold text-center mb-4">Try our App from..</h2>
                <div className='mb-4'>
                <p>Get our application from Playstore and Apple store </p>
                <p>Just Login and Use it</p>
                </div>
                <div className="flex justify-around mb-4   w-auto">
                <a href="https://play.google.com/store/apps/details?id=com.aegiiz.NammaPalaniApp&pcampaignid=web_share" target='blank'>
                    <div className="flex items-center gap-2 hover:bg-white hover:rounded-lg hover:shadow-lg p-2">
                     
                        <BiLogoPlayStore className="text-4xl text-indigo-500" />
                        <span className="text-xl font-semibold text-gray-700">Playstore</span>
                        
                    </div>
                    </a>
                    <div className="flex items-center gap-2 hover:bg-white hover:rounded-lg hover:shadow-lg p-2">
                        <IoLogoAppleAppstore className="text-4xl text-gray-800" />
                        <span className="text-xl font-semibold text-gray-700">Apple Store</span>
                    </div>
                </div>
            </div>
      {/*  */}
      <div>
        <button className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-600 rounded-md shadow-md group">

          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:translate-x-0 ease">
            Try Now
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-indigo-600 transition-all duration-300 transform group-hover:translate-x-full ease">Try Now</span>
          <span className="relative invisible">Try Now</span>

        </button>
      </div>
    </div>
    </>
  )
}

export default ServiceComp