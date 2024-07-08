import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/sectionHeader'
const Hero = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div className='flex flex-col justify-center items-center '>
                    <SectionHeader descritionClassName='text-[19px] text-white text-center font-normal' className=' text-white text-[70px] font-bold' title='Find Your Dream Job Today!' description='Connecting Talent with Opportunity: Your Gateway to Career Success' />
                </div>
                <div className="flex items-center space-x-0 bg-white shadow-md rounded-lg m-0 pl-[25px]">
                    <input
                        type="text"
                        placeholder="Job Title or Company"
                        className="flex-grow m-0 p-2 border-none outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-lg"
                    />
                    <select
                        className="m-0 p-2 border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-none"
                    >
                        <option>Select Location</option>
                    </select>
                    <select
                        className="m-0 p-2 border-l  border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-none"
                    >
                        <option>Select Category</option>
                    </select>
                    <button
                        className="bg-[#309689] h-[60px] text-white m-0 p-2 rounded-r-lg hover:bg-green-600 focus:outline-none focus:bg-green-700"
                    >
                        Search Job
                    </button>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center gap-20 text-white '>
                <div className='flex flex-row gap-1'>
                    <Image className='w-[60px] h-[60px] ' src='/briefcase.png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <SectionHeader descritionClassName='text-[14px] gap-0 ' className=' text-[20px] gap-0' title='25000' description='Jobs' />
                    </div>
                </div>
                <div className='flex flex-row gap-1'>
                    <Image className='w-[60px] h-[60px] ' src='/people.png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-[20px]'>10000</h3>
                        <p>Candidates</p>
                    </div>
                </div>
                <div className='flex flex-row gap-1'>
                    <Image className='w-[60px] h-[60px] ' src='/company.png' alt="" width={200} height={200} />
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-[20px]'>18000</h3>
                        <p>Companies</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between gap-10 p-8 bg-black'>
                <Image className='w-[140px] h-[40px] ' src='/Vector (8).png' alt="" width={200} height={200} />
                <Image className='w-[140px] h-[40px] ' src='/logos.png' alt="" width={200} height={200} />
                <Image className='w-[140px] h-[40px] ' src='/logo (1).png' alt="" width={200} height={200} />
                <Image className='w-[140px] h-[40px] ' src='/logo (2).png' alt="" width={200} height={200} />
                <Image className='w-[140px] h-[40px] ' src='/logo (3).png' alt="" width={200} height={200} />
            </div>

        </>
    )
}

export default Hero