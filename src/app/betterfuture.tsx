import React from 'react'
import SectionHeader from '@/components/sectionHeader'
import Link from 'next/link'
import Image from 'next/image'
const betterfuture = () => {
    return (
        <div>
            <div className='flex flex-row bg-black pl-16 pr-16 m-[150px] justify-between rounded-xl'>
                <div className='flex flex-col gap-8'>
                    <SectionHeader descritionClassName='text-white w-[600px] font-normal text-[16px]' className='text-[50px] font-bold text-white w-[470px] pt-11 ' title='Create A Better Future For Yourself' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.Blandit a massa elementum id scelerisque rhoncus' />
                    <Link className='flex mb-11 flex-row justify-center items-center rounded-lg text-white w-[110px] h-[50px]  bg-[#309689]' href='/Jobs'>Search Jobs</Link>
                </div>
                <Image src='/worker.png' alt="" width={600} height={420} />
            </div>
        </div>
    )
}
export default betterfuture;