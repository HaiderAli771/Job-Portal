import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/sectionHeader";
import News from '@/components/News'

const news = () => {
    return (
        <>
            <div className="bg-white py-8  ">
                <SectionHeader descritionClassName='text-[15px] mb-8 text-gray-600 font-normal pl-10 pr-10 ' className='text-3xl font-bold mb-8 pl-10 pr-10 ' title='News and Blog' description='Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor' />
                <div className="flex flex-row justify-center gap-10">
                    <News title='Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024' ImgSrc={'/news.png'} />
                    <News title='How to avoid the top six most common job interview mistakes' ImgSrc={'/blog.png'} />
                </div>
            </div>
        </>
    );
};

export default news;