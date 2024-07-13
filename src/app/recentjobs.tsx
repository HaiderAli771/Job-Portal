import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './Footer'
import News from './news'
import SectionHeader from '@/components/sectionHeader'
import Category from '@/components/Category'
import Category1 from './category'
import Testimonials from '@/components/Testimonials'
import Testimonial from './testimonial'
import Information from './Information'
import BetterFuture from './betterfuture'
const recentjobs = () => {
    return (
        <>
            <div className='flex flex-row justify-between items-center bg-white pl-10 pr-10 mb-16 mt-10'>
                <SectionHeader className=' font-bold text-[30px] pt-10' title='Recent jobs available' />
                <Link className='underline text-[#309689]' href='/Jobs'>View All</Link>
            </div>
            <div className='p-10 m-10  rounded-2xl shadow-md'>
                <div className='flex flex-row justify-between pl-2'>
                    <div className=' w-24 rounded-lg bg-[#a0dad2] text-white'>
                        <p className='flex flex-row justify-center items-center'>10 min ago</p>
                    </div>
                    <Image className='w-[24px] h-[24px] ' src='/Icon.png' alt="" width={200} height={200} />
                </div>
                <div className='flex flex-row gap-2 mt-3'>
                    <Image className='w-[40px] h-[40px] ' src='/Logo (5).png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <SectionHeader descritionClassName='text-[13px] font-medium gap-0' className=' text-[20px] gap-0' title='Forward Security Director' description='Bauch, Schuppe and Schulist Co' />

                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Hotel And Tourism' />
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0' title='Full Time' />
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='$40000-$42000' />
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='New-York, USA' />
                    </div>
                    <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[100px] h-[40px] bg-[#309689]' href='/jobdetail'>Job Detail</Link>
                </div>
            </div>
            <div className='p-10 m-10  rounded-2xl shadow-md'>
                <div className='flex flex-row justify-between pl-2'>
                    <div className=' w-24 rounded-lg bg-[#a0dad2] text-white'>
                        <p className='flex flex-row justify-center items-center'>12 min ago</p>
                    </div>
                    <Image className='w-[24px] h-[24px] ' src='/Icon.png' alt="" width={200} height={200} />
                </div>
                <div className='flex flex-row gap-2 mt-3'>
                    <Image className='w-[40px] h-[40px] ' src='/Logo (6).png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <SectionHeader descritionClassName='text-[13px] font-medium gap-0' className=' text-[20px] gap-0' title='FRegional Creative Facilitator' description='Wisozk - Becker Co' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Media' />
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Part Time' />
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='$28000-$32000' />
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Los- Angeles, USA' />
                    </div>
                    <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[100px] h-[40px] bg-[#309689]' href='/jobdetail'>Job Detail</Link>
                </div>
            </div>
            <div className='p-10 m-10  rounded-2xl shadow-md'>
                <div className='flex flex-row justify-between pl-2'>
                    <div className=' w-24 rounded-lg bg-[#a0dad2] text-white'>
                        <p className='flex flex-row justify-center items-center'>15 min ago</p>
                    </div>
                    <Image className='w-[24px] h-[24px] ' src='/Icon.png' alt="" width={200} height={200} />
                </div>
                <div className='flex flex-row gap-2 mt-3'>
                    <Image className='w-[40px] h-[40px] ' src='/Logo (7).png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <SectionHeader descritionClassName='text-[13px] font-medium gap-0' className=' text-[20px] gap-0' title='Internal Integration Planner' description='Mraz, Quigley and Feest Inc.' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Construction' />
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Full Time' />
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='$48000-$50000' />
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Texas, USA' />
                    </div>
                    <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[100px] h-[40px] bg-[#309689]' href='/jobdetail'>Job Detail</Link>
                </div>
            </div>
            <div className='p-10 m-10  rounded-2xl shadow-md'>
                <div className='flex flex-row justify-between pl-2'>
                    <div className=' w-24 rounded-lg bg-[#a0dad2] text-white'>
                        <p className='flex flex-row justify-center items-center'>24 min ago</p>
                    </div>
                    <Image className='w-[24px] h-[24px] ' src='/Icon.png' alt="" width={200} height={200} />
                </div>
                <div className='flex flex-row gap-2 mt-3'>
                    <Image className='w-[40px] h-[40px] ' src='/Logo (8).png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <SectionHeader descritionClassName='text-[13px] font-medium gap-0' className=' text-[20px] gap-0' title='District Intranet Director' description='VonRueden - Weber Co' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Commerce' />
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Full Time' />
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='$42000-$48000' />
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Florida, USA' />
                    </div>
                    <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[100px] h-[40px] bg-[#309689]' href='/jobdetail'>Job Detail</Link>
                </div>
            </div>
            <div className='p-10 m-10  rounded-2xl shadow-md'>
                <div className='flex flex-row justify-between pl-2'>
                    <div className=' w-24 rounded-lg bg-[#a0dad2] text-white'>
                        <p className='flex flex-row justify-center items-center'>26 min ago</p>
                    </div>
                    <Image className='w-[24px] h-[24px] ' src='/Icon.png' alt="" width={200} height={200} />
                </div>
                <div className='flex flex-row gap-2 mt-3'>
                    <Image className='w-[40px] h-[40px] ' src='/Logo (9).png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <SectionHeader descritionClassName='text-[13px] font-medium gap-0' className=' text-[20px] gap-0' title='Corporate Tactics Facilitator' description='Cormier, Turner and Flatley Inc' />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between gap-2 pt-5'>
                    <div className='flex flex-row gap-2'>
                        <Image className='w-[24px] h-[24px]   ' src='/briefcase(2) 2.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Commerce' />
                        <Image className='w-[24px] h-[24px]  ' src='/clock (1).png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Full Time' />
                        <Image className='w-[24px] h-[24px]  ' src='/wallet.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='$38000-$40000' />
                        <Image className='w-[24px] h-[24px]  ' src='/map.png' alt="" width={200} height={200} />
                        <SectionHeader className='text-[#6C757D] mr-4 text-[16px] flex-row gap-0 ' title='Boston, USA' />
                    </div>
                    <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[100px] h-[40px]  bg-[#309689]' href='/jobdetail'>Job Detail</Link>
                </div>
            </div>

        </>
    )
}

export default recentjobs