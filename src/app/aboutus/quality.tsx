import React from 'react'
import Image from 'next/image'
import SectionHeader from '@/components/sectionHeader'
import Working from "@/components/working"
const quality = () => {
    return (
        <>
            <div className="flex flex-row justify-center gap-10">
                <Image className='pb-5 pt-24' src='/quality.png' alt="" width={600} height={600} />
                <div className="flex flex-col justify-center">
                    <SectionHeader descritionClassName=' text-[16px] font-normal w-[600px] pb-6' className='w-[471px] text-[40px] font-bold pb-6 justify-center' title='We&apos;re Only Working With The Best' description='Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit.' />
                    <div className="flex flex-row gap-[39px]">
                        <Working title='Quality Jobs' ImgSrc='/bestjobs.png' />
                        <Working title='Resume builder' ImgSrc='/resume.png' />

                    </div>
                    <div className="flex flex-row gap-[9px]">
                        <Working title='Top Companies' ImgSrc='/topcompany.png' />
                        <Working title='Top Talents' ImgSrc='/toptalent.png' />

                    </div>
                </div>

            </div>
        </>
    )
}

export default quality