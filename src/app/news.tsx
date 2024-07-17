import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/sectionHeader";
import News from '@/components/News'

const news = () => {
    return (
        <>
            <div className="bg-white pl-2 pr-2 py-8 justify-center text-center  ">
                <SectionHeader descritionClassName='text-[15px] mb-8 text-gray-600 font-normal pl-5 pr-5 md:pl-10 md:pr-10 ' className='text-3xl font-bold mb-8 pr-5 pl-5 md:pl-10 md:pr-10 ' title='News and Blog' description='Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor' />
                <div className=" justify-between items-center   flex flex-col gap-10">
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 justify-center grid-cols-1">
                        <News paragraph="News" ImgSrc={'/news.png'} />
                        <News paragraph="Blogs" ImgSrc={'/Blog.png'} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default news;