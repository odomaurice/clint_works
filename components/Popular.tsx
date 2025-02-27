"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { places } from "@/constants/index";
import Image from "next/image";

import { ArrowLeft } from "lucide-react";

const Popular = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    //autoplay: true,
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
    <div className="my-36 md:px-6 md:mx-auto w-[100%] md:w-[90%] font-header  ">
      <h3 className="md:text-[35px] text-[28px] mb-8 font-extrabold leading-[52.5px] text-center">
        Popular Places
      </h3>
      <div className="flex md:ml-6 justify-between items-center mb-6">
        <h2 className="text-[18px] leading-[27px] font-bold">Asia &gt;</h2>
        <div className="flex space-x-1 items-center">
          <ArrowLeft className="w-8 h-8 text-gray-400" />

          <Image
            src={"/arrow-black.png"}
            alt="arrow"
            width={100}
            height={100}
            className="w-[80px]"
          />

          {/* Pagination Text */}
          <span className="text-black font-semibold">1–7 of 14</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-6 mb-6 md:ml-6 text-[15px] font-medium">
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
      <Slider {...settings} className="">
      
        {places.map((place) => (
          <div key={place.id} className="relative px-3 grid grid-cols-1 md:grid-cols-3 gap-16   ">
            {/* Number + Black Line */}
            <div className="flex items-start space-x-2 mb-2 flex-col absolute top-0 left-0">
              <span className="text-[22px] leading-[33px] font-bold">{place.id}</span>
              <div className="w-[68px] h-[8px] bg-black ml-2"></div>
            </div>
            {/* Image */}
            <div className="px-5">
              <Image
                src={place.img}
                alt={place.name}
                width={300}
                height={300}
                className="w-full h-[200px] md:object-cover rounded-lg shadow-lg"
              />
            </div>
            {/* Title & Description */}
            <h3 className="text-[20px] leading-[30px] w-[147px] h-[37px] font-extrabold mt-3">{place.name}</h3>
            <p className="text-[14px] font-normal leading[21px] w-[327px]">{place.desc}</p>
            {/* Button */}
            {/* Button */}
            <button className="mt-3 border-2 border-black w-[275px] h-[41px] px-4 py-2  rounded-full font-extrabold text-[15px] leading-[22.5px] hover:bg-black hover:text-white transition">
              View more
            </button>
                      
          </div>
        ))}
        
      </Slider>
    </div>
  );
};

export default Popular;
