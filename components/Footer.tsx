"use client";
import { footerLinks, socialMedia } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import { FaApplePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";

const Footer = () => (
  <section className="flex relative px-6 justify-evenly md:h-[345px] font-header items-center sm:py-12 py-6 flex-col">
    <div className="flex justify-between items-start md:flex-row flex-col mb-8 w-full">
      <div className="flex-[1.5] w-full flex flex-row md:justify-evenly justify-between flex-wrap md:mt-0 mb-8 mt-10">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-[20px] leading-[30px] mt-3 mb-6 font-header font-extrabold">
              {section.title}
            </h3>
            <ul className="mt-2">
              {section.links
                ? section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.link}
                        className="text-gray-300 font-alt text-[16px] font-normal leading-[26px] hover:bg-blue-500 hover:p-2"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
            
          </div>
          
          
        ))}
       

        {/* ✅ Payment Methods + Social Media Grouped Together */}
        <div className="flex flex-col   items-center md:items-start">
          <h4 className="text-[20px] leading-[30px] mt-3 mb-6 font-header font-extrabold">Payment Methods</h4>
          <div className="flex flex-col space-y-1 ">
            <SiVisa className="text-[40px] text-[#F79E1B]" />
            <Image src="/mastercard.png" alt="MasterCard" width={31} height={31} />
            <FaApplePay className="text-[40px] text-[#F79E1B]" />
          </div>

          {/* ✅ Social Media Icons - Directly Under Payment Methods */}
          <div className="flex flex-row-reverse justify-between">

         
          <div className="flex space-x-3 ">
            {socialMedia.map((social) => (
              <div
                key={social.id}
                className="w-10 h-10 flex items-center justify-center bg-[#87878733] rounded-full cursor-pointer mt-8 hover:bg-gray-600 transition"
                onClick={() => window.open(social.link, "_blank")}
              >
                <social.icon className="text-white w-[18.27px] h-[15px]" size={20} />
              </div>
            ))}
          </div>
          


          </div>
        </div>
      </div>
    </div>
  
    <div className=" absolute bottom-0 font-alt border-gray-700 py-6 flex justify-center items-center w-full">
      <p className="text-white text-sm">
        © Copyright Tripbetter |{" "}
        <span className="text-gray-500 cursor-pointer hover:text-gray-400 transition">
          Terms of Use
        </span>
      </p>
    </div>
   
  </section>
);

export default Footer;
