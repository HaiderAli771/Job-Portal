import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    title?: string;
    description?: string;
    className?: string;
    descritionClassName?: string;
    h1?: string;
    h1ClassName?: string;
    name?: string;
    reviewText?: string;
    ImgSrc?: any;


}

const index = ({ title, description, className, descritionClassName, }: Props) => {
    return (
        <>
            <div className='flex flex-col '>
                <div className='flex flex-row gap-2 mt-3'>
                    <h3 className='text-white w-10 h-10 mt-[6px] content-center bg-[#309689] rounded-md text-center text-[20px] items-center'>{title}</h3>
                    <div className='flex flex-col justify-center'>
                        <p className="text-[20px] text-white w-[280px]">Elit gravida lorem amet porta risus vitae at</p>
                        <Link className=' text-[#309689]' href='/viewall'>Learn More</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default index;
