import React from 'react'
import SectionHeader from '@/components/sectionHeader'
import Image from 'next/image'
import Link from 'next/link'
import Information1 from '@/components/information'
const Information = () => {
    return (
        <div>
            <div className='flex flex-row gap-14 pt-20 justify-center pl-6 pr-6'>
                <Image src='/worker(3).png' alt="" width={450} height={455} />
                <div className='flex flex-col gap-8 justify-center '>
                    <SectionHeader descritionClassName='font-normal text-[16px] w-[600px]' className=' text-[50px] font-bold w-[551px]' title='Good Life Begins With A Good Company' description='Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat' />
                    <div className='flex flex-row items-center gap-10'>
                        <Link className='flex flex-row justify-center items-center rounded-lg text-white w-[110px] h-[50px]  bg-[#309689]' href='/jobdetail'>Search Jobs</Link>
                        <Link className=' underline text-[#309689]' href='/viewall'>View All</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center gap-[20px] pt-24'>
                <div className='pl-6 pr-6'>
                    <Information1 h1='12K+' title='Client Worldwide' />
                </div>
                <div className='pl-6 pr-6'>
                    <Information1 h1='20K+' title='Active Resume' />
                </div>
                <div className='pl-6 pr-6'>
                    <Information1 h1='18K+' title='Company' />
                </div>
            </div>
        </div>
    )
}

export default Information