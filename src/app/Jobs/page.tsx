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
      <div className="bg-black">
        <Header />
        <h1 className="text-white font-bold text-[30px] md:text-[60px]  text-center pt-16 pb-16">Jobs</h1>
      </div>
      <div className="flex flex-col-2 h-[2000px] mt-4 gap-2 ">
        <div className="flex flex-col gap-5">
          <Navbar />
          <Image className=" pl-11 pr-20 items-start" src={"/img.svg"} alt="img" width={480} height={50} />
        </div>
        <div className="mt-5  md:w-[850px] ">
          <div className="text-[#6C757D] flex justify-between">
            <p > Showing 6-6 of 10 results</p>
            <Link className="rounded-md px-2 py-1 border-[#6C757D] border" href="/sort by latest" >Sort by Latest</Link>
          </div>
          <div>
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
          <div className="flex justify-end md:gap-[350px] mb-11 items-baseline mt-20 md:h-10 ">
            <div className="flex gap-8">
              <div className="rounded-md w-10 h-10 text-center p-2 text-white  bg-[#309689] ">1</div>
              <div className="rounded-md w-10 h-10 text-center p-2 text-[#6C757D] border-2 border-[#309689] ">2</div>
            </div>
            <Link className="rounded-xl px-6 py-2 hover:bg-[#0d5e54] text-[#6C757D] border-2 border-[#6C757D] " href={"/Next"}>Next</Link>
          </div>
        </div>
      </div>
      <Testimonial2 />
      <Footer />
    </>
  );
}