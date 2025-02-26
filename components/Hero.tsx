import React from "react";
import Search from "./Search";
import { FaFacebookSquare} from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex font-header  flex-col items-center justify-center text-white text-center w-full h-[400px] space-y-5">
      {/* Heading */}
      <div>
        <h2 className="md:text-[31px] text-[28px] leading-[40px] font-extrabold">
          Plan your dream travel
        </h2>
        <h2 className="md:text-[31px] text-[28px] leading-[40px] font-extrabold">
          with Tripbetter
        </h2>
      </div>

      {/* Search Bar */}
      <Search />

      {/* Social Media Icons (Aligned Right) */}
      <div className="absolute hidden right-16 cursor-pointer top-1/3 transform -translate-y-1/2 md:flex flex-col space-y-4">
        <Link href="#">
          <FaFacebookSquare className="w-6 h-6" />
        </Link>
        <Link href="#">
          <FaInstagram className="w-6 h-6" />
        </Link>
        <Link href="#">
          {" "}
          <FaTwitter className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
