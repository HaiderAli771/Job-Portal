import React from "react";
import SectionHeader from "@/components/sectionHeader";
import Link from "next/link";
import Image from "next/image";
const betterfuture = () => {
  return (
    <div className="flex flex-row justify-center  md:m-10 mb-2 mt-10 ml-2 mr-2 pl-0 pr-0 bg-black  rounded-xl">
      <div className="grid md:grid-cols-1 justify-between items-center lg:grid-cols-2 grid-cols-1">
        <div className="flex flex-col md:items-start items-center pl-4 pr-4 gap-8">
          <SectionHeader
            descritionClassName="text-white lg:w-[500px] md:text-left text-center font-normal text-[12px] lg:text-[16px]"
            className="lg:text-[50px] md:text-left text-center text-[30px] font-bold text-white lg:w-[470px] pt-5 lg:pt-11 "
            title="Create A Better Future For Yourself"
            description="At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.Blandit a massa elementum id scelerisque rhoncus"
          />
          <Link
            className="flex mb-11 flex-row justify-center items-center rounded-lg w-[100px] text-white lg:w-[110px] lg:h-[50px]  bg-[#309689]"
            href="/Jobs"
          >
            Search Jobs
          </Link>
        </div>
        <Image className="" src="/worker.png" alt="" width={600} height={420} />
      </div>
    </div>
  );
};
export default betterfuture;
