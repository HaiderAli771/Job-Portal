import React from 'react'
import SectionHeader from '@/components/sectionHeader'
import Testimonials from '@/components/Testimonials'
const testimonial = () => {
    return (
        <div>
            <div className='bg-[#cffff8] flex flex-col justify-center '>
                <div className='flex flex-col justify-center items-center gap-5 mb-14 mt-14'>
                    <SectionHeader descritionClassName=' text-center font-normal text-[16px]' className='  text-black text-[40px] font-bold text-center' title='Testimonial From Our Customers' description='At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id...' />
                </div>
                <div className='flex flex-row justify-center mb-14'>

                    <Testimonials title='Amazing services' name='Marco Kihn' ImgSrc={'/Avatar.png'} />

                    <Testimonials title='Everything simple' name='Kristin Hester' ImgSrc={'/Avatar (3).png'} />

                    <Testimonials title='Awesome, thank you!' name='Zion Cisnerous' ImgSrc={'/Avatar (1).png'} />

                </div>
            </div >
        </div>
    )
}

export default testimonial