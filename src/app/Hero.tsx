import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/sectionHeader";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center md:pt-20 items-center pl-2 pr-2 gap-10">
        <SectionHeader
          descritionClassName="md:text-[19px] text-[15px] flex flex-col justify-center pt-10 md:pt-0 items-center text-white text-center font-normal"
          className=" text-white md:p-0 md:text-center pt-5 mb-2 text-center text-[30px] md:text-[70px] font-bold"
          title="Find Your Dream Job Today!"
          description="Connecting Talent with Opportunity: Your Gateway to Career Success"
        />
        <div className="md:flex flex flex-col md:p-0 pb-[20px] md:pr-0 pr-[25px] md:w-auto w-full md:flex-row md:items-center space-x-0 bg-white shadow-md rounded-lg m-0 md:pl-0 pl-[25px]">
          <input
            type="text"
            placeholder="Job Title or Company"
            className="flex-grow ml-0 md:ml-5 shadow-none mb-5 mt-5 border-none p-[20px] m-0  md:p-0 outline-none focus:outline-none rounded-l-lg"
          />
          <select className="m-0 p-3 mb-5 md:mb-0 border-l border-gray-300 focus:outline-none rounded-none">
            <option>Select Location</option>
          </select>
          <select className="m-0 p-3 mb-5 md:mb-0 border-l  border-gray-300 focus:outline-none rounded-none">
            <option>Select Category</option>
          </select>
          <button className="bg-[#309689] md:h-auto h-[60px] text-white m-0 p-5 rounded-lg md:m-0 mt-5 rounded-r-lg md:rounded-l-sm hover:bg-green-600 focus:outline-none focus:bg-green-700">
            Search Job
          </button>
        </div>
        <div className="flex md:gap-20 mt-10 md:mt-20 flex-row p-0 md:p-3 gap-2 text-white ">
          <div className="flex flex-row gap-1">
            <Image
              className="md:w-[60px] w-[40px] md:h-[60px]"
              src="/briefcase.png"
              alt=""
              width={50}
              height={20}
            />
            <div className="flex flex-col justify-center">
              <SectionHeader
                descritionClassName="text-[10px] md:text-[14px] "
                className=" md:text-[20px] text-[15px] "
                title="25000"
                description="Jobs"
              />
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <Image
              className="md:w-[60px] w-[40px] md:h-[60px]"
              src="/people.png"
              alt=""
              width={50}
              height={20}
            />
            <div className="flex flex-col justify-center">
              <SectionHeader
                descritionClassName="text-[10px] md:text-[14px] "
                className=" md:text-[20px] text-[15px] "
                title="10000"
                description="Candidates"
              />
            </div>
          </div>
          <div className="flex flex-row gap-1">
            <Image
              className="md:w-[60px] w-[40px] md:h-[60px]"
              src="/company.png"
              alt=""
              width={50}
              height={20}
            />
            <div className="flex flex-col justify-center">
              <SectionHeader
                descritionClassName="text-[10px] md:text-[14px] "
                className=" md:text-[20px] text-[15px] "
                title="18000"
                description="Companies"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:justify-between  md:flex-row py-5 justify-center items-center mt-[84px] gap-10 md:p-8 bg-black">
        <Image
          className="w-[100px] h-[40px]  "
          src="/Vector (8).png"
          alt=""
          width={200}
          height={200}
        />
        <Image
          className="w-[140px] h-[40px]   "
          src="/logos.png"
          alt=""
          width={200}
          height={200}
        />
        <Image
          className="w-[140px] h-[40px]  "
          src="/logo (1).png"
          alt=""
          width={200}
          height={200}
        />
        <Image
          className="w-[140px] md:h-[40px] "
          src="/logo (2).png"
          alt=""
          width={200}
          height={200}
        />
        <Image
          className="w-[140px] h-[40px]   "
          src="/logo (3).png"
          alt=""
          width={200}
          height={200}
        />
      </div>
    </>
  );
};

export default Hero;
