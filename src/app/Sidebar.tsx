import React from "react";
import Image from "next/image";
import Link from "next/link";
import Maps from "./Maps";
import SectionHeader from "@/components/sectionHeader";

export default function Sidebar() {
    return ( 
        <div className="flex flex-col mt-7 gap-7">
        <div className="bg-teal-50  rounded-2xl md:h-[1000px] md:w-[300px]" >
           <h1 className="text-xl font-bold pl-4 pt-4 " >Job overview</h1>
            
            
            <div className="mt-5  px-5">
            <div className="flex gap-3 mb-6 mt-3 items-start ">
                <Image className="mt-1" src="/user.svg" alt="user" width={30} height={30} />
            <SectionHeader className='leading-6 text-base gap-[4px] tracking-tight font-bold' title= 'Job Title' descriptionClassName='text-sm tracking-tight font-normal' description='Coprative Solution Executive'/>     
            </div>
            <div className="flex gap-[17px] mt-3 items-start ">
                <Image className="mt-1" src="/clock.svg" alt="clock" width={25} height={25} />
                <SectionHeader className='text-base leading-6 gap-[5px] tracking-tight font-bold' title= 'Job Type' descriptionClassName='text-sm tracking-tight font-normal' description='Full Time'/>
            </div>
            <div className="flex gap-[17px] mt-3 items-start ">
                <Image className="mt-1" src="/briefcase.svg" alt="briefcase" width={25} height={25} />
                <SectionHeader className='text-base gap-[5px] leading-6 tracking-tight font-bold' title= 'Job Category' descriptionClassName='text-sm tracking-tight font-normal' description='Commerce'/>                
            </div>
            <div className="flex gap-[17px] mt-3 items-start ">
                <Image className="mt-1" src="/expertise.svg" alt="expertise" width={25} height={25} />
                <SectionHeader className='text-base leading-6 gap-[5px] tracking-tight font-bold' title= 'Experience' descriptionClassName='text-sm tracking-tight font-normal' description='5 Years'/>
            </div>
            <div className="flex gap-[17px] mt-3 items-start ">
                <Image className="mt-1" src="/cap.svg" alt="cap" width={25} height={25} />
                <SectionHeader className='text-base leading-6 gap-[5px] tracking-tight font-bold' title= 'Degree' descriptionClassName='text-sm tracking-tight font-normal' description='Master'/>                
            </div>
            <div className="flex gap-[17px] mt-3 items-start ">
                <Image className="mt-1" src="/g135.svg" alt="file" width={25} height={25} />           
                <SectionHeader className='text-base leading-6 gap-[5px] tracking-tight font-bold' title= 'Offered Salary' descriptionClassName='text-sm tracking-tight font-normal' description='$40000 - $42000'/>               
            <div className="flex gap-[17px] mt-3 items-start ">
                <Image className="mt-1" src="/gender.svg" alt="gender" width={25} height={25} />      
                <SectionHeader className='text-base leading-6 gap-[5px] tracking-tight font-bold' title= 'Gender' descriptionClassName='text-sm tracking-tight font-normal' description='All'/>
            </div>
            <div className="flex gap-[17px] mt-3 items-start ">
                <Image className="mt-1" src="/map-pin.svg" alt="map-pin" width={25} height={25} />
                <SectionHeader className='text-base leading-6 gap-[5px] tracking-tight font-bold' title= 'Location' descriptionClassName='text-sm tracking-tight font-normal' description='New_york, USA'/>
            </div>            
            </div >            
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
    </div>
    )
}