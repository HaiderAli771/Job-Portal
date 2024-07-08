import React from "react";
import Navbar2 from "../Navbar2";
import Link from "next/link";
import Image from "next/image";
import Testimonial2 from "../Testimonial2";
export default function Jobs() {
    return (
      <div>
        <div className="flex flex-col-2  gap-2 ">
            <div className="flex flex-col gap-5">
            <Navbar2 />
            <Image className=" pl-11 pr-20 items-start" src={"/img.svg"} alt="img" width={480} height={50} />
            </div>

            <div className="mt-5  md:w-[850px] ">
                <div className="text-[#6C757D] flex justify-between">
                   <p > Showing 6-6 of 10 results</p>
                 <Link className="rounded-md px-2 py-1 border-[#6C757D] border" href="/sort by latest" >Sort by Latest</Link>
                </div> 
                
                <div className="">
              
              <div className="mt-4 md:pl-4 pt-6 md:pr-6">
              <div className="flex justify-between">
              <button className="text-[#2d8c7f] bg-teal-100  px-2  rounded-lg">10 min ago</button>
              <Image src="/Icon.svg" alt="icon" width={30} height={30} />
              </div>
              
              <div className="flex gap-6 items-start   mt-9">
                <Image className="items-start" src="/Logo.svg" alt="Logo" width={50} height={50} />
                <div className="leading-9">
                 <h1 className="text-2xl  font-bold">Forward Security Direrctor</h1>
                  <p>  Bauch, schuppe and schullit Co </p>
                </div>
              </div>
              <div className="flex justify-between items-end text-[#6C757D] mt-14 ">
                <div className="flex gap-3 tracking-tight ">
                  <div className="flex gap-2">
                    <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                    <p> Hotels & Tourism</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/clock.svg" alt="clock" width={20} height={20} />
                    <p>Full Time</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/g139.svg" alt="file" width={20} height={20} />
                    <p>$40000 - $42000</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                    <p>New-York, USA </p>
                  </div>
                  </div>
                 
                    <Link  className=" rounded-xl px-2 py-1 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Job-Details"}>Job Details</Link>
                  
                </div>
              </div>
               

              <div className="mt-[50px] md:pl-4 items-end pt-6 md:pr-6">
              <div className="flex justify-between">
              <button className="text-[#2d8c7f] bg-teal-100  px-2  rounded-lg">12 min ago</button>
              <Image src="/Icon.svg" alt="icon" width={30} height={30} />
              </div>
              
              <div className="flex gap-6 items-start  mt-9">
                <Image className="items-start" src="/Logo 1.svg" alt="Logo" width={50} height={50} />
                <div className="leading-9">
                 <h1 className="text-2xl  font-bold">Regional Creative Facilitor</h1>
                  <p>  Wisozk - Becker Co </p>
                </div>
              </div>
              <div className="flex justify-between text-[#6C757D] mt-14 ">
                <div className="flex gap-3 tracking-tight ">
                  <div className="flex gap-2">
                    <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                    <p> Hotels & Tourism</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/clock.svg" alt="clock" width={20} height={20} />
                    <p>Full Time</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/g139.svg" alt="file" width={20} height={20} />
                    <p>$40000 - $42000</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                    <p>New-York, USA </p>
                  </div>
                  </div>
                  
                    <Link  className=" rounded-xl px-2 py-1 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Job-Details"}>Job Details</Link>
                  
                </div>
              </div>
               

              <div className="mt-[50px] md:pl-4 pt-6  md:pr-6">
              <div className="flex justify-between">
              <button className="text-[#2d8c7f] bg-teal-100  px-2  rounded-lg">15 min ago</button>
              <Image src="/Icon.svg" alt="icon" width={30} height={30} />
              </div>
              
              <div className="flex gap-6  items-start mt-9">
                <Image className="items-start" src="/Logo 2.svg" alt="Logo" width={50} height={50} />
                <div className="leading-9">
                 <h1 className="text-2xl  font-bold">Internal Intregration Planer</h1>
                  <p>Marz quingly and Feest Inc. </p>
                </div>
              </div>
              <div className="flex justify-between  items-end text-[#6C757D] mt-14 ">
                <div className="flex gap-3 tracking-tight ">
                  <div className="flex gap-2">
                    <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                    <p> Hotels & Tourism</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/clock.svg" alt="clock" width={20} height={20} />
                    <p>Full Time</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/g139.svg" alt="file" width={20} height={20} />
                    <p>$40000 - $42000</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                    <p>New-York, USA </p>
                  </div>
                  </div>
                    <Link  className=" rounded-xl px-2 py-1 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Job-Details"}>Job Details</Link>
                 
                </div>
              </div>


               <div className="mt-[50px] md:pl-4 pt-6 md:pr-6">
              <div className="flex justify-between">
              <button className="text-[#2d8c7f] bg-teal-100  px-2  rounded-lg">24 min ago</button>
              <Image src="/Icon.svg" alt="icon" width={30} height={30} />
              </div>
              
              <div className="flex gap-6 items-start  mt-9">
                <Image className="items-start" src="/Logo 3.svg" alt="Logo" width={50} height={50} />
                <div className="leading-9">
                 <h1 className="text-2xl  font-bold">District internet Director</h1>
                  <p>Von-Rueden - Weber Co </p>
                </div>
              </div>
              <div className="flex justify-between items-end text-[#6C757D] mt-14 ">
                <div className="flex gap-3 tracking-tight ">
                  <div className="flex gap-2">
                    <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                    <p> Hotels & Tourism</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/clock.svg" alt="clock" width={20} height={20} />
                    <p>Full Time</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/g139.svg" alt="file" width={20} height={20} />
                    <p>$40000 - $42000</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                    <p>New-York, USA </p>
                  </div>
                  </div>
                 
                    <Link  className=" rounded-xl px-2 py-1 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Job-Details"}>Job Details</Link>
                  
                </div>
              </div>
               
                
              <div className="mt-[50px] md:pl-4 pt-6 md:pr-6">
              <div className="flex justify-between">
              <button className="text-[#2d8c7f] bg-teal-100  px-2 py-1 rounded-lg">26 min ago</button>
              <Image src="/Icon.svg" alt="icon" width={30} height={30} />
              </div>
              
              <div className="flex gap-6 items-start   mt-9">
                <Image className="items-start" src="/Logo 4.svg" alt="Logo" width={50} height={50} />
                <div className="leading-9">
                 <h1 className="text-2xl  font-bold">Coporate Tactics Facilator</h1>
                  <p>Cormier turner and Flately Inc </p>
                </div>
              </div>
              <div className="flex justify-between items-end text-[#6C757D]  mt-14 ">
                <div className="flex gap-3 tracking-tight ">
                  <div className="flex gap-2">
                    <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                    <p> Hotels & Tourism</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/clock.svg" alt="clock" width={20} height={20} />
                    <p>Full Time</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/g139.svg" alt="file" width={20} height={20} />
                    <p>$40000 - $42000</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                    <p>New-York, USA </p>
                  </div>
                  </div>
                  
                    <Link  className=" rounded-xl px-2 py-1 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Job-Details"}>Job Details</Link>
                  
                </div>
              </div>
              


              <div className="mt-[50px] md:pl-4 pt-6 md:pr-6">
              <div className="flex justify-between">
              <button className="text-[#2d8c7f] bg-teal-100  px-2  rounded-lg">26 min ago</button>
              <Image src="/Icon.svg" alt="icon" width={30} height={30} />
              </div>
              
              <div className="flex gap-6 items-start  mt-9">
                <Image className="items-start" src="/Logo 5.svg" alt="Logo" width={50} height={50} />
                <div className="leading-9">
                 <h1 className="text-2xl  font-bold">Forward Accounts Consultants</h1>
                  <p>Miller group </p>
                </div>
              </div>
              <div className="flex justify-between text-[#6C757D] mt-14 ">
                <div className="flex gap-3 tracking-tight ">
                  <div className="flex gap-2">
                    <Image src="/briefcase.svg" alt="briefcase" width={20} height={20} />
                    <p> Hotels & Tourism</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/clock.svg" alt="clock" width={20} height={20} />
                    <p>Full Time</p>
                  </div>
                 
                  <div className="flex gap-2">
                    <Image src="/g139.svg" alt="file" width={20} height={20} />
                    <p>$40000 - $42000</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Image src="/map-pin.svg" alt="map-pin" width={20} height={20} />
                    <p>New-York, USA </p>
                  </div>
                  </div>
                  <div>
                    <Link  className=" rounded-xl px-2 py-1 hover:bg-[#0d5e54] bg-[#309689] text-white" href={"/Job-Details"}>Job Details</Link>
                  </div>
                </div>
              </div>
                 
              </div>
              {/* last section */}
               <div className="flex justify-end md:gap-[350px] items-baseline mt-20 md:h-10 ">
                <div className="flex gap-8">
                  <div className="rounded-md w-10 h-10 text-center p-2 text-white  bg-[#309689] ">1</div>
                   <div className="rounded-md w-10 h-10 text-center p-2 text-[#6C757D] border-2 border-[#309689] ">2</div>
                  </div>
                  
                    <Link className="rounded-xl px-6 py-2 hover:bg-[#0d5e54] text-[#6C757D] border-2 border-[#6C757D] " href={"/Next"}>Next</Link>
                  
                </div>

            </div>

            </div>
                 <Testimonial2/>









        </div>
    );
}