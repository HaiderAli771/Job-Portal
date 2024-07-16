import React from "react";
import Navbar from "../Navbar";
import Link from "next/link";
import Image from "next/image";
import Header from "../Header";
import Testimonial2 from "../Testimonial2";
import Footer from "../Footer";
import JobCard from "@/components/JobCard";
export default function Jobs() {
  return (
    <>
      <div className="flex flex-col  md:gap-0 ">
        {/* <div className="bg-black pt-5"> 
        <Header />
        <h1 className="text-white font-bold text-[60px] text-center pt-16 pb-16">Jobs</h1>
      </div>  */}
        <div className="flex lg:flex-row flex-col items-center justify-center mt-4 gap-2 ">
          <div className="flex flex-col justify-center items-center gap-5">
            <Navbar />
            <Image className=" lg:pl-11  md:pl-10 md:w-[399px] px-3 items-start" src={"/img.svg"} alt="img" width={320} height={50} />
          </div>
          <div className=" md:p-4  lg:w-[850px] ">
            <div className="text-[#6C757D] flex md:flex-row  md:mt-0 mt-12  flex-col justify-between">
              <p className="text-center"> Showing 6-6 of 10 results</p>
              <div className="flex justify-center">
                <Link className="md:rounded-md rounded-3xl md:w-[150px]  w-[280px] mt-6 md:mt-0  text-center  px-1 py-2 md:border-[#6C757D] border-teal-600 border-2 shadow-lg" href="/sort by latest" >Sort by Latest</Link>
              </div>
            </div>
            <div>
              <JobCard
                timeAgo="24 min ago"
                iconSrc="/Icon.svg"
                logoSrc="/Logo.svg"
                title="Forward Security Director"
                companyName="Bauch, Schuppe and Schulist Co."
                industry="commerce"
                jobType="Full Time"
                salary="$42000 - $48000"
                location="Florida, USA"
              />
              <JobCard
                timeAgo="24 min ago"
                iconSrc="/Icon.svg"
                logoSrc="/Logo 1.svg"
                title="Regional Creative Facilitor"
                companyName="Wisozk - Becker Co"
                industry="commerce"
                jobType="Full Time"
                salary="$42000 - $48000"
                location="Florida, USA"
              />
              <JobCard
                timeAgo="24 min ago"
                iconSrc="/Icon.svg"
                logoSrc="/Logo 2.svg"
                title="Internal Intregration Planer"
                companyName="Marz quingly and Feest Inc."
                industry="Hotels & Tourism"
                jobType="Full Time"
                salary="$40000 - $42000"
                location="New-York, USA"
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
                location="New-York, USA"
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
                location="New-York, USA"
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

            {/* last section */}
            <div className="flex md:flex-row flex-col  gap-4 jsutify-center md:justify-evenly md:ml-0 md:gap-[350px] mb-11 items-center mt-20 md:h-10 ">
              <div className="flex gap-8 md:ml-0 ">
                <div className="rounded-md w-10 h-10  text-center p-2 text-white  bg-[#309689] ">1</div>
                <div className="rounded-md w-10 h-10 text-center p-2 text-[#6C757D] border-2 border-[#309689] ">2</div>
              </div>
              <Link className="rounded-xl  md:px-6  px-9 py-2 shadow-xl hover:bg-[#0d5e54] text-[#6C757D] border-2 border-[#6C757D] " href={"/Next"}>Next</Link>
            </div>
          </div>
        </div>

        <Testimonial2 />

      </div>

      {/* <Footer /> */}
    </>
  )
}