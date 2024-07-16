import React from "react";
import Header from "../Header";
import News from "../news";
import Footer from "../Footer";
import SectionHeader from "@/components/sectionHeader";
import Quality from './quality'
import Question from "./Question";
import Video from "./Video";
import Working from "./Working";
import FAQ from "./FAQ";
const page = () => {
    return (
        <>
            <div className="bg-black">
                <Header />
                <h1 className="text-white font-bold text-[30px] md:text-[60px]  text-center pt-16 pb-16">About Us</h1>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center pt-10 md:pl-0 md:pr-0 pl-3 pr-3">
                <SectionHeader descritionClassName=' font-normal flex flex-row text-[15px] text-center  md:text-[17px] w-auto md:w-[650px]' className='text-[30px] md:text-[40px] font-bold flex flex-row gap-4 justify-center text-center items-center p-0 md:p-5' title='Et adsldsls nunc ut tempus duis nisl sed massa' description='Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.' />


            </div >

            <Working />
            <Video />

            <SectionHeader className="text-3xl text-center mt-10 font-bold  " title="Frequently Asked Questions" descritionClassName='text-[15px] mb-8 text-gray-600 font-normal pt-4  ' description="lorem ipsm to do is to add some photo of img and show some img" />
            <div>
                <FAQ />
            </div>
            <Quality />
            <News />
            <Footer />
        </>
    )
}

export default page