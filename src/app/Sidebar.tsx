import React from "react";
import Image from "next/image";
import Link from "next/link";
import Maps from "./Maps";
import SectionHeader from "@/components/sectionHeader";
import Cards from "@/components/Cards/Cards";

export default function Sidebar() {
    return ( 
        <div className="flex flex-col  mt-7 gap-7">
        <div className="bg-teal-50  rounded-2xl md:h-[980px] md:w-[300px]" >
           <h1 className="text-xl font-bold  pl-4 pt-4 " >Job overview</h1>          
            <div className="mt-5  pb-14 px-5">
            <Cards
            iconSrc="/user.svg"
            title="Job title"
            description="Coprative Solution Executive"           
            />
            <Cards  
             iconSrc="/clock.svg"
             title="Job Type"
             description="Full Time"           
            />            
            <Cards
             iconSrc="/briefcase.svg"
             title="Job Category"
             description="Commerce"
            
            />
            <Cards
             iconSrc="/expertise.svg"
             title="Experience"
             description="5 Years"           
            />
            <Cards
             iconSrc="/cap.svg"
             title="Degree"
             description="Master"                       
            />           
            <Cards
             iconSrc="/g135.svg"
             title="Offered Salary"
             description="$40000 - $42000"
                        
            />
            <Cards
             iconSrc="/gender.svg"
             title="Gender"
             description="All"                       
            />
            <Cards
             iconSrc="/map-pin.svg"
             title="Location"
             description="New_york, USA"                        
            />            
          </div>       
            <Maps/>             
        </div>
         <div className="flex flex-col gap-5 bg-teal-50 pt-5 pl-5  w-[300px]  rounded-2xl ">
            <h1 className="text-2xl font-bold tracking-tight ">Send Us Message</h1>             
             <div className="  flex bg-white pl-3  md:w-[260px] gap-2 rounded-2xl py-2   ">
                <Image className="ml-2" src="/person.svg" alt="person" width={20} height={20} />
             <input className="md:w-[250px] rounded-2xl outline-none " type="text"  placeholder=" Enter your Name" />
             </div>             
             <div className=" flex bg-white gap-2 pl-3 w-[260px] rounded-2xl py-2">
              <Image src="/mail.svg" alt="mail" width={20} height={20} />
             <input className="rounded-2xl  w-[260px]" type="text" placeholder="Email Address" />
             </div>           
             <div className="  flex pl-3 bg-white gap-2 w-[260px] rounded-2xl py-2 ">
            <Image src="/phone.svg" alt="phone" width={20} height={20} />
             <input className="rounded-2xl   w-[260px]" type="text" placeholder="phone number" />
             </div>            
             <div className="  flex bg-white gap-2  pl-3 w-[260px] rounded-2xl  ">
             <Image className="" src="/message.svg" alt="message" width={20} height={20} />
             <textarea className="pt-4" placeholder="Enter your message"></textarea>
            </div>
             <Link  href={"/send message"} className="bg-[#309689] mb-7 mt-4 hover:bg-[#02907d] text-white py-2 tracking-tight text-center w-44  rounded-xl">Send Message</Link>
         </div>
    
    </div>
    )
}