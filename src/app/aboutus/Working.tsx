import React from 'react'
import SectionHeader from '@/components/sectionHeader';
import Image from 'next/image';
import Aboutus from "@/components/Aboutus"

const Working = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center pt-20 gap-2">
                <Image className='rounded-xl w-0 md:w-auto' src='/herobackground.png' alt="" width={1300} height={500} />
                <SectionHeader descritionClassName='md:w-[680px] flex pt-6  flex-col items-center text-[16px] justify-center font-normal' className='text-[30px] text-center font-bold pt-10 md:pt-16' title='How It&apos;s Works' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus.' />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-32 mr-5 ml-5 md:ml-10 md:mr-10 mb-10 md:mb-20">
                <Aboutus ImgSrc='/contact.png' descritionClassName=' w-[240px] flex flex-col items-center text-[16px] pb-5 font-normal' className=' text-[30px] font-bold text-center' title='Create Account' description='Nunc sed a nisl purus. Nibh dis faucibus proin lacus' />
                <Aboutus ImgSrc='/file.png' descritionClassName='w-[240px] flex flex-col items-center text-[16px] pb-5 font-normal' className=' text-[30px] font-bold text-center' title='Upload Resume' description='Felis eu ultrices a sed massa. Commodo fringilla sed tempor ' />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10  mr-5 ml-5 md:ml-10 md:mr-10 mb-32">
                <Aboutus ImgSrc='/briefcase1.png' descritionClassName='w-[240px] flex flex-col items-center text-[16px] pb-5 font-normal' className=' text-[30px] font-bold text-center' title='Find Jobs' description=' Commodo fringilla sed tempor risus laoreet ultricies ipsum' />
                <Aboutus ImgSrc='/tick.png' descritionClassName='w-[240px] flex flex-col items-center text-[16px] pb-5 font-normal' className=' text-[30px] font-bold text-center' title='Apply Job' description=' Nisi enim feugiat enim volutpat. Sem quis viverra ' />
            </div>
        </>
    )
}

export default Working