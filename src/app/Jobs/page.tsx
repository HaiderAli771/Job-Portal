import React from "react";
import Navbar from "../navbar";
import Link from "next/link";
import Image from "next/image";
import Header from "../header";
import Testimonial2 from "../Testimonial2";
import Footer from "../footer";
import JobCard from "@/components/JobCard";
import SectionHeader from "@/components/sectionHeader";
export default function Jobs() {
  return (
    <>
      <div className="bg-black md:mx-3">
        <Header />
        <h1 className="text-white font-bold text-[30px] md:text-[60px]  text-center pt-16 pb-16">
          Jobs
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row  md:mx-2 mt-4 gap-2 ">
        <div className="flex flex-col items-center gap-5">
          <Navbar />
          <div className="text-black ">
            <SectionHeader
              className="absolute pl-[34px] pt-5 gap-3 md:pl-20 "
              h1ClassName="text-white font-bold text-md md:text-3xl tracking-wider"
              h1="WE ARE HIRING"
              descritionClassName="font-noramal  md:text-xl text-sm  text-white "
              description="Apply Today!"
            />
            <Image
              className=" md:pl-10 items-center md:w-[396px] px-3   "
              src={"/img.svg"}
              alt="img"
              width={327}
              height={80}
            />
          </div>
        </div>
        <div className="mt-5 md:mr-4 w-full ">
          <div className="text-[#6C757D] md:text-lg text-sm flex md:flex-row flex-col gap-5 text-center md:justify-between justify-center">
            <p> Showing 6-6 of 10 results</p>
            <Link
              className="md:rounded-md px-2 py-1 mx-12 md:mx-0 md:border-[#6C757D] border-teal-500 rounded-3xl md:border border-2"
              href="/sort by latest"
            >
              Sort by Latest
            </Link>
          </div>
          <div>
            <JobCard
              timeAgo="24 min ago"
              iconSrc="/Icon.svg"
              logoSrc="/Logo.svg"
              title="Forward Security Director"
              companyName="Bauch,Schuppe and Schulist Co."
              industry="Hotel and tourism"
              jobType="Full Time"
              salary="$42000 - $48000"
              location="New-York, USA"
            />
            <JobCard
              timeAgo="24 min ago"
              iconSrc="/Icon.svg"
              logoSrc="/Logo 1.svg"
              title="Regional Creative Facilitor"
              companyName="Wisozk - Becker Co"
              industry="Medai"
              jobType="Part time"
              salary="$28000 - $32000"
              location="Los Angeles, USA"
            />
            <JobCard
              timeAgo="24 min ago"
              iconSrc="/Icon.svg"
              logoSrc="/Logo 2.svg"
              title="Internal Intregration Planer"
              companyName="Marz quingly and Feest Inc."
              industry="Contruction"
              jobType="Full Time"
              salary="$48000 - $50000"
              location="Texas, USA"
            />
            <JobCard
              timeAgo="24 min ago"
              iconSrc="/Icon.svg"
              logoSrc="/Logo 3.svg"
              title="District internet Director"
              companyName="Von-Rueden - Weber Co"
              industry="Hotels & Tourism"
              jobType="Full Time"
              salary="$40000 - $42000"
              location="Florida, USA"
            />
            <JobCard
              timeAgo="24 min ago"
              iconSrc="/Icon.svg"
              logoSrc="/Logo 4.svg"
              title="Coporate Tactics Facilitator"
              companyName="Comrmier,Turner and Flactily Inc."
              industry="Hotels & Tourism"
              jobType="Full Time"
              salary="$40000 - $42000"
              location="Bottson, USA"
            />
            <JobCard
              timeAgo="24 min ago"
              iconSrc="/Icon.svg"
              logoSrc="/Logo 5.svg"
              title="Forward Accounts Consultants"
              companyName="Miller group"
              industry="Hotels & Tourism"
              jobType="Full Time"
              salary="$40000 - $42000"
              location="New-York, USA"
            />
          </div>
          <div className="flex md:flex-row flex-col  gap-4 jsutify-center md:justify-evenly md:ml-0 md:gap-[350px] mb-11 items-center mt-20 md:h-10 ">
            <div className="flex gap-8 md:ml-0 ">
              <div className="rounded-md w-10 h-10 text-sm md:text-md text-center p-2 text-white  bg-[#309689] ">
                1
              </div>
              <div className="rounded-md w-10 h-10 text-center text-sm  md:text-md p-2 text-[#6C757D] border-2 border-[#309689] ">
                2
              </div>
            </div>
            <Link
              className="rounded-xl text-sm md:text-md  md:px-6  px-9 py-2 shadow-xl hover:bg-[#0d5e54] text-[#6C757D] border-2 border-[#6C757D] "
              href={"/Next"}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
      <Testimonial2 />
      <Footer />
    </>
  );
}
