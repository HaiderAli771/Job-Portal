import React from "react"
import Image from "next/image"
import Link from "next/link"
import SectionHeader from "@/components/sectionHeader"
import Testimonial from "@/components/Testimonial"


export default function Testimonial2() {
    return (
        <div className="mt-16 pt-5 h-[600px]  bg-[#EBF5F4]">
            <SectionHeader className="text-center pt-8 text-6xl font-bold" descriptionClassName="md:mt-7 truncate text-sm font-normal" title='Top Company' description=" At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id sce.." />
            <div className="flex justify-center md:ml-20 gap-8 mt-10">
              <Testimonial
              className="flex mt-9 flex-col items-center gap-3"
                  iconSrc="/Icon+bg.svg"
                  h1className="pb-4 text-2xl pl-4 font-bold "
                  heading="Instagram"
                  paragraph="Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean"
                  jobs="8 open jobs"
                  />
              <Testimonial
              className="flex mt-9 flex-col items-center  gap-3"
                  iconSrc="/Icon_bg2.svg"
                  h1className="pb-4 text-2xl pl-1 font-bold "
                  heading="Tesla"
                  paragraph=" At pellentesque amet odio cras imperdiet nisl. Ac magna aliquet massa leo"
                  jobs="18 open jobs"
                  />         
              <Testimonial
              className="flex mt-9 flex-col items-center gap-3"
                  iconSrc="/Icon+1.png"
                  h1className="pb-4 text-2xl pl-4 font-bold "
                  heading="MecDonald&apos;s"
                  paragraph=" Odio aliquet  tell us maecenas. Faucibus in viverra venenatis phasellus"
                  jobs="12 open jobs"
                  />          
              <Testimonial
                    className="flex mt-9 flex-col pl-[74px] gap-3"
                    iconSrc="/apple.png"
                    h1className="pb-4 text-2xl pl-2 font-bold "
                    heading="Apple"
                    paragraph="Et odio sem tell us ultrices posuere consequat . Trestique nascetur sapien"
                    jobs="8 open jobs"                  />
           </div>       
        </div>
    )
}