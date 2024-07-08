import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SectionHeader from '@/components/sectionHeader'
const news = () => {
    return (
        <>
            <div className='flex flex-row justify-center gap-10 pb-20 pt-20'>
                <div className='flex flex-col gap-6 '>
                    <SectionHeader descritionClassName='text-[14px]' className=' text-[40px] text-black' title='News And Blogs' description='Metus faucibus sed turpis lectus feugiat tincidunt. Rhoncus sed tristique in dolor' />
                    <Image className='' src='/news.png' alt="" width={636} height={400} />
                    <div className='flex flex-col gap-3'>
                        <p>30 March 2024</p>
                        <h1 className='text-[20px] font-bold text-black w-[696px]'>Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024</h1>

                        <Link className=' flex flex-row gap-2 items-center text-[#309689]' href='/viewall'>Read More
                            <Image className='' src='/arrow-right.png' alt="" width={20} height={20} />
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col gap-6 mt-32 '>
                    <Image className='' src='/blog.png' alt="" width={636} height={400} />
                    <div className='flex flex-col gap-3'>
                        <p>30 March 2024</p>
                        <h1 className='text-[20px] font-bold text-black w-[696px]'>How to avoid the top six most common job interview mistakes in bussiness in 2024</h1>

                        <Link className=' flex flex-row gap-2 items-center text-[#309689]' href='/viewall'>Read More
                            <Image className='' src='/arrow-right.png' alt="" width={20} height={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default news