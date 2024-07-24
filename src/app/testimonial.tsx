import React from "react";
import SectionHeader from "@/components/sectionHeader";
import Testimonials from "@/components/Testimonials";
const testimonial = () => {
  return (
    <div className="bg-[#cffff8] ml-2 mr-2 rounded-xl flex flex-col justify-center ">
      <div className="flex flex-col justify-center items-center gap-5 mb-14 mt-14">
        <SectionHeader
          descritionClassName=" text-center font-normal text-[13px] md:text-[16px]"
          className="  text-black md:text-[40px] text-[30px] font-bold text-center"
          title="Testimonial From Our Customers"
          description="At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id..."
        />
      </div>
      <div className=" flex-row grid md:grid-cols-1 lg:grid-cols-3 grid-cols-1 justify-center mb-14">
        <Testimonials
          title="Awesome, thank you!"
          name="Marco Kihn"
          ImgSrc={"/Avatar.png"}
        />

        <Testimonials
          title="Awesome, thank you!"
          name="Kristin Hester"
          ImgSrc={"/Avatar (3).png"}
        />

        <Testimonials
          title="Awesome, thank you!"
          name="Zion Cisnerous"
          ImgSrc={"/Avatar (1).png"}
        />
      </div>
    </div>
  );
};

export default testimonial;
