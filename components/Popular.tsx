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
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1540, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="my-36 md:px-6 md:mx-auto w-full md:w-[90%] font-header">
      {/* Title */}
      <h3 className="md:text-[35px] text-[28px] mb-8 font-extrabold leading-[52.5px] text-center">
        Popular Places
      </h3>

      {/* Navigation & Pagination */}
      <div className="flex md:ml-6 px-6 justify-between items-center mb-6">
        <h2 className="text-[18px] leading-[27px] font-bold">Asia &gt;</h2>
        <div className="flex space-x-2 items-center">
          <ArrowLeft className="w-8 h-8 text-gray-400 cursor-pointer hover:text-black transition" />
          <Image
            src="/arrow-black.png"
            alt="arrow"
            width={80}
            height={80}
            className="w-[50px] md:w-[80px]"
            priority={true}
          />
          <span className="text-black font-semibold">1–7 of {places.length}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 px-6 mb-6 md:ml-6 text-[15px] font-medium overflow-x-auto whitespace-nowrap">
        {[
          "Kuala Lumpur",
          "Singapore",
          "Bangkok",
          "Melaka",
          "Taipei",
          "Tokyo",
          "Langkawi",
          "Shanghai",
        ].map((city) => (
          <span key={city} className="cursor-pointer hover:underline">
            {city}
          </span>
        ))}
      </div>

      {/* Slider */}
      <Slider {...settings} className="overflow-hidden">
        {places.map((place) => (
          <div key={place.id} className="px-3 relative">
            {/* Number + Line */}
            <div className="md:flex hidden flex-col absolute top-2 left-2">
              <span className="text-[22px] font-bold">{place.id}</span>
              <div className="w-[68px] h-[8px] bg-black mt-1"></div>
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
            <h3 className="text-[20px] leading-[30px] w-[147px] h-[37px] font-extrabold mt-3">{place.name}</h3>
            <p className="text-[14px] font-normal leading[21px] w-[327px]">
              {place.desc}
            </p>

            {/* Button */}
            <button className="mt-3 mx-auto border-2 border-black w-full md:w-[275px] h-[41px] px-4 py-2 rounded-full font-extrabold text-[15px] hover:bg-black hover:text-white transition">
              View more
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Popular;
