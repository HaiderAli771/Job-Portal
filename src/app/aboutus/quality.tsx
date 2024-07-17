import React from 'react'
import Image from 'next/image'
import SectionHeader from '@/components/sectionHeader'
import Working from "@/components/working"
const quality = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-col xl:flex-row  md:justify-center gap-10">
                <div className='flex flex-row justify-center'>
                    <Image className='pr-5 pl-5 pb-5 pt-24 ' src='/quality.png' alt="" width={600} height={600} />
                </div>
                <div className=" flex flex-col items-center justify-center ">
                    <SectionHeader descritionClassName=' md:text-[16px] text-sm pr-5 pl-5 font-normal md:w-[511px] pb-6' className='md:w-[471px] text-md text-center md:text-ellipsis md:text-[40px] font-bold pl-2 pr-2 pb-6 justify-center' title='We&apos;re Only Working With The Best' description='Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit.' />
                    <div className="flex flex-row gap-[29px] pl-[25px] pr-[25px]">
                        <Working title='Quality Jobs' ImgSrc='/bestjobs.png' />
                        <div className='pl-[6px]'>
                            <Working title='Resume builder' ImgSrc='/resume.png' />
                        </div>

                    </div>
                    <div className="flex flex-row gap-[29px] pl-[25px] pr-[25px]">
                        <Working title='Quality Jobs' ImgSrc='/topcompany.png' />
                        <Working title='Resume builder' ImgSrc='/toptalent.png' />

                    </div>
                </div>

            </div>
        </>
    )
}

export default quality