import React from 'react'
import SectionHeader from '@/components/sectionHeader'
import Category from '@/components/Category'

const category = () => {
    return (
        <div>
            <div className='flex flex-col items-center pb-14 ml-2 mr-2 rounded-xl pt-10 mt-2 gap-10  justify-center bg-[#cffff8]'>
                <SectionHeader descritionClassName=' text-center font-normal text-[14px] md:text-[17px]' className='  md:text-[25px] text-[18px] font-bold text-center' title='Browse by Category' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.' />
                <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5'>
                    <Category title='Agriculture' description='1254 Jobs' ImageSrc='/plant.png' />
                    <Category title='Metal Production' description='816 Jobs' ImageSrc='/metal.png' />
                    <Category title='Commerce' description='2082 Jobs' ImageSrc='/bag.png' />
                    <Category title='Construction' description='1582 Jobs' ImageSrc='/construction.png' />
                    <Category title='Hotels & Tourism' description='1022 Jobs' ImageSrc='/hotel.png' />
                    <Category title='Education' description='1496 Jobs' ImageSrc='/education.png' />
                    <Category title='Financial Services' description='1549 Jobs' ImageSrc='/coin.png' />
                    <Category title='Transport' description='1582 Jobs' ImageSrc='/bus.png' />
                </div>

            </div>
        </div >
    )
}

export default category