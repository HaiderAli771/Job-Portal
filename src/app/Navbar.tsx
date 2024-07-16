import React from "react";
import Image from "next/image"
import Bar from "@/components/navbar";
import Catageory from "@/components/Catageory/Catageory";
import SalarySlider from './Job-Details/SalarySlider'
export default function Navbar() {
  return (
    <nav className="bg-[#EBF5F4] md:w-[350px] rounded-2xl mx-2 md:pb-12 pb-14 pr-3  md:ml-11 md:mt-4">
      <div className="flex flex-col ml-6 pt-8 md:ml-7 items-center gap-4  "> 
        <h1 className="font-semibold  text-xl">Search by Job Title</h1>
        <div className="flex bg-white gap-3 w-[262px] md:w-[270px] rounded-xl py-2  pl-1">
          <Image src="/search.svg" alt="search" width={20} height={20} />
          <input className=" outline-none" type="text" placeholder="Search by Job Title" />
        </div>
      </div>
      <div className="flex flex-col md:ml-7 gap-3 items-center ml-6 mt-4">
        <h1 className="font-semibold text-xl ">Location</h1>
        <div className="flex bg-white gap-3 w-[264px] md:w-[270px] rounded-xl py-2 pl-1">
          <Image src="/Location.svg" alt="location" width={20} height={20} />
          <input className=" outline-none " type="text" placeholder="Chrome City" />
        </div>
      </div>

      <div className=" md:ml-7 ml-7 mt-3 flex flex-col justify-center items-center " >
        <h1 className="font-semibold text-xl md:ml-1  md:mt-3 underline ">Category</h1>
         
           <Bar
           className=" gap-[106px]  m-2"
           heading="Commerce"
           />
           <Bar
           className=" gap-[47px] m-2"
           heading="Telecomunications"
           />
           <Bar
           className=" gap-[61px] m-2"
           heading="Hotels & Tourism"
           />
           <Bar
           className=" gap-[113px] m-2"
           heading="Education"
           />
           <Bar
           className=" gap-[53px] m-2"
           heading="Financial services"
           />
          
           </div>
          
      <div className="ml-7 mt-3 flex flex-col justify-center items-center">
      <p className="font-semibold text-xl underline  ">Job Type</p>
      <Bar
           className=" gap-[120px] m-2"
           heading="Full Time"
           />
      <Bar
           className=" gap-[115px] m-2"
           heading="Part Time"
           />
        <Bar
           className=" gap-[115px] m-2"
           heading="Freelance"
           />
        <Bar
           className=" gap-[120px] m-2"
           heading="Seasonal"
           />
        <Bar
           className=" gap-[93px] m-2"
           heading="Fixed-Priced"
           />    
      </div>
      <div className="ml-7 mt-3 flex flex-col justify-center items-center">
      <p className="font-semibold text-xl  underline">Experience Level</p>         
      <Bar
           className=" gap-[73px] m-2"
           heading="No-experience"
           /> 
      <Bar
           className=" gap-[128px] m-2"
           heading="Fresher"
           /> 
      
      <Bar
           className=" gap-[90px] m-2"
           heading="Intermediate"
           /> 
      <Bar
           className=" gap-[135px] m-2"
           heading="Expert"
           /> 
      
      </div>
      <div className="ml-7 mt-3 flex flex-col justify-center items-center">
      <p className="font-semibold text-xl underline">Date Posted</p>

      <Bar
           className=" gap-[164px] m-2"
           heading="All"
           /> 
      <Bar
           className=" gap-[111px] m-2"
           heading="Last hour "
           /> 
      <Bar
           className=" gap-[86px] m-2"
           heading="Last 24 hour"
           /> 
      <Bar
           className=" gap-[95px] m-2"
           heading="Last 7 days"
           /> 
      <Bar
           className=" gap-[83px] m-2"
           heading="Last 30 days"
           /> 
      </div>
      <SalarySlider />
      <p className="font-semibold md:ml-7 text-center md:text-start mt-3 text-2xl ">Tags</p>
      <div className="grid md:grid-cols-2 gap-x-3 gap-y-3  ml-6 mt-3 mr-10 " >
        <Catageory
        href={"/Engineering"}
        children="Engineering"
        />
        <Catageory
        href={"/Design"}
        children="Design"
        />
        <Catageory
        href={"/Market"}
        children="Market"
        />
        <Catageory
        href={"/Marketing"}
        children="Marketing"
        />
        <Catageory
        href={"/Mnagment"}
        children="Managment"
        />
        <Catageory
        href={"/Soft"}
        children="Soft"
        />
        <Catageory
        href={"/Construction"}
        children="construction"
        />  
      </div>
      
    </nav>
  )
}