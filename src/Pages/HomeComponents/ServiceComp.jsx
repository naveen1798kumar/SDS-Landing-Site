import React from 'react'

function ServiceComp() {
  return (
    <>
        <div className="flex items-center justify-evenly min-h-auto p-4 w-[100%] bg-gray-300">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center">Try our services</h2>
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