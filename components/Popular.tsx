"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {places} from "@/constants/index"
import Image from "next/image";

const Popular = () => {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1540,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      };
  return (
    <div className='my-36 px-6 mx-6 font-header'>
        <h3 className='md:text-[35px] text-[28px] mb-8 font-extrabold leading-[52.5px] text-center'>
            Popular Places 

        </h3>
        <div className="flex md:ml-6 justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Asia &gt;</h2>
        <div className="flex items-center space-x-4">
          <button className="text-2xl">&larr;</button>
          <button className="text-2xl">&rarr;</button>
          <span className="text-lg">1-7 of 14</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-6 mb-6 md:ml-6 text-md font-medium">
        <span className="cursor-pointer">Kuala Lumpur</span>
        <span className="cursor-pointer">Singapore</span>
        <span className="cursor-pointer">Bangkok</span>
        <span className="cursor-pointer  md:block hidden">Melaka</span>
        <span className="cursor-pointer md:block hidden">Taipei</span>
        <span className="cursor-pointer  md:block hidden">Tokyo</span>
        <span className="cursor-pointer  md:block hidden">Langkawi</span>
        <span className="cursor-pointer  md:block hidden">Shanghai</span>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {places.map((place) => (
          <div key={place.id} className="relative px-4">
            {/* Number + Black Line */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl font-bold">{place.id}</span>
              <div className="w-[50px] h-[4px] bg-black"></div>
            </div>

            {/* Image */}
            <Image
              src={place.img}
              alt={place.name}
              width={300}
              height={300}
              
              className="w-full h-[200px] object-cover rounded-lg shadow-lg"
            />

            {/* Title & Description */}
            <h3 className="text-lg font-bold mt-3">{place.name}</h3>
            <p className="text-sm text-gray-600">{place.desc}</p>

            {/* Button */}
            <button className="mt-3 border-2 border-black px-4 py-2 w-full rounded-full font-medium hover:bg-black hover:text-white transition">
              View more
            </button>
          </div>
        ))}
      </Slider>
        
    </div>
  )
}

export default Popular