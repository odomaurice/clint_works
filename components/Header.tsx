"use client";
import { useState } from "react";
import { Globe, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";



const navLinks = [
  { name: "Hotels", href: "#" },
  { name: "Travel", href: "#" },
  { name: "Trains", href: "#" },
  { name: "Tours", href: "#" },
  { name: "Cars", href: "#" },

 
];


    



const Header = () => {
  const [activeLink, setActiveLink] = useState(""); 
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };


  const handleClick = (name: string) => {
    setActiveLink(name); // Set the clicked link as active
  };
  const pathname = usePathname();
  

  return (
    <div className="  h-[75px] text-white sticky sm:top-0 font-subtext pt-6  font-semibold    md:shadow-none z-50 ">
      {/* DESKTOP */}

      <div className=" hidden w-full h-full sm:flex justify-around  items-stretch  px-2 md:px-4 ">
        <div className=" flex pt-[20px] items-center">
          <Link href="/">
            <h1 className=" font-subtext font-extrabold text-[28px]">tripbetter</h1>
          </Link>
        </div>

        <div className=" flex h-full pt-[20px] ">
          <div className="flex gap-4 font-alt xl:gap-[50px] sm:text-[14px] md:text-[14px] ">
          {navLinks.map((link) => {
              const isActive = activeLink === link.name; // Check if this link is active
              return (
                <button
                  key={link.name}
                  onClick={() => handleClick(link.name)}
                  className={`px-8  transition-all ${
                    isActive
                      ? "font-bold border-lightGreen border-2  rounded-2xl bg-slate-100/20"
                      : "font-normal"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        </div>

      
          <div className="flex items-center pt-[20px]  gap-1 md:gap-1 lg:gap-2">
           
              <Link className="font-alt font-normal  flex items-center text-white text-[14px] md:text-[14px] px-4 md:px-6 justify-center py-2 md:py-[11px] sm:block" href="/login">Help</Link>
           
            <IoSearch className="sm:block text-[20px]"/>
           

            <div className="flex font-alt font-normal rounded-[10px] justify-center items-center text-white text-[12px]  md:text-[14px] md:px-6 px-4 py-2 md:py-[11px] sm:block">
            <Globe className="sm:inline text-[20px] mr-2"/>
            <p className="inline">Eng</p>
           
             
            </div>
          </div>
      
      </div>

      {/* MOBILE */}
      <div
        className={` block sm:hidden  fixed top-0 w-full z-[999]   py-6 animate-in fade-in zoom-in  ${
          menu ? "bg-white text-black  py-2" : "bg-white"
        } `}
      >
        <div className="flex justify-between  mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <Link href="/">
            <Link href="/">
            <h1 className=" font-subtext font-extrabold text-black text-[28px]">tripbetter</h1>
          </Link>
             
            </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <Image
              
                src={"/menu.svg"}
                alt="logo"
                className="cursor-pointer w-[30px] animate-in fade-in zoom-in"
                width={100}
                height={100}
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right ">
            <div className="flex flex-col gap-8 mt-8 mx-4 ">
              <div className="flex gap-[20px] font-header xl:gap-[50px] text-[16px] flex-col select-none ">
              {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                onClick={closeMenu}
                  href={link.href}
                  key={link.name}
                  className={
                    isActive
                      ? "font-bold text-lightGreen "
                      : "font-semibold"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
               
              </div>
              <div className="flex items-center pt-[20px]  gap-1 md:gap-1 lg:gap-2">
           
           <Link className="font-alt font-normal  flex items-center text-black text-[14px] md:text-[14px] px-4 md:px-6 justify-center py-2 md:py-[11px] sm:block" href="/login">Help</Link>
        
         <IoSearch className="sm:block text-[20px]"/>
        

         <div className="flex font-alt font-normal rounded-[10px] justify-center items-center text-black text-[12px]  md:text-[14px] md:px-6 px-4 py-2 md:py-[11px] sm:block">
         <Globe className="sm:inline text-[20px] mr-2"/>
         <p className="inline">Eng</p>
        
          
         </div>
       </div>
             
                
             
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Header;
