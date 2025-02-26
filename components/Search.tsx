import React from "react";


const Search = () => {
  return (
    <div className="font-subtext ">
      <div className=" md:w-[558px] w-[100%] mt-16 md:mt-6  text-black overflow-hidden  cursor-pointer font-header   h-[46px] md:mx-auto bg-white rounded-[50px] flex items-center justify-center  shadow-md">
        <div className="relative   overflow-hidden flex md:w-1/5 w-full flex-col   mr-2 justify-center items-start md:border-r border-gray-400 leading-[20px]">
          <input
            placeholder="From"
            className="bg-transparent text-[12px] placeholder-white md:placeholder-black   ml-2    focus:outline-none"
          />
        </div>

        <div className="relative hidden     overflow-hidden md:flex md:w-1/5  flex-col   mr-2 justify-center items-start border-r border-gray-400 leading-[20px]">
          <input
            placeholder="To"
            className="bg-transparent text-[12px]  placeholder-black ml-2   focus:outline-none"
          />
        </div>
        <div className="relative hidden   overflow-hidden md:flex w-1/4  flex-col   mr-2 justify-center items-start border-r border-gray-400 leading-[20px]">
          <input
            placeholder="Since"
            className="bg-transparent text-[12px] placeholder-black  ml-2    focus:outline-none"
          />
        </div>
        <div className="relative hidden   overflow-hidden md:flex w-1/3  flex-col   mr-2 justify-center items-start leading-[20px]">
          <input
            placeholder="Untill"
            className="bg-transparent text-[12px] placeholder-black  ml-2    focus:outline-none"
          />
        </div>
        <div className=" md:flex bg-black  h-[46px] px-4 md:px-10 rounded-r-full items-center justify-center">
          <button
            type="submit"
            className="bg-transparent mt-3 md:mt-0 text-[14px] text-white focus:outline-none"
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
