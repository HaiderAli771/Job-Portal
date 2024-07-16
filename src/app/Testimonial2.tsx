import React from "react"
import SectionHeader from "@/components/sectionHeader"
import Testimonial from "@/components/Testimonial"


export default function Testimonial2() {
    return (
        <div className="md:mt-16 pt-5  md:h-[950px]  m-2 bg-[#EBF5F4]">
            <SectionHeader className="text-center px-2 md:px-0 pt-8 text-6xl font-bold" descritionClassName="md:mt-7 truncate text-sm mt-5 txet-center md:px-0 px-4 font-normal" title='Top Company' description=" At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id sce.." />
            <div className="flex md:flex-row lg:flex-row flex-col  justify-center lg:gap-8 gap-6 md:mt-10 mt-16 px-4 ">
                <div>
                    <Testimonial
                        className="flex mt-9 flex-col pt-5  items-center  gap-3"
                        iconSrc="/Icon+bg.svg"
                        h1className="pb-4 text-2xl font-bold "
                        heading="Instagram"
                        paragraph="Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi "
                        jobs="8 open jobs"
                    />
                    <Testimonial
                        className="flex mt-9 flex-col pt-5 items-center  gap-3"
                        iconSrc="/Icon_bg2.svg"
                        h1className="pb-4 text-2xl pl-1 font-bold "
                        heading="Tesla"
                        paragraph=" At pellentesque amet odio cras imperdiet nisl. Ac magna aliquet massa leo"
                        jobs="18 open jobs"
                    />
                </div>
                <div>
                    <Testimonial
                        className="flex mt-9 flex-col pt-5 items-center gap-3"
                        iconSrc="/Icon+1.png"
                        h1className="pb-4 text-2xl md:pl-4 font-bold "
                        heading="MecDonald&apos;s"
                        paragraph=" Odio aliquet  tell us maecenas. Faucibus in viverra venenatis phasellus"
                        jobs="12 open jobs"
                    />
                    <Testimonial
                        className="flex mt-9 flex-col items-center pt-5  gap-3"
                        iconSrc="/apple.png"
                        h1className="pb-4 text-2xl pl-2 font-bold "
                        heading="Apple"
                        paragraph="Et odio sem tell us ultrices posuere consequat . Trestique nascetur sapien"
                        jobs="8 open jobs" />
                </div>
            </div>
        </div>
    )
}