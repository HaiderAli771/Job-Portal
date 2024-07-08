import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/sectionHeader";
const news = () => {
    return (
        <div className="bg-white py-8 ">
            <div className="">
                <SectionHeader descritionClassName='text-[15px] mb-8 text-gray-600 font-normal' className='text-3xl font-bold mb-8  pl-16' title='News and Blog' description='Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor' />
                <div className="flex flex-row justify-center gap-20">

                    <div className="bg-white  rounded-xl overflow-hidden">
                        <Image className='' src='/news.png' alt="" width={700} height={200} />
                        <div className="p-4">
                            <SectionHeader descritionClassName='text-xl font-bold mt-2 w-[600px] gap-0' className='text-black gap-0 ' title='30 March 2024' description='Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024' />
                            <Link href="#" className="text-[#309689] mt-4 block">Read more &rarr;</Link>
                        </div>
                    </div>
                    <div className="bg-white  rounded-xl overflow-hidden">
                        <Image className='' src='/blog.png' alt="" width={700} height={200} />
                        <div className="p-4">
                            <SectionHeader descritionClassName='text-xl font-bold mt-2 w-[600px] gap-0' className='text-black gap-0 ' title='30 March 2024' description='Revitalizing Workplace Morale: Innovative Tactics For Boosting Employee Engagement In 2024' />
                            <Link href="#" className="text-[#309689] mt-4 block">Read more &rarr;</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default news;