import React from "react";
import Header from "../Header";
import News from "../news";
import Footer from "../Footer";
import SectionHeader from "@/components/sectionHeader";
import Quality from './quality'
import Question from "./Question";
import Video from "./Video";
import Working from "./Working";
const page = () => {
    return (
        <>
            <div className="bg-black pt-5">
                <Header />
                <h1 className="text-white font-bold text-[60px] text-center pt-16 pb-16">About Us</h1>
            </div>

            <div className="flex flex-row justify-center pt-10">
                <SectionHeader descritionClassName=' font-normal flex flex-row text-[17px] w-[650px]' className='text-[40px] font-bold flex flex-row gap-4 justify-center items-center p-5' title='Et adsldsls nunc ut tempus duis nisl sed massa' description='Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.' />


            </div >
            <Working />
            <Video />


            <Question />
            <Quality />
            <News />
            <Footer />
        </>
    )
}

export default page