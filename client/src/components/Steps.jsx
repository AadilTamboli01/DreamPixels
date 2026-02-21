



import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col justify-center items-center 
    bg-gradient-to-b from-slate-950 via-slate-900 to-black 
    text-white py-20 rounded-2xl'>

      <h1 className='text-3xl sm:text-5xl font-bold mt-2  
      w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl 
      text-center mx-auto 
      bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
      bg-clip-text text-transparent'>
        How it works
      </h1>

      <p className='text-lg text-gray-400 mt-2'>
        Transforms words into stunning images
      </p>

      <div className="mx-auto text-center max-w-3xl space-y-4 px-2 sm:px-0 mt-8">
        {stepsData.map((value, index) => (
          <div
            key={index}
            className="flex items-start sm:items-center gap-4
                 border border-slate-700 px-4 py-3 rounded-xl
                 cursor-pointer bg-slate-800
                 hover:scale-[1.03] hover:border-cyan-500/50
                 transition-all duration-300
                 shadow-lg shadow-cyan-500/10"
          >
            {/* Icon */}
            <div className="flex-shrink-0
                      w-14 h-14 sm:w-12 sm:h-12
                      flex items-center justify-center
                      bg-gradient-to-r from-cyan-500 to-purple-600 
                      rounded-full shadow-md shadow-purple-500/30">
              <img
                src={value.icon}
                alt="icon"
                className="w-8 sm:w-7 brightness-150"
              />
            </div>

            {/* Text */}
            <div className="text-left">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                {value.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-400">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Steps