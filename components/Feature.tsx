import React from 'react'
import {data} from "@/constants/index"
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='md:mt-36 mt-20 font-header mb-8'>
        <h3 className='md:text-[35px] text-[26px] mb-8 font-header font-extrabold leading-[52.5px] text-center'>This week in our blog</h3>
        <div className="w-full flex flex-col items-center">
      {/* Card Container */}
      <div className="grid md:grid-cols-3 gap-16 w-[90%] md:w-[80%]">
        {data.map((item, index) => (
          <div key={index} className="flex relative flex-col mt-6 items-center text-center">
            {/* Number with Black Line */}
            <div className="absolute top-[-20px] md:-left-[32] -left-[16] flex flex-col space-y-4 items-start">
              <span className="text-[22px] leading-[33px] font-bold">{item.id}</span>
              <div className="w-[68px] h-[8px] bg-black ml-2"></div>
            </div>

            {/* Image */}
            <Image
              src={item.img}
              alt={`Image ${item.id}`}
              width={300}
              height={300}
              className="w-full rounded-lg shadow-lg mt-2"
            />

            {/* Text */}
            <p className="text-[14px] leading-[21px] w-[327px] font-medium mt-8 mb-6">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className='w-full flex justify-center '>
        <button className="mt-6 bg-black mx-auto text-white px-6 md:w-[391px] w-[80%] h-[41px]  rounded-full">
        Open all
      </button>
      </div>
      
    </div>
    </div>
  )
}

export default Feature