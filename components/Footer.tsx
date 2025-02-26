"use client"
import { footerLinks, socialMedia} from "@/constants/index";
import Image from "next/image"





const Footer = () => (
  <section className="flex justify-center font-header items-center px-6 sm:py-16 py-6 flex-col">
    <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
      

      <div className="flex-[1.5] w-full flex flex-row md:justify-evenly justify-between flex-wrap md:mt-0 mb-8 mt-10">
      {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg mt-3 font-header font-semibold">{section.title}</h3>
            <ul className="mt-2">
              {section.links
                ? section.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.link} className="text-gray-300 font-alt hover:underline">
                        {link.name}
                      </a>
                    </li>
                  ))
                : section.icons && ( // If there are no links, render icons
                    <div className="flex flex-col items-start gap-1 text-3xl mt-1">
                      {section.icons.map((icon, idx) => {
                if (typeof icon === "string") {
                  // Handle Mastercard (image)
                  return (
                    <Image
                      key={idx}
                      src="/mastercard.png" // Update with actual path
                      alt="Mastercard"
                      width={100}
                      height={100}
                      className="w-[31px] h-[24px]"
                    />
                  );
                } else {
                  // Handle Icon Components
                  const IconComponent = icon.component;
                  return (
                    <IconComponent
                      key={idx}
                      style={{ color: icon.color, fontSize: "50px" }}
                    />
                  );
                }
              })}
                    </div>
                  )}
            </ul>
          </div>
        ))}
        {/* {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-header font-medium text-[18px] leading-[27px] mb-3 text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-alt font-normal text-[15px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))} */}
      </div>
     
    </div>

    <div className="w-full flex justify-evenly items-center md:flex-row flex-col pt-6">
      <p className="font-alt font-normal text-center text-[14px] leading-[27px] text-white">
        Copyright Ⓒ Tripbetter | <span className="text-gray-400">Terms of Use.</span> 
      </p>

      <div className="flex flex-row md:mt-0  mt-6">
        {socialMedia.map((social, index) => (
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            width={100}
            height={100}
            className={`w-[21px] h-[21px] text-white object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      </div>

   

    
    
  </section>
);

export default Footer;