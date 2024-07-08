import React from "react";
import Image from "next/image"
import Link from "next/link";

export default function Navbar2() {
  return (
    <nav className="bg-[#EBF5F4] md:w-[350px] rounded-2xl md:pb-12 md:ml-11 md:mt-4">

      <div className="flex flex-col pt-8 md:ml-7 gap-4  "> 
        <h1 className="font-semibold text-xl">Search by Job Title</h1>
        <div className="flex bg-white gap-3 w-[270px] rounded-xl py-2 pl-1">
          <Image src="/search.svg" alt="search" width={20} height={20} />
          <input className=" outline-none" type="text" placeholder="Search by Job Title" />
        </div>
      </div>

      <div className="flex flex-col md:ml-7 gap-3  mt-4">
        <h1 className="font-semibold text-xl ">Location</h1>
        <div className="flex bg-white gap-3  md:w-[270px] rounded-xl py-2 pl-1">
          <Image src="/Location.svg" alt="location" width={20} height={20} />
          <input className=" outline-none" type="text" placeholder="Chrome City" />
        </div>
      </div>

      <div className=" md:ml-7  " >

        <h1 className="font-semibold text-xl md:ml-1 md:mt-3 underline ">Category</h1>

        <div className="flex gap-[106px] m-2 ">
          <div className="flex gap-2">
          <input type="checkbox" />
          <p>Commerce</p>
          </div>
          <p className="rounded-xl   px-2 bg-white">
            10
          </p>
        </div>

        <div className="flex m-2 gap-[55px] ">
          <div className="flex gap-2">
            <input type="checkbox" />
          <p>Telecomunication</p>
          </div>
          <p className="rounded-xl  px-2 bg-white">
            10
          </p>
        </div>

        <div className="flex m-2 gap-[41px] ">
          <div className="flex gap-2">
          <input type="checkbox" />
          <p>Hotels and Tourism</p>
          </div>
          <p className="rounded-xl  px-2 bg-white">
            10
          </p>
        </div>

        <div className="flex m-2 gap-[111px] ">
          <div className="flex gap-2">
          <input type="checkbox" />
          <p>Education</p>
          </div>
          <p className="rounded-xl  px-2 bg-white">
            10
          </p>
        </div>

        <div className="flex m-2 gap-[51px]  ">
         <div className="flex gap-2">
          <input type="checkbox" />
          <p>Financial services</p>
          </div>
          <p className="rounded-xl  px-2 bg-white">
            10
          </p>
        </div>
        <button className="bg-[#309689] hover:bg-[#075f54] text-white md:w-[260px] md:mt-2 p-1 rounded-xl  font-semibold">Show more</button>
      </div>

      <div className="ml-7 mt-3">
      <p className="font-semibold text-xl underline ">Job Type</p>

      <div className="flex m-2 gap-[120px] ">
        <div className="flex gap-2">
        <input type="checkbox" />
        <p>Full Time</p>
        </div>
        <p className="rounded-xl px-2 bg-white">
          10
        </p>
      </div>


      <div className="flex m-2 gap-[115px] ">
        <div className="flex gap-2">
        <input type="checkbox" />
        <p>Part Time</p>
        </div>
        <p className="rounded-xl  px-2 bg-white">
          10
        </p>
      </div>

      <div className="flex m-2 gap-[115px] ">
       <div className="flex gap-2">
        <input type="checkbox" />
        <p>Freelance</p>
        </div>
        <p className="rounded-xl  px-2 bg-white">
          10
        </p>
      </div>

      <div className="flex m-2 gap-[120px] ">
        <div className="flex gap-2">
        <input type="checkbox" />
        <p>Seasonal</p>
        </div>
        <p className="rounded-xl  px-2 bg-white">
          10
        </p>
      </div>
      <div className="flex m-2 gap-[93px] ">
        <div className="flex gap-2">
        <input type="checkbox" />
        <p>Fixed-Priced</p>
        </div>
        <p className="rounded-xl  px-2 bg-white">
          10
        </p>
      </div>
      
      </div>

      <div className="ml-7 mt-3">
      <p className="font-semibold text-xl underline">Experience Level</p>

      <div className="flex m-2 gap-[73px] ">
        <div className="flex gap-2">
        <input type="checkbox" />
        <p>No-experience</p>
        </div>
        <p className="rounded-xl px-2 bg-white">
          10
        </p>
      </div>


      <div className="flex m-2 gap-[128px] ">
        <div className="flex gap-2">
        <input type="checkbox" />
        <p>Fresher</p>
        </div>
        <p className="rounded-xl  px-2 bg-white">
          10
        </p>
      </div>

      <div className="flex m-2 gap-[90px] ">
       <div className="flex gap-2">
        <input type="checkbox" />
        <p>Intermediate</p>
        </div>
        <p className="rounded-xl  px-2 bg-white">
          10
        </p>
      </div>

      <div className="flex m-2 gap-[135px] ">
        <div className="flex gap-2">
        <input type="checkbox" />
        <p>Expert</p>
        </div>
        <p className="rounded-xl  px-2 bg-white">
          10
        </p>
      </div>
      
      </div>
      <div className="ml-7 mt-3">
      <p className="font-semibold text-xl underline">Date Posted</p>

      <div className="flex m-2 gap-[115px] ">
        <div className="flex gap-2">
        <input type="checkbox" />
        <p>All</p>
        </div>
        <p className="rounded-xl ml-12 px-2 bg-white">
          10
        </p>
      </div>

      <div className="flex m-2 gap-[61px] ">
       <div className="flex gap-2">
        <input type="checkbox" />
        <p>Last hour</p>
        </div>
        <p className="rounded-xl ml-12 px-2 bg-white">
          10
        </p>
      </div>


      <div className="flex m-2  gap-[85px]">
        <div className="flex gap-2">
        <input type="checkbox" />
        <p>Last 24 hour</p>
        </div>
        <p className="rounded-xl  px-2 bg-white">
          10
        </p>
      </div>


      <div className="flex m-2  gap-[94px]">
       <div className="flex gap-2">
        <input type="checkbox" />
        <p>Last 7 days </p>
        </div>
        <p className="rounded-xl  px-2 bg-white">
          10
        </p>
      </div>

      <div className="flex m-2 gap-[82px] ">
        <div className="flex gap-2">
        <input type="checkbox" />
        <p>Last 30 days</p>
       </div>
        <p className="rounded-xl  px-2 bg-white">
          10
        </p>
      </div>
      </div>
      <p className=" text-xl  font-semibold md:ml-7">Salary</p>
      <Image className="md:w-[250px] mt-3 ml-7" src="/Vector.svg" alt="lock" width={100} height={100} />

      <div className="flex m-2 gap-[55px] mt-3  ml-7">
        <p>Salary:$0-$9999</p>
        <Link href={"/Apply"} className="text-white bg-[#309689] hover:bg-[#017767] rounded-md px-4 " >Apply</Link>
      </div>

      <p className="font-semibold md:ml-7 mt-3 text-2xl ">Tags</p>
      <div className="grid md:grid-cols-2 gap-x-3 gap-y-3  ml-6 mt-3 mr-10 " >

        <Link href={"/Engineering"} className="text-[#309689] hover:bg-[#03c6ac] text-center bg-[#baf3eb] rounded-2xl py-1 px-1"> Engineering</Link>
        <Link href={"/design"} className="text-[#309689] hover:bg-[#03c6ac] text-center bg-[#baf3eb] rounded-2xl px-1 py-1" >design </Link>
        <Link href={"/UI/UX"} className="text-[#309689] hover:bg-[#03c6ac] text-center bg-[#baf3eb] rounded-2xl px-1 py-1">Market </Link>
        <Link href={"/UI/UX"} className="text-[#309689] hover:bg-[#03c6ac] text-center bg-[#baf3eb] rounded-2xl px-1 py-1">Marketing</Link>
        <Link href={"/UI/UX"} className="text-[#309689] hover:bg-[#03c6ac] text-center bg-[#baf3eb] rounded-2xl px-1 py-1">Managment </Link>
        <Link href={"/UI/UX"} className="text-[#309689] hover:bg-[#03c6ac] text-center bg-[#baf3eb] rounded-2xl px-1 py-1">Soft </Link>
        <Link href={"/UI/UX"} className="text-[#309689] hover:bg-[#03c6ac] text-center bg-[#baf3eb] rounded-2xl px-1 py-1">Construction </Link>
      </div>

    </nav>
  )
}