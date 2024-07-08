import React from "react"
import Image from "next/image"
import Link from "next/link"


export default function Testimonial2() {
    return (
        <div className="mt-16 h-auto bg-[#EBF5F4]">
           <div className="text-center pt-8">
            <h1 className="text-5xl  font-bold">Top Company</h1>
            <p className="md:mt-7 truncate"> At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id sce..</p>
          
            </div>  
            <div className="flex justify-center md:ml-20 gap-8 mt-10">

            <div className=" leading-6 bg-white  rounded-2xl h-[300px] md:w-[250px]">
               <div className="flex mt-9 flex-col pl-[69px] gap-3">
                <Image className="ml-5 items-center" src="/Icon+bg.svg" alt="Icon" width={70} height={70} />
              <h1 className=" pb-4 text-2xl font-bold ">Instagram</h1>
              </div>
               <p className="pb-5 text-center">
               Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean
               </p>
               <Link className="ml-[69px]  rounded-2xl px-1 py-1 bg-teal-100 text-[#309689]" href="/Jobs">8 open jobs</Link>
            </div>

            <div className="leading-6 bg-white  rounded-2xl h-[300px] md:w-[260px]">
            <div className="flex mt-9 flex-col pl-[80px] gap-3">
                <Image className="ml-5 items-center" src="/Icon_bg2.svg" alt="Icon" width={70} height={70} />
              <h1 className="pb-4 pl-5 tracking-normal text-2xl font-bold ">Tesla</h1> 
              </div>
              <p className="pb-5 text-center">
               At pellentesque amet odio cras imperdiet nisl. Ac magna aliquet massa leo
               </p>
               <Link className="ml-[75px] rounded-2xl px-2 py-1 bg-teal-100 text-[#309689]" href="/Jobs">18 open jobs</Link>
            </div>

            <div className="leading-6 bg-white  rounded-2xl h-[300px]  md:w-[250px]">
               <div className="flex mt-9 flex-col pl-[60px] gap-3">
                 <Image className="pl-8 items-center" src="/Icon+1.png " alt="Icon" width={100} height={100} />
                 <h1 className="pb-4  tracking-tight text-2xl font-bold ">MecDonald&apos;s</h1>
               </div>
                <p className="pb-[20px] text-center">
              Odio aliquet  tell us maecenas. Faucibus in viverra venenatis phasellus
               </p>
               <Link className="ml-[75px] rounded-2xl px-2 py-1 bg-teal-100 text-[#309689]" href="/Jobs">12 open jobs</Link>
            </div>

            <div className="leading-6 bg-white  rounded-2xl h-[300px]   md:w-[250px]">
            <div className="flex mt-9 flex-col pl-[60px] gap-3">
                <Image  className="pl-8 items-center" src="/apple.png " alt="Icon" width={100} height={100} />
              <h1 className="pl-9 pb-3 text-2xl font-bold ">Apple</h1>
              </div>
               <p className="pb-6 text-center">
              Et odio sem tell us ultrices posuere consequat . Trestique nascetur sapien
               </p>
               <Link className="ml-[75px] rounded-2xl px-2 py-1 bg-teal-100 text-[#309689]" href="/Jobs">8 open jobs</Link>
            </div>

           </div>       
        </div>
    )
}