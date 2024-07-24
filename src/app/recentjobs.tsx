import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/sectionHeader";
import JobCard from "@/components/JobCard";
const recentjobs = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center bg-white md:pl-10  md:pr-10 mb-16 mt-10">
        <SectionHeader
          className=" font-bold text-[20px] md:text-[30px] md:pt-10"
          title="Recent jobs available"
        />
        <Link className="underline text-[#309689]" href="/Jobs">
          View All
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
    </>
  );
};

export default recentjobs;
