import React from 'react'
import SectionHeader from '@/components/sectionHeader'
import Image from 'next/image'
import Link from 'next/link'
import Information1 from '@/components/information'
const Information = () => {
    return (
        <div>
            <div className='flex flex-row gap-14 pt-20 justify-center pl-6 pr-6'>
                <div className='grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1'>

                    <Image src='/worker(3).png' alt="" width={450} height={455} />
                    <div className='flex flex-col gap-8 justify-center '>
                        <SectionHeader descritionClassName='font-normal text-[12px] md:pt-2 lg:pt-0 pt-2 lg:text-[16px] lg:w-[490px]' className=' text-[30px] md:pt-2 lg:pt-0 pt-2 lg:text-[50px] font-bold lg:w-[520px]' title='Good Life Begins With A Good Company' description='Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo sagittis consectetur diam morbi erat aenean. Vulputate praesent congue faucibus in euismod feugiat euismod volutpat' />
                        <div className='flex flex-row items-center gap-10'>
                            <Link className='flex flex-row justify-center items-center rounded-lg text-white lg:w-[110px] w-[100px] h-[30px] lg:h-[50px]  bg-[#309689]' href='/jobdetail'>Search Jobs</Link>
                            <Link className=' underline text-[#309689]' href='/viewall'>View All</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row pl-3 pr-3 justify-center'>
                <div className='grid content-center md:grid-cols-3 text-center lg:text-left justify-center gap-[100px] pt-24'>
                    <Information1 h1='12K+' title='Client Worldwide' />
                    <Information1 h1='20K+' title='Active Resume' />
                    <Information1 h1='18K+' title='Company' />
                </div>
            </div>
        </div>
    )
}

export default Information